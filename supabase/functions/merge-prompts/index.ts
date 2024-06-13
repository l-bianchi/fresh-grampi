import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HfInference } from "https://esm.sh/@huggingface/inference@2.3.2";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const hf = new HfInference(Deno.env.get("HUGGING_FACE_ACCESS_TOKEN"));

serve(async (req) => {
  const { sessionId } = await req.json();
  const supabase = createClient(
    // Supabase API URL - env var exported by default when deployed.
    Deno.env.get("SUPABASE_URL") ?? "",
    // Supabase API SERVICE ROLE KEY - env var exported by default when deployed.
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  const { data: messagesData } = await supabase
    .from("messages")
    .select()
    .eq("session_id", sessionId);

  const messages = messagesData?.map(({ text }) => text);
  const lastMessage = messages ? messages[messages.length - 1] : "";
  console.log(lastMessage);

  const { data: promptData } = await supabase
    .from("sessions")
    .select()
    .eq("id", sessionId);

  const oldPrompt = promptData ? promptData[0].prompt : "";
  console.log(oldPrompt);

  const prompt = `
Generate a 50-word descriptive and creative prompt that can be used to create an image based on the given messages.

Instructions:
Read the Messages: Carefully read the provided messages to understand the themes, subjects, and details mentioned.

Extract Key Elements: Identify the key elements, emotions, and scenes described in the messages. Look for recurring themes, important details, and specific descriptions.

Combine the Elements: Synthesize the key elements into a cohesive and vivid description that paints a clear picture in the reader's mind.

Add Creative Details: Enhance the prompt with imaginative and artistic details to make the image concept more compelling and visually rich.
`;

  // Join initial prompt with the array of messages into a single string
  const joinedMessage = prompt + "Messages: " +
    [lastMessage, oldPrompt].join(", ") + "\nPrompt:";
  console.log(joinedMessage);

  // Define the model to be used for text generation
  const model = "HuggingFaceH4/zephyr-7b-beta";

  // Call HuggingFace API for text generation with the concatenated message and specified parameters
  const hfResponse = await hf.textGeneration({
    model,
    inputs: joinedMessage,
    parameters: {
      num_return_sequences: 1,
      temperature: 0.1,
      max_new_tokens: 1024,
    },
  }, {
    use_cache: false,
  });

  const splitText = hfResponse.generated_text.split("Prompt: ");

  // Get the generated text from the HuggingFace response
  const transformedText = splitText[splitText.length - 1];
  console.log(transformedText);

  // Insert the transformed text into the 'image_prompts' table in Supabase
  const { error } = await supabase
    .from("sessions")
    .update({ prompt: transformedText })
    .eq("id", sessionId);

  // If there's an error, log it and throw an error
  if (error) {
    console.error(error);
    throw new Error("Error inserting into Supabase");
  }

  return new Response(transformedText);
});
