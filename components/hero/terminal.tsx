const Terminal = () => {
  return (
    <div className="hidden md:block w-full max-w-lg shrink-0 border border-border bg-card p-5 font-mono-label sm:p-8">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-muted-foreground/40 text-xs tracking-widest">
          bash
        </span>
      </div>
      <div className="space-y-1.5 text-sm leading-7">
        <p className="text-muted-foreground">
          <span className="text-primary">~</span> whoami
        </p>
        <p className="text-foreground pl-4">Ondrej Ptak</p>
        <p className="text-foreground pl-4">Fullstack Engineer</p>
        <p className="text-muted-foreground mt-3">
          <span className="text-primary">~</span> cat stack.txt
        </p>
        <p className="text-foreground pl-4">React · Next.js · TypeScript</p>
        <p className="text-foreground pl-4">Spring Boot · PostgreSQL</p>
        <p className="text-muted-foreground mt-3">
          <span className="text-primary">~</span> echo $LOCATION
        </p>
        <p className="text-foreground pl-4">Pilsen, Czech Republic</p>
        <p className="text-muted-foreground mt-3">
          <span className="text-primary">~</span>{" "}
          <span className="inline-block w-2 h-5 bg-primary/80 animate-pulse align-middle" />
        </p>
      </div>
    </div>
  );
};

export default Terminal;
