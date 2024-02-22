"use client";

import React from "react";

const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = React.useState(false);

  React.useEffect(() => {
    async function enableApiMocking() {
      const { worker } = await import("../mocks/browser");
      await worker.start();
      setMswReady(true);
    }

    enableApiMocking();
  }, []);

  if (!mswReady) return null;

  return <>{children}</>;
};

export default MSWProvider;
