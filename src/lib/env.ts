import { cleanEnv, num, str } from "envalid";

export const env = cleanEnv(process.env, {
  CLIENT_PASSWORD: str(),
  CLIENT_HOST: str(),
  CLIENT_PORT: num(),
});
