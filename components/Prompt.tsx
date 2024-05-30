import { Button } from "./Button.tsx";

export function Prompt() {
  return (
    <div class="flex w-full h-full bg-mocha-surace0">
      <input
        type="text"
        class="w-full p-4 text-sm font-medium text-mocha-text bg-transparent focus:outline-none"
        placeholder="..."
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </Button>
    </div>
  );
}
