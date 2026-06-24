import { TechStackCategory } from "@/types";

type StackColumnProps = {
  label: TechStackCategory["label"];
  items: TechStackCategory["items"];
};

const StackColumn = ({ label, items }: StackColumnProps) => {
  return (
    <div className="bg-background p-8 md:p-10 w-full">
      <p className="type-label text-primary mb-6">
        {label}
      </p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="type-body hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackColumn;
