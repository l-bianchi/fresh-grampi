import { createClient } from '@supabase/supabase-js';
import { HfInference } from '@huggingface/inference';

// Supabase setup
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

// Hugging Face setup
const huggingFaceApiKey = Deno.env.get("HUGGINGFACE_KEY");
const hf = new HfInference(huggingFaceApiKey);

async function generateAndStoreImage(prompt: string) {
  try {
    // Generate the image
    const image = await hf.textToImage({
      model: 'CompVis/stable-diffusion-v1-4',
      inputs: prompt
    });

    // Upload the image to Supabase storage
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`public/${Date.now()}.png`, image, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error generating or storing the image:', error);
  }
}

// Example usage
generateAndStoreImage('A futuristic city skyline at sunset');
