import { cn } from "@/lib/utils";
import { ChefHat } from "lucide-react";

export const Logo = ({
  className,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return <ChefHat className={cn("text-primary size-6", className)} />;
};
