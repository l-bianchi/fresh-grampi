import { useState } from "preact/hooks";

export default function Clipboard() {
  const [_, setCopied] = useState(false);
  const sessionId = crypto.randomUUID().slice(0, 17);

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
    <div class="w-full max-w-sm">
      <div class="flex items-center">
        <button class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-latte-text dark:text-mocha-text bg-latte-red dark:bg-mocha-red border-2 hover:bg-latte-maroon dark:hover:bg-mocha-maroon rounded-s border-latte-red dark:border-mocha-red hover:border-latte-maroon dark:hover:border-mocha-maroon focus:outline-none">
          Generate
        </button>
        <div class="relative w-full">
          <input
            id="url-shortener"
            type="text"
            aria-describedby="helper-text-explanation"
            class="bg-latte-surface0 dark:bg-mocha-surface0 border border-e-0 border-latte-overlay0 dark:border-mocha-overlay0 text-latte-subtext0 dark:text-mocha-subtext0 text-sm border-s-0 block w-full p-2.5"
            value={sessionId}
            readonly
            disabled
          />
        </div>
        <button
          data-tooltip-target="tooltip-url-shortener"
          data-copy-to-clipboard-target="url-shortener"
          class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-latte-text dark:text-mocha-text bg-latte-surface0 dark:bg-mocha-surface0 border border-latte-overlay0 dark:border-mocha-overlay0 rounded-e hover:bg-latte-surface1 dark:hover:bg-mocha-surface1 focus:outline-none"
          type="button"
          onClick={copyToClipboard}
        >
          <span id="default-icon">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <span id="success-icon" class="hidden inline-flex items-center">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
