import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 text-latte-text border-latte-mauve border-2 rounded bg-latte-crust hover:bg-latte-mauve transition-colors dark:border-mocha-mauve dark:bg-mocha-crust dark:bg-mocha-crust dark:hover:bg-mocha-mauve"
    />
  );
}
