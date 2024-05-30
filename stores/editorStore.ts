import {
  makeStore,
  useStore,
} from "https://esm.sh/statery@0.5.4?alias=react:preact/compat&deps=preact@10.19.6";

const store = makeStore({
  imageUrl: "https://placehold.co/512x512?text=Generating+Your+Fantastic+Image",
});

export const updateImageUrl = (imageUrl: string) =>
  store.set((_state) => ({
    imageUrl: imageUrl,
  }));

export const state = () => useStore(store);
