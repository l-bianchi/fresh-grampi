import { PageProps } from "$fresh/server.ts";
import Editor from "../islands/Editor.tsx";
import Conversations from "../islands/Conversations.tsx";

export default function Room({ params }: PageProps) {
  return (
    <div class="grow p-4">
      <div class="flex gap-2">
        <div class="w-3/4">
          <Editor />
        </div>
        <div class="w-1/4 bg-mocha-base rounded shadow-xl overflow-hidden">
          <Conversations sessionId={params.sessionId} />
        </div>
      </div>
    </div>
  );
}
