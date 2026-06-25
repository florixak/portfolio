import { profile } from "@/data/profile";
import Column from "../layout/column";
import SectionHeader from "../layout/section-header";

const AboutContent = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <SectionHeader num="01" title="Who I Am" />

        <div className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-background p-8 md:p-10">
            <p className="font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              &ldquo;{profile.about.quote}&rdquo;
            </p>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="type-label-xs text-primary">
                {profile.location}
              </span>
            </div>
          </div>

          <div className="space-y-5 bg-background p-8 md:p-10">
            {profile.about.whoIAm.map((paragraph) => (
              <p key={paragraph} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <SectionHeader num="02" title="Currently" />

        <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {profile.about.currently.map(({ label, items }) => (
            <Column key={label} label={label} items={items} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <SectionHeader num="03" title="Outside of Code" />

        <div className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          <div className="space-y-5 bg-background p-8 md:p-10">
            {profile.about.outsideOfCode.map((paragraph) => (
              <p key={paragraph} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col bg-card p-8 md:p-10">
            <p className="type-label-xs text-muted-foreground/30 mb-6">
              Interests
            </p>
            <ul className="space-y-2.5">
              {profile.about.interests.map((item) => (
                <li
                  key={item}
                  className="type-body hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
