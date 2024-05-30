export function Footer() {
  return (
    <footer class="bg-mocha-base rounded-t shadow mx-4">
      <div class="w-full mx-auto p-4 flex items-center justify-between">
        <span class="text-sm text-mocha-subtext0">
          © 2024{" "}
          <a href="https://fresh-grampi.deno.dev/" class="hover:underline">
            Grampi
          </a>. All Rights Reserved.
        </span>
        <div class="flex items-center text-sm font-medium text-mocha-subtext0 space-x-4">
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Licensing</a>
          <a href="#" class="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
