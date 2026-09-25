import { site } from "@/config/site";

export const contactLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "JobStreet", href: site.jobstreet, external: true },
  { label: "Phone", href: `tel:${site.phone}`, external: false },
] as const;
