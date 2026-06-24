import { profile } from "@/data/profile";
import HeroCTA from "./hero-cta";
import Terminal from "./terminal";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto sm:mt-0 flex min-h-screen flex-col items-center justify-center gap-8 px-6 lg:flex-row lg:gap-16 lg:py-16">
      <div className="flex w-full max-w-2xl flex-col items-start gap-6 sm:gap-8 lg:gap-10">
        <span className="type-label text-primary">{profile.role}</span>
        <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <div className="flex flex-col gap-4">
          {profile.description.map((line) => (
            <p className="type-body" key={line}>
              {line}
            </p>
          ))}
        </div>
        <HeroCTA />
      </div>
      <Terminal />
    </section>
  );
};

export default Hero;
