import {
  createServer,
} from "http";
import {
  assignEnvironment,
} from "./param-store";
import type {
  Server,
} from "http";

let server: Server;
const port = parseInt(process.env.PORT) || 4000;

assignEnvironment()
  .then(() => import("./api"))
  .then(({ app }) => {
    server = createServer(app);
    return startServer(server);
  })
  .then(() => {
    console.log(`Application started at ${port}.`);
  })
  .catch((err) => {
    console.error(err);
    return close();
  });

const startServer = (
  server: Server,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      return resolve();
    });
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
  process.exit(0);
};

process.on("SIGINT", close);
process.on("SIGTERM", close);
process.on("SIGQUIT", close);
