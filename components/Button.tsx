import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-mocha-text bg-mocha-mauve rounded hover:bg-mocha-lavender transition-colors shadow-md shadow-mocha-mauve hover:shadow-mocha-lavender"
    />
  );
}
