import { createClient } from '@supabase/supabase-js';
import { HfInference } from '@huggingface/inference';
import { readFileSync } from 'fs';

// Supabase setup
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Hugging Face setup
const huggingFaceApiKey = readFileSync('.hugging_face_key', 'utf-8').trim();
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
