import { profile } from "@/data/profile";
import { social } from "@/data/social";
import ContactLink from "./contact-link";

const ContactFooter = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
        <header>
          <p className="type-index mb-7">03 — Contact</p>
          <h2 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-primary">together.</span>
          </h2>
          <p className="type-body mt-8 max-w-md">
            {profile.availableForWork
              ? "Open to collaboration, internships, and new opportunities. Feel free to reach out."
              : "Interested in collaboration, internships, opportunities or simply discussing ideas? Feel free to reach out."}
          </p>
        </header>

        <nav aria-label="Contact links">
          <ul className="flex h-full flex-col gap-px bg-border">
            {social.map((item) => (
              <ContactLink key={item.label} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ContactFooter;
