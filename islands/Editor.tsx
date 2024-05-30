import { state } from "../stores/editorStore.ts";
import { Prompt } from "../components/Prompt.tsx";

export default function Editor() {
  const { imageUrl } = state();

  return (
    <div class="flex flex-col h-full gap-2">
      <div class="flex grow bg-mocha-base rounded shadow-xl items-center justify-center">
        <img
          class="h-auto max-h-full max-w-full rounded aspect-square animate-pulse"
          src={imageUrl}
          alt="generation preview"
        />
      </div>
      <div class="bg-mocha-base rounded shadow-xl p-4">
        <Prompt />
      </div>
    </div>
  );
}
