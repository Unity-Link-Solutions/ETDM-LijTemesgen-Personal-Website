/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    (id: string): any;
    resolve(id: string): string;
  }
}

declare function require(path: string): any;

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
