import { profile } from "@/data/profile";
import HeroCTA from "./hero-cta";
import Terminal from "./terminal";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6">
      <div className="max-w-2xl flex flex-col gap-10 items-start w-full">
        <span className="text-sm text-primary tracking-[0.2em] uppercase">
          {profile.role}
        </span>
        <h1 className="text-7xl font-extrabold">{profile.name}</h1>
        <div className="flex flex-col gap-4">
          {profile.description.map((line) => (
            <p className="text-base text-muted-foreground" key={line}>
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
