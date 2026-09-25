import Section from "@/components/layout/Section";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <Section id="stack" label="Stack">
      <dl className="border-y border-ink">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 border-b border-rule py-5 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="text-ink-3">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[15px]">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    {skill.name}
                    {skill.with && (
                      <span className="text-ink-3">
                        {" "}
                        ({skill.with.join(", ")})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
