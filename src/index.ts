const LOG_PATH = "./src/logs/bun.log";

async function main() {
  try {
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
        cert: Bun.file("/etc/letsencrypt/live/do-it.darrendub.me/cert.pem"),
        key: Bun.file("/etc/letsencrypt/live/do-it.darrendub.me/privkey.pem"),
      },
    });
  } catch (error: any) {
    const errorMessage = `Bun server error occurred\n ${error.message}`;
    try {
      const logs = await Bun.file(LOG_PATH).text();
      await Bun.write(LOG_PATH, logs.concat(errorMessage));
    } catch (error) {
      await Bun.write(LOG_PATH, "".concat(errorMessage));
    }
  }
}

main();