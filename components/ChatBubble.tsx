export function ChatBubble() {
  return (
    <div class="flex flex-col w-full leading-relaxed p-4 border-mocha-lavender bg-mocha-surface0 rounded shadow">
      <div class="flex items-center space-x-2">
        <img
          class="flex w-8 h-8 rounded-full"
          src="https://placehold.co/128x128"
          alt="Jese image"
        />
        <span class="text-sm font-semibold text-mocha-text">
          Bonnie Green
        </span>
        <span class="text-sm font-normal text-mocha-subtext0">
          11:46
        </span>
      </div>
      <p class="text-sm font-normal py-2.5 text-mocha-text">
        That's awesome. I think our users will really appreciate the
        improvements.
      </p>
    </div>
  );
}
