import { COPYRIGHT_YEAR } from "@/constants";
import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-border w-full flex items-center justify-between">
      <p className="type-body text-muted-foreground">
        &copy; {COPYRIGHT_YEAR} {profile.name}. All rights reserved.
      </p>
      <p className="type-body text-muted-foreground text-right">
        Created with ❤️ in Pilsen, Czech Republic
      </p>
    </footer>
  );
};

export default Footer;
