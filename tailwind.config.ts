import { type Config } from "tailwindcss";
import { flavors } from "https://deno.land/x/catppuccin@v1.2.0/mod.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: { extend: { "mauve": flavors.mocha.colors.mauve.hex } },
} satisfies Config;
