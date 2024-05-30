import { ImagePreview } from "../components/ImagePreview.tsx";
import { Prompt } from "../components/Prompt.tsx";

export default function Editor() {
  return (
    <div class="flex flex-col h-full w-full gap-2">
      <div class="flex h-4/5 bg-latte-crust dark:bg-mocha-crust items-center justify-center">
        <ImagePreview />
      </div>
      <div class="h-1/5 bg-latte-crust dark:bg-mocha-crust rounded shadow">
        <Prompt />
      </div>
    </div>
  );
}
