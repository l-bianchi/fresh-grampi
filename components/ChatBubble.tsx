interface ChatBubbleProps {
  message: string;
}
export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div class="flex flex-col w-full leading-relaxed p-4 border-mocha-lavender bg-mocha-surface0 rounded shadow">
      <div class="flex justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-sm font-semibold text-mocha-text">
            Bonnie Green
          </span>
          <span class="text-sm font-normal text-mocha-subtext0">
            11:46
          </span>
        </div>
        <img
          class="w-8 h-8 rounded-full"
          src="https://placehold.co/128x128"
          alt="Jese image"
        />
      </div>
      <p class="text-sm font-normal py-2.5 text-mocha-text">
        {message}
      </p>
    </div>
  );
}
