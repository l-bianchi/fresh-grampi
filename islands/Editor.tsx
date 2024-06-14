import { useEffect, useState } from "preact/hooks";
import { Prompt } from "../components/Prompt.tsx";

interface EditorProps {
  sessionId: string;
  supabaseUrl: string;
}

export default function Editor({ sessionId, supabaseUrl }: EditorProps) {
  const [session, setSession] = useState<
    { id: string; created_at: Date; prompt: string } | null
  >(null);

  const imageUrl =
    `${supabaseUrl}/storage/v1/object/public/images/${sessionId}/image.png?time=${Date.now()}`;

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/sessions/${sessionId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setSession(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSession();
  }, []);

  return (
    <div class="flex flex-col h-full gap-2">
      <div class="flex flex-col grow p-4 bg-mocha-base rounded shadow-xl items-center justify-center gap-2">
        <img
          class="h-auto max-h-full max-w-full rounded aspect-square animate-pulse"
          src={imageUrl}
          alt="generation preview"
        />
        {session
          ? (
            <div class="flex flex-col items-center justify-center p-4 bg-mocha-surface0 rounded">
              <div class="font-bold text-mocha-text">Current Prompt:</div>
              <div class="font-medium text-mocha-subtext0">
                {session.prompt}
              </div>
            </div>
          )
          : null}
      </div>
      <div class="bg-mocha-base rounded shadow-xl p-4">
        <Prompt sessionId={sessionId} />
      </div>
    </div>
  );
}
