/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    (id: string): any;
    resolve(id: string): string;
  }
}

declare function require(path: string): any;
