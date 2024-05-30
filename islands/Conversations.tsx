import { ChatBubble } from "../components/ChatBubble.tsx";

export default function Conversations() {
  return (
    <div class="flex flex-col p-4 gap-2 items-center">
      <ChatBubble />
      <ChatBubble />
    </div>
  );
}
