import {
  makeStore,
  useStore,
} from "https://esm.sh/statery@0.5.4?alias=react:preact/compat&deps=preact@10.19.6";

const store = makeStore<
  { messages: { text: string; created_at: string; sessionId: string }[] }
>({
  messages: [],
});

export const setMessages = (
  messages: { text: string; created_at: string; sessionId: string }[],
) =>
  store.set((_state) => ({
    messages: messages,
  }));

export const addMessage = (
  message: { text: string; created_at: string; sessionId: string },
) =>
  store.set((state) => ({
    messages: [message, ...state.messages],
  }));

export const state = () => useStore(store);
