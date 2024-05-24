import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface GeneratorProps {
  sessionId: string;
}

export default function Counter({ sessionId }: GeneratorProps) {
  const [_, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sessionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div class="flex gap-4 items-center justify-center">
      <p class="px-4 py-6 text-3xl text-latte-text dark:text-mocha-text bg-latte-mantle border-2 border-latte-mauve rounded dark:bg-mocha-mantle dark:border-mocha-mauve">
        {sessionId}
      </p>
      <Button onClick={copyToClipboard}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
          />
        </svg>
      </Button>
      <Button
        onClick={() => window.location.href = `/${sessionId}`}
      >
        Enter
      </Button>
    </div>
  );
}
