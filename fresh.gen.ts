// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_sessionId_ from "./routes/[sessionId].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_messages_index from "./routes/api/messages/index.ts";
import * as $api_sessions_id_ from "./routes/api/sessions/[id].ts";
import * as $api_sessions_index from "./routes/api/sessions/index.ts";
import * as $index from "./routes/index.tsx";
import * as $Clipboard from "./islands/Clipboard.tsx";
import * as $Conversations from "./islands/Conversations.tsx";
import * as $Editor from "./islands/Editor.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[sessionId].tsx": $_sessionId_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/messages/index.ts": $api_messages_index,
    "./routes/api/sessions/[id].ts": $api_sessions_id_,
    "./routes/api/sessions/index.ts": $api_sessions_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Clipboard.tsx": $Clipboard,
    "./islands/Conversations.tsx": $Conversations,
    "./islands/Editor.tsx": $Editor,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
