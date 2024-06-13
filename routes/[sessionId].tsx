import { PageProps } from "$fresh/server.ts";
import Editor from "../islands/Editor.tsx";
import Conversations from "../islands/Conversations.tsx";

export default function Room({ params }: PageProps) {
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";

  return (
    <div class="grow p-4 overflow-hidden">
      <div class="flex h-full gap-2">
        <div class="w-3/4 h-full">
          <Editor
            sessionId={params.sessionId}
            supabaseUrl={supabaseUrl}
          />
        </div>
        <div class="w-1/4 h-full bg-mocha-base rounded shadow-xl overflow-hidden">
          <Conversations sessionId={params.sessionId} />
        </div>
      </div>
    </div>
  );
}
