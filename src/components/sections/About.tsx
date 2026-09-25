import Section from "@/components/layout/Section";

const facts = [
  { label: "Focus", value: "APIs, databases, realtime updates" },
  { label: "Experience", value: "3+ years in web development" },
  {
    label: "Education",
    value: [
      "S1 Informatika",
      "Universitas Teknologi Digital Indonesia, 2017 – 2023",
    ],
  },
  { label: "Speaks", value: "Indonesian, English" },
  { label: "Status", value: "Open to fullstack engineer roles" },
] as const;

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-12 lg:grid-cols-9 lg:gap-x-10">
        <div className="space-y-6 lg:col-span-5">
          <p className="text-2xl leading-[1.25] font-medium tracking-[-0.01em] md:text-[1.75rem]">
            I’m a fullstack engineer. For over three years I built and
            maintained web applications for clients and internal teams,
            including CRM and POS systems in PHP and MySQL.
          </p>

          <p className="text-lg text-ink-2">
            Outside of work I build backend systems in Go: REST APIs with JWT
            and role-based access, realtime updates over WebSocket, and
            Docker-based setups. I also write TypeScript on the server with
            Bun, Hono and Prisma, and on the client side with React and
            Next.js.
          </p>

          <p className="text-lg text-ink-2">
            I like the parts of a system that have rules: which state changes
            are allowed, what counts as offline, who may approve what.
          </p>
        </div>

        <dl className="divide-y divide-rule self-start border-y border-ink text-[15px] lg:col-span-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5"
            >
              <dt className="text-ink-3">{fact.label}</dt>
              <dd>
                {typeof fact.value === "string"
                  ? fact.value
                  : fact.value.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
