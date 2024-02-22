import { isMsw } from "./constants/conditions";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && isMsw) {
    console.log("server listen here");
    const { server } = await import("./mocks/server");

    server.listen({ onUnhandledRequest: "bypass" });
  }
}
