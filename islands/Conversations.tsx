import { ChatBubble } from "../components/ChatBubble.tsx";

interface ConversationsProps {
  sessionId: string;
}

export default function Conversations({ sessionId }: ConversationsProps) {
  return (
    <div class="relative flex flex-col h-full p-4 gap-2 items-center overflow-y-auto">
      <div class="fixed top-0 w-full p-4 bg-mocha-crust backdrop-blur-sm">
        <p class="text-sm font-semibold text-mocha-mauve">{sessionId}</p>
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
