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
  port: 443,
  tls: {
    cert: Bun.file("/etc/letsencrypt/live/do-it.darrendub.me/cert1.pem"),
    key: Bun.file("/etc/letsencrypt/live/do-it.darrendub.me/privkey1.pem"),
  }
});

console.log(`Listening on ${server.url}`);