import { type Config } from "tailwindcss";
import { flavorEntries } from "https://deno.land/x/catppuccin@v1.2.0/mod.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: Object.fromEntries(
        flavorEntries.flatMap(([_, flavor]) =>
          flavor.colorEntries.map((
            [colorName, { hex }],
          ) => [`${flavor.name}-${colorName}`, hex])
        ),
      ),
    },
  },
} satisfies Config;
