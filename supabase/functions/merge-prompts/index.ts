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

  const prompt =
    "Generate a very short prompt that can be used to create an image based on the given messages. Use only the subject and its adjectives separated by commas in the generated prompt.";
  const promtpMessages = oldPrompt !== ""
    ? [lastMessage, oldPrompt].join(", ")
    : lastMessage;

  // Join initial prompt with the array of messages into a single string
  const joinedMessage = prompt + "\nMessages: " + promtpMessages + "\nPrompt: ";
  console.log(joinedMessage);

  // Define the model to be used for text generation
  const model = "HuggingFaceH4/zephyr-7b-beta";

  // Call HuggingFace API for text generation with the concatenated message and specified parameters
  const hfResponse = await hf.textGeneration({
    model,
    inputs: joinedMessage,
    parameters: {
      num_return_sequences: 1,
      // temperature: 0.1,
      // max_new_tokens: 1024,
      return_full_text: false,
    },
  }, {
    use_cache: false,
  });

  const generatedText = hfResponse.generated_text.split("\n")[0].trim();
  console.log(generatedText);

  // Insert the transformed text into the 'image_prompts' table in Supabase
  const { error } = await supabase
    .from("sessions")
    .update({ prompt: generatedText })
    .eq("id", sessionId);

  // If there's an error, log it and throw an error
  if (error) {
    console.error(error);
    throw new Error("Error inserting into Supabase");
  }

  return new Response(generatedText);
});
