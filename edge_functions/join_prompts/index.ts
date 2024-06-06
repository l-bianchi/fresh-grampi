import { createClient } from '@supabase/supabase-js';
import { HfInference } from '@huggingface/inference';

// Define the Supabase URL and anonymous key
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_KEY");

// Read the HuggingFace API key from a file and trim any extraneous whitespace
const huggingFaceApiKey = Deno.env.get("HUGGINGFACE_KEY");

// Create a Supabase client using the provided URL and key
const supabase = createClient(supabaseUrl, supabaseKey);

// Create an instance of HuggingFace Inference with the provided API key
const hfInference = new HfInference(huggingFaceApiKey);

// Function to join and transform messages using HuggingFace and store result in Supabase
async function joinAndTransformMessages(messages: string[], initialPrompt: string): Promise<string> {
  // Join initial prompt with the array of messages into a single string
  const joinedMessage = initialPrompt + " " + messages.join(" ");

  // Define the model to be used for text generation
  const model = 'meta-llama/Meta-Llama-3-8B';

  // Call HuggingFace API for text generation with the concatenated message and specified parameters
  const hfResponse = await hfInference.textGeneration({
    model,
    inputs: joinedMessage,
    parameters: {
      max_length: 100,
      num_return_sequences: 1,
    },
  });

  // Get the generated text from the HuggingFace response
  const transformedText = hfResponse.generated_text;

  // Insert the transformed text into the 'image_prompts' table in Supabase
  const { data, error } = await supabase
    .from('image_prompts')
    .insert([{ prompt: transformedText }]);

  // If there's an error, log it and throw an error
  if (error) {
    console.error(error);
    throw new Error('Error inserting into Supabase');
  }

  // Return the transformed text
  return transformedText;
}