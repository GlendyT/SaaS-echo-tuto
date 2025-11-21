"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@workspace/ui/components/tooltip";

interface HintProps {
  children: React.ReactNode;
  text: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export const Hint = ({
  children,
  text,
  //side = "top",
 // align = "center",
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
            <p className="">{text} </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
