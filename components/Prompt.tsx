import { Button } from "./Button.tsx";

export function Prompt() {
  return (
    <div class="bg-mocha-surace0 border-2 border-mocha-overlay0 rounded">
      <input
        type="text"
        class="w-full p-4 text-sm font-medium text-mocha-text bg-transparent"
        placeholder="..."
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
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
