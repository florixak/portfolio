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
        <span className="type-index">
          {num} —
        </span>
        <h2 className="type-heading">
          {title}
        </h2>
      </div>
      {sub ? (
        <p className="type-body max-w-lg pl-10">
          {sub}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
