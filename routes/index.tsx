import Generator from "../islands/Generator.tsx";
import { Button } from "../components/Button.tsx";

export default function Home() {
  const sessionId = "123-123-123";
  return (
    <div class="px-4 py-8 mx-auto bg-latte-crust dark:bg-mocha-crust">
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
        <div class="flex gap-4 items-center justify-between">
          <Generator sessionId={sessionId} />
          <Button
            onClick={() => window.location.href = `/${sessionId}`}
          >
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
}
