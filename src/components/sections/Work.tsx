import Section from "@/components/layout/Section";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectRow from "@/components/projects/ProjectRow";
import { getFeaturedProjects, getSupportingProjects } from "@/data/projects";

export default function Work() {
  const featured = getFeaturedProjects();
  const supporting = getSupportingProjects();

  return (
    <Section id="work" label="Selected work" layout="stacked">
      <div>
        {featured.map((project, index) => (
          <FeaturedProject key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-8 md:mt-12">
        <h3 className="text-sm font-medium text-ink-3">More projects</h3>
        <ul className="mt-4 border-y border-ink">
          {supporting.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
