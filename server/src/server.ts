import {
  Server,
  createServer,
} from "http";
import {
  app,
} from "./api";

let server: Server = createServer(app);
const port = parseInt(process.env.PORT) || 4000;

const main = async () => {
  server.listen(port, () => {
    console.info(`application started at ${port}`);
  });
};
const closeServer = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!server.listening) {
      return resolve();
    }
    server.close((err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
};
const close = async () => {
  await closeServer();
  console.info("Application closed.");
};
process.on("SIGINT", close);
process.on("SIGTERM", close);
process.on("SIGQUIT", close);

main().catch((err) => {
  console.error(err);
});
