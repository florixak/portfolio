import { profile } from "@/data/profile";

const ContactHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">Contact</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8 max-w-3xl">
        Do you have an interesting
        <br />
        <span className="text-primary">Project</span> or{" "}
        <span className="text-primary">Idea</span>?
      </h1>
      <div className="max-w-xl space-y-4">
        <p className="type-body">
          Feel free to reach out — I&apos;m always open to exploring interesting
          ideas and projects.
        </p>
        <p className="type-body">
          {profile.availableForWork
            ? "Open to collaboration, internships, and new opportunities."
            : "Interested in collaboration, internships, opportunities or simply discussing ideas?"}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
