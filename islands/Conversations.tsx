import { ChatBubble } from "../components/ChatBubble.tsx";

interface ConversationsProps {
  sessionId: string;
}

export default function Conversations({ sessionId }: ConversationsProps) {
  return (
    <div class="flex flex-col h-full">
      <div class="w-full p-4 bg-mocha-crust/80 backdrop-blur-sm">
        <p class="text-sm font-semibold text-mocha-mauve">{sessionId}</p>
      </div>
      <div class="flex flex-col h-full p-4 gap-2 items-center overflow-y-auto">
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
    </div>
  );
}
