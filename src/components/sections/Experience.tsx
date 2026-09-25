import Section from "@/components/layout/Section";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="border-y border-ink">
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.period}`}
            className="grid gap-4 border-b border-rule py-8 last:border-b-0 md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <p className="font-mono text-sm text-ink-3 tabular-nums">
              {experience.period}
            </p>

            <div>
              <h3 className="text-xl font-semibold tracking-[-0.01em]">
                {experience.role}
                <span className="font-normal text-ink-3">
                  {" "}
                  at {experience.company}
                </span>
              </h3>

              <p className="mt-3 max-w-[60ch] text-ink-2">
                {experience.description}
              </p>

              <ul className="mt-4 max-w-[60ch] list-disc space-y-1.5 pl-5 text-ink-2 marker:text-ink-3">
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-sm text-ink-3">
                {experience.technologies.join(" / ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
