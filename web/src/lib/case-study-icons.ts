import {
  Calculator,
  Factory,
  Headphones,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export const caseStudyIconMap: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  users: Users,
  calculator: Calculator,
  factory: Factory,
  headphones: Headphones,
};

export function getCaseStudyIcon(icon: string): LucideIcon {
  return caseStudyIconMap[icon] ?? TrendingUp;
}

export function caseStudyPath(slug: string): string {
  return `/case-studies/${slug}`;
}
