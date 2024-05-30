import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 text-latte-text dark:text-mocha-text rounded bg-latte-red dark:bg-mocha-red hover:bg-latte-maroon dark:hover:bg-mocha-maroon transition-colors"
    />
  );
}
