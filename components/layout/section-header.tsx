const SectionHeader = ({
  num,
  title,
  sub,
}: {
  num: string;
  title: string;
  sub?: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-4">
        <span className="font-mono-label text-[11px] text-muted-foreground/40 tracking-widest select-none">
          {num} —
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {sub && (
        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed pl-10">
          {sub}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
