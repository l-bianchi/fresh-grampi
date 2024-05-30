import { ChatBubble } from "../components/ChatBubble.tsx";

export default function Conversations() {
  return (
    <div class="flex flex-col">
      <ChatBubble />
      <ChatBubble />
    </div>
  );
}
