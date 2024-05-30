import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-grampi</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="bg-mocha-mauve">
        <Component />
        <Footer />
      </body>
    </html>
  );
}
