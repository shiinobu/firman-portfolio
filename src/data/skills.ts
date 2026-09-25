export type Skill = {
  name: string;
  /** Frameworks and libraries used with it, shown in parentheses. */
  with?: readonly string[];
};

export type SkillGroup = {
  title: string;
  skills: readonly Skill[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      { name: "Go", with: ["Gin", "Gorilla Mux", "GORM"] },
      { name: "PHP", with: ["Laravel"] },
      { name: "TypeScript", with: ["Bun", "Hono", "Prisma"] },
    ],
  },
  {
    title: "APIs and realtime",
    skills: [
      { name: "REST" },
      { name: "WebSocket" },
      { name: "JWT authentication" },
      { name: "Role-based access control" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }],
  },
  {
    title: "Frontend",
    skills: [{ name: "TypeScript" }, { name: "React" }, { name: "Next.js" }],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "GitHub Actions" },
      { name: "Git" },
    ],
  },
];
