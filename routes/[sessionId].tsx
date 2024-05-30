import { PageProps } from "$fresh/server.ts";
import Editor from "../islands/Editor.tsx";
import Conversations from "../islands/Conversations.tsx";

export default function Room({ params }: PageProps) {
  return (
    <div class="w-full h-full p-4">
      <div class="flex w-full h-full gap-2">
        <div class="w-3/4 h-full">
          <Editor />
        </div>
        <div class="w-1/4 h-full bg-mocha-base rounded shadow-xl overflow-hidden">
          <Conversations sessionId={params.sessionId} />
        </div>
      </div>
    </div>
  );
}
