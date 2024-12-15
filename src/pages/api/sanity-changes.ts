import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const headers = new Headers();
  headers.append("Content-Type", "text/event-stream");
  headers.append("Cache-Control", "no-cache");
  headers.append("Connection", "keep-alive");

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue("retry: 1000\n\n");

      // Keep connection alive
      const interval = setInterval(() => {
        controller.enqueue(`data: ping\n\n`);
      }, 15000);

      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
      });
    },
  });

  return new Response(stream, { headers });
};
