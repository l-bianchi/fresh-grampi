import { useState } from "preact/hooks";
import { Button } from "./Button.tsx";

interface PromptProps {
  sessionId: string;
}

export function Prompt({ sessionId }: PromptProps) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://fresh-grampi.deno.dev/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, sessionId }),
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
    }

    setText("");
  };

  return (
    <div class="flex w-full h-full">
      <input
        type="text"
        class="w-full p-4 text-sm font-medium text-mocha-text bg-transparent focus:outline-none"
        placeholder="..."
        value={text}
      />
      <Button onClick={handleSubmit}>
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
