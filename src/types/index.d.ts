export * from "./material-ui";
export * from "./global";

declare module "*.avif" {
  const src: string;
  export default src;
}
