import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";
import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseAnonPublic = Deno.env.get("SUPABASE_ANON_PUBLIC");

  if (supabaseUrl && supabaseAnonPublic) {
    const supabase = createClient(supabaseUrl, supabaseAnonPublic);

    const { data } = await supabase
      .from("messages")
      .select();
    return new Response(JSON.stringify(data));
  }

  return new Response("Error connecting to supabase!");
};
