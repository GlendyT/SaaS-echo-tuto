import { ArrowRightIcon, ArrowUpIcon, CheckIcon, XIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";


interface ConversationStatusIconProps {
  status: "unresolved" | "resolved" | "escalated" | "closed";
}

const statusConfig = {
  resolved: {
    icon: CheckIcon,
    bgColor: "bg-[#3FB62F]",
  },
  unresolved: {
    icon: ArrowRightIcon,
    bgColor: "bg-destructive",
  },
  escalated: {
    icon: ArrowUpIcon,
    bgColor: "bg-yellow-500",
  },
  closed: {
    icon: XIcon,
    bgColor: "bg-gray-500",
  },
} as const;

export const ConversationStatusIcon = ({
  status,
}: ConversationStatusIconProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn("flex items-center justify-center rounded-full p-1.5", config.bgColor)}
    >
        <Icon className="size-3 stroke-3 text-white"/>
    </div>
  );
};
