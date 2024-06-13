import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HfInference } from "https://esm.sh/@huggingface/inference@2.3.2";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const hf = new HfInference(Deno.env.get("HUGGING_FACE_ACCESS_TOKEN"));

serve(async (req) => {
  // const { prompt, sessionId } = await req.json();
  const { prompt } = await req.json();
  // const supabase = createClient(
  //   // Supabase API URL - env var exported by default when deployed.
  //   Deno.env.get("SUPABASE_URL") ?? "",
  //   // Supabase API SERVICE ROLE KEY - env var exported by default when deployed.
  //   Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  // );

  // Join initial prompt with the array of messages into a single string
  const joinedMessage = prompt + " " + ["old", "messages"].join(" ");

  // Define the model to be used for text generation
  const model = "meta-llama/Meta-Llama-3-8B";

  // Call HuggingFace API for text generation with the concatenated message and specified parameters
  const hfResponse = await hf.textGeneration({
    model,
    inputs: joinedMessage,
    parameters: {
      num_return_sequences: 1,
    },
  });

  // Get the generated text from the HuggingFace response
  const transformedText = hfResponse.generated_text;

  // Insert the transformed text into the 'image_prompts' table in Supabase
  // const { data, error } = await supabase
  //   .from("image_prompts")
  //   .insert([{ prompt: transformedText }]);

  // If there's an error, log it and throw an error
  // if (error) {
  //   console.error(error);
  //   throw new Error("Error inserting into Supabase");
  // }

  return new Response(transformedText);
});
