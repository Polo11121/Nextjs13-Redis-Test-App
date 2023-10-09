import { createClient } from "redis";
import { env } from "@/lib";

const client = createClient({
  password: env.CLIENT_PASSWORD,
  socket: {
    host: env.CLIENT_HOST,
    port: env.CLIENT_PORT,
  },
});

client.on("error", (error) => console.error(error));

if (!client.isOpen) {
  client.connect();
}

export { client as db };
