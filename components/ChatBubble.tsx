interface ChatBubbleProps {
  text: string;
  created_at: Date;
}
export function ChatBubble({ text, created_at }: ChatBubbleProps) {
  return (
    <div class="flex flex-col w-full leading-relaxed p-4 border-mocha-lavender bg-mocha-surface0 rounded shadow">
      <div class="flex justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-sm font-semibold text-mocha-text">
            Anonymous
          </span>
          <span class="text-sm font-normal text-mocha-subtext0">
            {created_at}
          </span>
        </div>
        <img
          class="w-8 h-8 rounded-full"
          src="https://placehold.co/128x128"
          alt="Jese image"
        />
      </div>
      <p class="text-sm font-normal py-2.5 text-mocha-text">
        {text}
      </p>
    </div>
  );
}
