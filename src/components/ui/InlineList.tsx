type InlineListProps = {
  items: readonly string[];
  className?: string;
};

/**
 * Items on one wrapping line, each followed by a slash. The slash is CSS
 * content, so screen readers get a plain list, and a line never starts with one.
 */
export default function InlineList({ items, className = "" }: InlineListProps) {
  return (
    <ul className={`flex flex-wrap gap-x-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="after:pl-2 after:content-['/'] last:after:content-none"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
