import { about } from "@/data/about";
import { profile } from "@/data/profile";
import Column from "../layout/column";
import SectionHeader from "../layout/section-header";
import Reveal from "../motion/reveal";
import Stagger from "../motion/stagger";

const AboutContent = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <Reveal>
          <SectionHeader num="01" title="Who I Am" />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-background p-8 md:p-10">
            <p className="font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              &ldquo;{about.quote}&rdquo;
            </p>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="type-label-xs text-primary">
                {profile.location}
              </span>
            </div>
          </div>

          <div className="space-y-5 bg-background p-8 md:p-10">
            {about.whoIAm.map((paragraph) => (
              <p key={paragraph} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>
        </Stagger>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <Reveal>
          <SectionHeader num="02" title="Currently" />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {about.currently.map(({ label, items }) => (
            <Column key={label} label={label} items={items} />
          ))}
        </Stagger>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
        <Reveal>
          <SectionHeader num="03" title="Outside of Code" />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          <div className="space-y-5 bg-background p-8 md:p-10">
            {about.outsideOfCode.map((paragraph) => (
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
              {about.interests.map((item) => (
                <li
                  key={item}
                  className="type-body hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Stagger>
      </section>
    </>
  );
};

export default AboutContent;
