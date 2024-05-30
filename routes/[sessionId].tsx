import { PageProps } from "$fresh/server.ts";
import Editor from "../islands/Editor.tsx";
import Conversations from "../islands/Conversations.tsx";

export default function Greet({ params }: PageProps) {
  return (
    <div class="w-screen h-screen p-4">
      <div class="flex w-full h-full gap-2">
        <div class="w-3/4">
          <Editor />
        </div>
        <div class="w-1/4 bg-mocha-base border-2 border-mocha-surface0 rounded shadow-md">
          <Conversations />
        </div>
      </div>
    </div>
  );
}
