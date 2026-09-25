import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <p className="font-mono text-sm text-alert">404 Not Found</p>

      <h1 className="mt-6 max-w-[14ch] text-title leading-[1] font-bold tracking-[-0.03em]">
        This page does not exist.
      </h1>

      <p className="mt-6 max-w-[48ch] text-lg text-ink-2">
        The link may be wrong, or the page has moved.
      </p>

      <div className="mt-10">
        <Button href="/#work">Back to my work</Button>
      </div>
    </Container>
  );
}
