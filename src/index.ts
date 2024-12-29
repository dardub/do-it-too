const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    switch (path) {
        case "/":
            break;
    
        default:
            break;
    }


    return new Response("Page not found", { status: 404 });
  },
  port: 80,
});

console.log(`Listening on ${server.url}`);