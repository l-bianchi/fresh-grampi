import { HfInference } from "https://esm.sh/@huggingface/inference@2.3.2";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const hf = new HfInference(Deno.env.get("HUGGINGFACE_ACCESS_TOKEN"));

interface Payload {
  prompt: string;
}

Deno.serve(async (req) => {
  const payload: Payload = await req.json();
  const supabase = createClient(
    // Supabase API URL - env var exported by default when deployed.
    Deno.env.get("SUPABASE_URL") ?? "",
    // Supabase API SERVICE ROLE KEY - env var exported by default when deployed.
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  const image = await hf.textToImage({
    inputs: payload.prompt,
    model: "CompVis/stable-diffusion-v1-4",
  });

  // Upload the image to Supabase storage
  await supabase.storage
    .from("images")
    .upload(`public/${Date.now()}.png`, image, {
      cacheControl: "3600",
      upsert: false,
    });

  return new Response("ok");
});
