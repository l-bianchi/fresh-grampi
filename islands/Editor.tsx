import { ImagePreview } from "../components/ImagePreview.tsx";
import { Prompt } from "../components/Prompt.tsx";

export default function Editor() {
  return (
    <div class="flex flex-col h-full w-full gap-2">
      <div class="flex h-full bg-mocha-base border-2 border-mocha-surface0 rounded shadow-md items-center justify-center">
        <ImagePreview />
      </div>
      <div class="h-fit bg-mocha-base border-2 border-mocha-surface0 rounded shadow-md p-4">
        <Prompt />
      </div>
    </div>
  );
}
