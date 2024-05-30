import { ChatBubble } from "../components/ChatBubble.tsx";

interface ConversationsProps {
  sessionId: string;
}

export default function Conversations({ sessionId }: ConversationsProps) {
  return (
    <div class="flex flex-col h-full p-4 gap-2 items-center overflow-y-auto">
      <div class="sticky top">
        <p>{sessionId}</p>
      </div>
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
    </div>
  );
}
