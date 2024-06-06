import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";
import { FreshContext } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

const supabase = createClient(
  env["SUPABASE_URL"],
  env["SUPABASE_ANON_PUBLIC"],
);

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { data } = await supabase
    .from("messages")
    .select();
  return new Response(JSON.stringify(data));
};
