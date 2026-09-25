import { site } from "@/config/site";

type ContactLink = {
  label: string;
  href: string;
  external: boolean;
  download?: boolean;
};

export const contactLinks: readonly ContactLink[] = [
  { label: "GitHub", href: site.github, external: true },
  { label: "JobStreet", href: site.jobstreet, external: true },
  { label: "Download CV", href: site.cv, external: false, download: true },
  { label: "Phone", href: `tel:${site.phone}`, external: false },
];
