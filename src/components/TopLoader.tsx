"use client";

import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#3b82f6"
      height={3}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px rgba(59,130,246,0.35),0 0 5px rgba(59,130,246,0.25)"
      zIndex={9999}
    />
  );
}
