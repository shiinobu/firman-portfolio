import type { ProjectRequest } from "@/types/project";

type RequestLogProps = {
  requests: readonly ProjectRequest[];
  caption?: string;
};

/** A ledger of real requests and responses, in place of dark API-client screenshots. */
export default function RequestLog({ requests, caption }: RequestLogProps) {
  return (
    <figure>
      <div className="border border-ink bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-ink px-4 py-2.5 font-mono text-xs text-ink-3">
          <span>localhost:8080</span>
          <span>captured in Postman</span>
        </div>

        <ol className="divide-y divide-rule">
          {requests.map((request, index) => {
            const failed = request.status >= 400;

            return (
              <li
                key={`${request.method}-${request.path}-${index}`}
                className="grid gap-x-4 gap-y-1 px-4 py-3.5 font-mono text-[13px] sm:grid-cols-[4.5rem_minmax(0,1fr)_auto]"
              >
                <span className="font-semibold text-ink">{request.method}</span>
                <span className="break-all text-ink">{request.path}</span>
                <span className={failed ? "text-alert" : "text-signal"}>
                  {request.status} {request.statusText}
                </span>
                <span className="text-ink-3 sm:col-span-2 sm:col-start-2">
                  {request.note}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {caption && (
        <figcaption className="mt-3 max-w-[70ch] text-sm text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
