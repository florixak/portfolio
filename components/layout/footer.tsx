import { COPYRIGHT_YEAR } from "@/constants";
import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-border w-full flex flex-col gap-2 sm:flex-row items-center sm:justify-between">
      <p className="type-body text-muted-foreground text-center sm:text-left">
        &copy; {COPYRIGHT_YEAR} {profile.name}. All rights reserved.
      </p>
      <p className="type-body text-muted-foreground text-center sm:text-right">
        Created with ❤️ in Pilsen, Czech Republic
      </p>
    </footer>
  );
};

export default Footer;
