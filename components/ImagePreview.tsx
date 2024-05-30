import { state } from "../stores/editorStore.ts";

export function ImagePreview() {
  const { imageUrl } = state();

  return (
    <div
      class={`bg-center bg-cover bg-no-repeat max-h-full h-2/3 max-w-full aspect-square rounded animate-pulse`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  );
}
