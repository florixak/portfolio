import { TechStackCategory } from "@/types";

type StackColumnProps = {
  label: TechStackCategory["label"];
  items: TechStackCategory["items"];
};

const StackColumn = ({ label, items }: StackColumnProps) => {
  return (
    <div className="bg-background p-8 md:p-10 w-full">
      <p className="font-mono-label text-[10px] text-primary tracking-[0.25em] uppercase mb-6">
        {label}
      </p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-150"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackColumn;
