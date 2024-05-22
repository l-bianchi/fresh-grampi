import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { flavorEntries } from "https://deno.land/x/catppuccin@v1.2.0/mod.ts";

interface CounterProps {
  count: Signal<number>;
}

console.log(flavorEntries.map(([_, flavor]) => {
  flavor.colorEntries.flatMap((
    [colorName, { hex }],
  ) => [[flavor.name + colorName], hex]);
}));

console.log(
  Object.fromEntries(flavorEntries.flatMap(([_, flavor]) =>
    flavor.colorEntries.map((
      [colorName, { hex }],
    ) => [`${flavor.name}-${colorName}`, hex])
  )),
);

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
