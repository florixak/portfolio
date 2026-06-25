type ColumnProps = {
  label: string;
  items: string[];
  labelClassName?: string;
  className?: string;
};

const Column = ({
  label,
  items,
  labelClassName = "type-label text-primary mb-6",
  className = "bg-background p-8 md:p-10 w-full",
}: ColumnProps) => {
  return (
    <div className={className}>
      <p className={labelClassName}>{label}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="type-body hover:text-foreground transition-colors duration-200 cursor-default"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
