import { profile } from "@/data/profile";

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">About me</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8">
        About
      </h1>
      <p className="type-body max-w-2xl">{profile.about.intro}</p>
    </section>
  );
};

export default AboutHero;
