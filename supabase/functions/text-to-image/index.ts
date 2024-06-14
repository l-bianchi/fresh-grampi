import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HfInference } from "https://esm.sh/@huggingface/inference@2.3.2";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const hf = new HfInference(Deno.env.get("HUGGING_FACE_ACCESS_TOKEN"));

serve(async (req) => {
  const { prompt, sessionId } = await req.json();
  const supabase = createClient(
    // Supabase API URL - env var exported by default when deployed.
    Deno.env.get("SUPABASE_URL") ?? "",
    // Supabase API SERVICE ROLE KEY - env var exported by default when deployed.
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );
  console.log(`Generating with prompt: ${prompt}`);

  const image = await hf.textToImage(
    {
      inputs: prompt,
      model: "stabilityai/sdxl-turbo",
      // model: "CompVis/stable-diffusion-v1-4",
    },
    {
      use_cache: false,
    },
  );
  console.log("Image generated successfully");

  // Upload the image to Supabase storage
  await supabase.storage
    .from("images")
    .upload(`${sessionId}/image.png`, image, {
      cacheControl: "3600",
      upsert: true,
    });

  return new Response("ok");
});
