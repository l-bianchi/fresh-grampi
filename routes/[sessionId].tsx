import { PageProps } from "$fresh/server.ts";

export default function Greet({ params }: PageProps) {
  return (
    <div class="size-screen p-10 bg-latte-mantle dark:bg-mocha-mantle border-2 border-latte-mauve dark:border-mocha-mauve rounded items-center justify-center">
      <h1 class="text-4xl font-semibold text-latte-text dark:text-mocha-text">
        You are in the room
        <span class="font-bold text-latte-mauve dark:text-mocha-mauve underline ml-4">
          {params.sessionId}
        </span>
      </h1>
    </div>
  );
}
