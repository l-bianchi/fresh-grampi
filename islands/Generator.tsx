import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface GeneratorProps {
  sessionId: Signal<string>;
}

export default function Counter(props: GeneratorProps) {
  return (
    <div class="flex p-8 bg-latte-mantle border-2 border-latte-mauve rounded dark:bg-mocha-mantle dark:border-mocha-mauve">
      <p class="text-3xl text-latte-text dark:text-mocha-text">
        {props.sessionId}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="text-latte-text dark:text-mocha-text"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
    </div>
  );
}
