import { githubUrl } from "@/config/navigation";

export const contactLinks = [
    {
        label: "Email",
        href: "mailto:firman.apriliann@gmail.com",
        external: false,
        primary: true,
    },
    {
        label: "GitHub",
        href: githubUrl,
        external: true,
        primary: false,
    },
    {
        label: "Phone",
        href: "tel:+6285117000255",
        external: false,
        primary: false,
    },
] as const;
