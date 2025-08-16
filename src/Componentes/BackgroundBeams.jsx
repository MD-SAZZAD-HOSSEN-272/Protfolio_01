"use client";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const BackgroundBeams = ({ children }) => {
  return (
    <div className="relative flex items-center opacity-95 justify-center bg-[#0B0B23]  dark:bg-black">
      {/* ছোট grid-dot background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* overlay effect কিন্তু opacity কমানো হয়েছে যাতে content clear দেখা যায় */}
      <div className="pointer-events-none absolute inset-0 bg-black dark:bg-black opacity-80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* আসল content সবসময় উপরে থাকবে */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
};

