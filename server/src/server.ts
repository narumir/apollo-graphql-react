import {
  Server,
  createServer,
} from "http";
import {
  app,
} from "./app";

let server: Server | null = null;
const port = parseInt(process.env.PORT) || 4000;

const main = async () => {
  server = createServer(app);
  server.listen(port, () => {
    console.info(`application started at ${port}`);
  });
};

main().catch((err) => {
  console.error(err);
});
