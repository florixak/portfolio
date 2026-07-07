import { profile } from "@/data/profile";

const ContactHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">Contact</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8 max-w-3xl">
        Have a
        <br />
        <span className="text-primary">project</span> or{" "}
        <span className="text-primary">idea</span> in mind?
      </h1>
      <div className="max-w-xl space-y-4">
        <p className="type-body">
          Reach out if you would like to discuss a role, a collaboration, or a
          product you are building.
        </p>
        <p className="type-body">
          {profile.availableForWork
            ? "I am open to internships, collaboration, and full-stack roles."
            : "I am open to internships, collaboration, and conversations about new work."}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
