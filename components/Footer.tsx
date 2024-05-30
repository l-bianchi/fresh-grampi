export function Footer() {
  return (
    <footer class="h-fit bg-mocha-base rounded-t shadow mx-4">
      <div class="w-full mx-auto p-4 flex items-center justify-between">
        <span class="text-sm text-mocha-subtext0">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
          All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-mocha-subtext0">
          <li>
            <a href="#" class="hover:underline me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
