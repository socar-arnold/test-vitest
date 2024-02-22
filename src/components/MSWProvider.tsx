"use client";

import { isMsw } from "@/constants/conditions";
import React from "react";

const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = React.useState(false);

  React.useEffect(() => {
    async function enableApiMocking() {
      const { worker } = await import("../mocks/browser");
      if (isMsw) {
        console.log("worker start here");
        await worker.start({ onUnhandledRequest: "bypass" });
      }
      setMswReady(true);
    }

    enableApiMocking();
  }, []);

  if (!mswReady) return null;

  return <>{children}</>;
};

export default MSWProvider;
