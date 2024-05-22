import { type Config } from "tailwindcss";
import { flavors } from "https://deno.land/x/catppuccin/mod.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: { ...flavors.mocha.colors },
  },
} satisfies Config;
