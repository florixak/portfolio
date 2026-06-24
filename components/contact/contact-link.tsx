import { Social } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

type ContactLinkProps = {
  item: Social;
};

const ContactLink = ({ item }: ContactLinkProps) => {
  const isExternal = item.href.startsWith("http");

  return (
    <li className="flex flex-1 bg-background">
      <Link
        href={item.href as Route}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex flex-1 items-center justify-between px-6 py-6 transition-colors duration-200 hover:bg-card md:px-8 md:py-8"
      >
        <span className="type-label text-muted-foreground underline-offset-4 transition-colors duration-200 group-hover:text-foreground group-hover:underline">
          {item.label}
        </span>
        <ArrowUpRight
          size={13}
          className="shrink-0 text-muted-foreground/40 transition-colors duration-200 group-hover:text-primary"
        />
      </Link>
    </li>
  );
};

export default ContactLink;
