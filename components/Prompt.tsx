import { Button } from "./Button.tsx";

export function Prompt() {
  return (
    <div class="w-full p-5 flex gap-2">
      <input
        class="w-full p-2 bg-transparent border rounded-xl"
        type="text"
        placeholder={"Write here your prompt"}
      />
      <Button>
        <div class="w-[20px] h-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="w-full h-full"
          >
            <path
              fill="currentColor"
              d="M4 18.5v-13L19.423 12zM5 17l11.85-5L5 7v3.885L9.846 12L5 13.116zm0 0V7z"
            />
          </svg>
        </div>
        Send
      </Button>
    </div>
  );
}
