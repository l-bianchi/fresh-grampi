import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="size-full px-2 py-1 text-latte-text dark:text-mocha-text border-2 border-latte-mauve dark:border-mocha-mauve rounded bg-latte-crust dark:bg-mocha-crust hover:bg-latte-mauve dark:hover:bg-mocha-mauve transition-colors"
    />
  );
}
