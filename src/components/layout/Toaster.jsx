"use client";
import { Toaster as Sonner } from "sonner";

export default function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "rounded-2xl border border-[#e2dbf7] bg-white shadow-[0_8px_30px_rgba(121,85,230,0.12)]",
          title: "text-[#120d26] font-semibold",
          description: "text-[#524673]",
        },
      }}
    />
  );
}
