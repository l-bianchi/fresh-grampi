import Clipboard from "../islands/Clipboard.tsx";

export default function Home() {
  return (
    <div class="w-screen h-screen p-4">
      <div class="flex flex-col bg-mocha-base border-2 border-mocha-surface0 rounded shadow-md items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold text-mocha-text">
          Welcome to GRAMPI
        </h1>
        <p class="my-4 text-mocha-text">
          An amazing internet experience, create your canvas of stories.
        </p>
        <Clipboard />
      </div>
    </div>
  );
}
