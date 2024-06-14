import { FreshContext, Handlers } from "$fresh/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

export const handler: Handlers = {
  async POST(_req: Request, _ctx: FreshContext): Promise<Response> {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonPublic = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (supabaseUrl && supabaseAnonPublic) {
      const supabase = createClient(supabaseUrl, supabaseAnonPublic);
      const body = await _req.json();

      const { error } = await supabase
        .from("messages")
        .insert({ text: body.text, session_id: body.sessionId });

      if (error) {
        return new Response(error.message);
      }

      const response = await fetch(
        `${supabaseUrl}/functions/v1/${"merge-prompts"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseAnonPublic}`,
          },
          body: JSON.stringify({ sessionId: body.sessionId }),
        },
      );

      const generatedPrompt = await response.text();

      await fetch(
        `${supabaseUrl}/functions/v1/${"text-to-image"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseAnonPublic}`,
          },
          body: JSON.stringify({
            prompt: generatedPrompt,
            sessionId: body.sessionId,
          }),
        },
      );

      return new Response(JSON.stringify("ok"));
    }

    return new Response("Error connecting to supabase!");
  },
  async GET(_req: Request, _ctx: FreshContext): Promise<Response> {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonPublic = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (supabaseUrl && supabaseAnonPublic) {
      const supabase = createClient(supabaseUrl, supabaseAnonPublic);
      const url = new URL(_req.url);
      const params = new URLSearchParams(url.search);

      const { data } = await supabase
        .from("messages")
        .select()
        .eq("session_id", params.get("sessionId"))
        .order("id", { ascending: false });

      return new Response(JSON.stringify(data));
    }

    return new Response("Error connecting to supabase!");
  },
};
