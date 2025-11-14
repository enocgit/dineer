import { cn } from "@/lib/utils";
import { ChefHat } from "lucide-react";

export const Logo = ({
  className,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <ChefHat className={cn("text-primary size-6", className)} />
      <span className="text-primary max-xs:hidden text-2xl font-bold">
        Dineer
      </span>
    </div>
  );
};
