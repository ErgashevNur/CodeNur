// src/components/ClientWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";

export default function ClientWrapper({ children }) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      {children}
      <Particles
        className="pointer-events-none absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </>
  );
}
