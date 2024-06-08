import { Prompt } from "../components/Prompt.tsx";

interface EditorProps {
  sessionId: string;
}

export default function Editor({ sessionId }: EditorProps) {
  return (
    <div class="flex flex-col h-full gap-2">
      <div class="flex grow bg-mocha-base rounded shadow-xl items-center justify-center">
        <img
          class="h-auto max-h-full max-w-full rounded aspect-square animate-pulse"
          src="https://placehold.co/512x512?text=Generating+Your+Fantastic+Image"
          alt="generation preview"
        />
      </div>
      <div class="bg-mocha-base rounded shadow-xl p-4">
        <Prompt sessionId={sessionId} />
      </div>
    </div>
  );
}
