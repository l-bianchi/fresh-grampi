import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";
import { FreshContext } from "$fresh/server.ts";
//import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { load } from "$std/dotenv/mod.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const env = await load();
  console.log(env);

  const supabase = createClient(
    env["SUPABASE_URL"],
    env["SUPABASE_ANON_PUBLIC"],
  );

  const { data } = await supabase
    .from("messages")
    .select();
  return new Response(JSON.stringify(data));
};
