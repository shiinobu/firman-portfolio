import Section from "@/components/layout/Section";

const facts = [
  { label: "Experience", value: "3+ years in web development" },
  {
    label: "Education",
    value: [
      "S1 Informatika",
      "Universitas Teknologi Digital Indonesia, 2017 – 2023",
    ],
  },
  { label: "Speaks", value: "Indonesian, English" },
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
            In Go I’ve built the Device Monitoring System (WebSocket,
            PostgreSQL) and the Disbursement API (JWT, role-based access,
            MySQL). Both use Docker. I also write TypeScript: Bun, Hono and
            Prisma on the server, React and Next.js on the client.
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
