import { AriaAttributes, DOMAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    name?: string;
  }
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
