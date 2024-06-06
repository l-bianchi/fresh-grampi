import { useEffect, useState } from "preact/hooks";
import { ChatBubble } from "../components/ChatBubble.tsx";

interface ConversationsProps {
  sessionId: string;
}

export default function Conversations({ sessionId }: ConversationsProps) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://fresh-grampi.deno.dev/api/messages",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMessages(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div class="flex flex-col h-full">
      <div class="w-full p-4 bg-mocha-crust">
        <p class="text-sm font-semibold text-mocha-text">
          Room: <span class="text-mocha-mauve underline">{sessionId}</span>
        </p>
      </div>
      <div class="flex flex-col h-full p-4 gap-2 items-center overflow-y-auto">
        {messages.map((message) => <ChatBubble message={message} />)}
      </div>
    </div>
  );
}
