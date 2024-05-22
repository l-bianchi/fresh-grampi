import { type Config } from "tailwindcss";
import { flavorEntries } from "https://deno.land/x/catppuccin@v1.2.0/mod.ts";

const colors = Object.fromEntries(
  flavorEntries.flatMap(([_, flavor]) =>
    flavor.colorEntries.map((
      [colorName, { hex }],
    ) => [`${flavor.name.toLocaleLowerCase()}-${colorName}`, hex])
  ),
);
console.log(colors);

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
} satisfies Config;
