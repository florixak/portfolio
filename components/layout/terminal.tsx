import { cn } from "@/lib/utils";
import { TerminalSection } from "@/types";

type TerminalProps = {
  sections: TerminalSection[];
  shell?: string;
  showCursor?: boolean;
  showHeader?: boolean;
  className?: string;
};

const Terminal = ({
  sections,
  shell = "bash",
  showCursor = true,
  showHeader = true,
  className,
}: TerminalProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-lg shrink-0",
        showHeader && "border border-border bg-card p-5 sm:p-8",
        className,
      )}
    >
      {showHeader ? (
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="type-label-xs ml-auto text-muted-foreground/40">
            {shell}
          </span>
        </div>
      ) : null}

      <div className="space-y-1.5 type-body leading-relaxed">
        {sections.map((section, index) => (
          <div key={section.label} className={cn(index > 0 && "mt-3")}>
            <p className="text-muted-foreground">
              <span className="text-primary">~</span> {section.label}
            </p>
            {section.lines.map((line, lineIndex) => (
              <p
                key={`${section.label}-${lineIndex}`}
                className="text-foreground pl-4"
              >
                {line}
              </p>
            ))}
          </div>
        ))}

        {showCursor ? (
          <p className="text-muted-foreground mt-3">
            <span className="text-primary">~</span>{" "}
            <span className="inline-block w-2 h-5 bg-primary/80 animate-pulse align-middle" />
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Terminal;
