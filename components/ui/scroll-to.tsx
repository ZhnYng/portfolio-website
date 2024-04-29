"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface ScrollToProps {
  targetId: string;
  className: string;
  children?: React.ReactNode;
}

const ScrollTo = (
  { className, targetId, children }: ScrollToProps
) => {
  return (
    <div
      className={cn(
        "mt-3 text-gray-400 transition duration-1000 group w-fit hover:cursor-pointer",
        className
      )}
      onClick={() => {``
        const myElement = document.getElementById(targetId);
        myElement?.scrollIntoView({
          behavior: "smooth"
        })
      }}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-gray-400"></span>
    </div>
  )
}
ScrollTo.displayName = "ScrollTo"

export { ScrollTo }