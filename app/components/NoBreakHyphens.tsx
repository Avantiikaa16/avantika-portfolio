import { Fragment } from "react";

// Keeps hyphenated words (e.g. "idempotency-key") on one line so the
// browser never wraps them at the hyphen.
export default function NoBreakHyphens({ text }: { text: string }) {
  const parts = text.split(/(\S*\w-\w\S*)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
