import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-latte-base dark:bg-mocha-base">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold text-latte-text dark:text-mocha-text">
          Welcome to GRAMPI
        </h1>
        <p class="my-4 text-latte-text dark:text-mocha-text">
          An amazing internet experience, create your canvas of stories.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
