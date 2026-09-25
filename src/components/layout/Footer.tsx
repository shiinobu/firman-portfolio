import Container from "@/components/layout/Container";
import { ArrowUpIcon } from "@/components/ui/icons";
import { site } from "@/config/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-4 text-sm text-ink-3">
        <p>
          © {year} {site.name}
        </p>

        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a
              href={site.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex min-h-11 items-center"
            >
              Source
            </a>
          </li>
          <li>
            <a
              href="#main-content"
              className="link inline-flex min-h-11 items-center gap-1.5"
            >
              Back to top
              <ArrowUpIcon className="size-3.5" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
