import StreamVidoeProvider from "@/providers/StreamClientProvider";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVidoeProvider>{children}</StreamVidoeProvider>
    </main>
  );
};

export default RootLayout;
