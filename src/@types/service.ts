import { LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  title: string;
  description: string;
  highlights?: string[];
  delay?: number;
  icon?: LucideIcon;
};
