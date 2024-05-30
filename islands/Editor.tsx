import { ImagePreview } from "../components/ImagePreview.tsx";
import { Prompt } from "../components/Prompt.tsx";

export default function Editor() {
  return (
    <div class="flex flex-col h-full w-full gap-2">
      <div class="flex h-full bg-mocha-base rounded shadow-xl items-center justify-center">
        <ImagePreview />
        <img
          class="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
          src="/logo.svg"
          alt="image description"
        />
      </div>
      <div class="h-fit bg-mocha-base rounded shadow-xl p-4">
        <Prompt />
      </div>
    </div>
  );
}
