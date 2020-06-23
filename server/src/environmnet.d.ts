/// <reference types="node" />
declare module NodeJS {
  export interface ProcessEnv {
    PORT: string;
    NODE_ENV: "production" | "development" | "staging" | "local";
  }
}
