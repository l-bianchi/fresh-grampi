import Generator from "../islands/Generator.tsx";
import Clipboard from "../islands/Clipboard.tsx";

export default function Home() {
  const sessionId = crypto.randomUUID();
  return (
    <div class="px-4 py-8 mx-auto bg-latte-crust dark:bg-mocha-crust">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/grampi.png"
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
        <Generator sessionId={sessionId} />
        <Clipboard sessionId={sessionId} />
      </div>
    </div>
  );
}
