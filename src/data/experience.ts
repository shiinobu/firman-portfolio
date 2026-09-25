import type { Experience } from "@/types/experience";

export const experiences: readonly Experience[] = [
  {
    period: "Oct 2022 – Mar 2026",
    role: "Developer",
    company: "PT. Benderaku Berkibar Selalu",
    description:
      "Built and maintained web applications for client projects and internal use, including CRM and POS systems that supported sales and customer service.",
    responsibilities: [
      "Implemented features, fixed bugs and handled ongoing maintenance",
      "Managed and updated MySQL databases",
      "Debugged and troubleshot applications to keep them stable",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Git"],
  },
  {
    period: "2020",
    role: "Web Developer",
    company: "Neox Indonesia",
    description:
      "Supported web development and maintenance for client and internal applications, from backend work to debugging and data management.",
    responsibilities: [
      "Implemented web features and maintained existing functionality",
      "Worked with PHP, JavaScript and MySQL",
      "Debugged and troubleshot web applications",
    ],
    technologies: ["PHP", "JavaScript", "MySQL"],
  },
  {
    period: "2016",
    role: "Web Development Intern",
    company: "Universitas Hamzanwadi",
    description:
      "Four-month vocational school internship supporting website development, testing and maintenance.",
    responsibilities: [
      "Built basic features and fixed small bugs",
      "Tested and maintained existing functionality",
    ],
    technologies: ["PHP", "MySQL", "JavaScript"],
  },
];
