import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center md:min-h-[calc(100vh-72px)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-8 lg:px-10">
        <div className="max-w-[680px]">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
            404
          </p>

          <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
            Page not found.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-foreground-secondary sm:text-lg">
            The page you are looking for does not exist or is no longer available.
          </p>

          <Link
            href="/#projects"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
