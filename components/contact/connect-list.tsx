"use client";

import { social } from "@/data/social";
import { Social } from "@/types";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Globe,
  Mail,
  User,
} from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { useState } from "react";

const getDisplayValue = (href: string) => {
  if (href.startsWith("mailto:")) {
    return href.replace("mailto:", "");
  }

  if (href.startsWith("http")) {
    return href.replace(/^https?:\/\/(www\.)?/, "");
  }

  return href.replace(/^\//, "");
};

const getIcon = (label: string) => {
  const iconProps = {
    size: 13,
    className: "shrink-0 text-primary",
  };

  switch (label) {
    case "E-mail":
      return <Mail {...iconProps} />;
    case "LinkedIn":
      return <User {...iconProps} />;
    case "GitHub":
      return <Globe {...iconProps} />;
    case "Resume":
      return <Download {...iconProps} />;
    default:
      return <ArrowUpRight {...iconProps} />;
  }
};

const rowClassName =
  "flex items-center justify-between gap-4 border-b border-border p-4 transition-colors duration-200 last:border-0";

type EmailConnectRowProps = {
  item: Social;
  onCopy: (href: string) => void;
  copied: boolean;
};

const EmailConnectRow = ({ item, onCopy, copied }: EmailConnectRowProps) => {
  const value = getDisplayValue(item.href);

  return (
    <div className={rowClassName}>
      <div className="flex min-w-0 items-center gap-3">
        {getIcon(item.label)}
        <div className="min-w-0">
          <p className="type-label-xs text-primary mb-1">{item.label}</p>
          <a
            href={item.href}
            className="type-body truncate transition-colors duration-200 hover:text-foreground"
          >
            {value}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onCopy(item.href)}
        aria-label={copied ? "Email copied" : "Copy email"}
        className="type-label-xs shrink-0 text-muted-foreground transition-colors duration-200 hover:text-primary"
      >
        <span className="inline-flex items-center gap-1">
          {copied ? (
            <>
              <Check size={13} />{" "}
              <span className="hidden md:inline">Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} /> <span className="hidden md:inline">Copy</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
};

type LinkConnectRowProps = {
  item: Social;
};

const LinkConnectRow = ({ item }: LinkConnectRowProps) => {
  const value = getDisplayValue(item.href);
  const isExternal = item.href.startsWith("http");

  return (
    <Link
      href={item.href as Route}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(item.label === "Resume" ? { download: true } : {})}
      className={`group hover:bg-card ${rowClassName}`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {getIcon(item.label)}
        <div className="min-w-0">
          <p className="type-label-xs text-primary mb-1">{item.label}</p>
          <p className="type-body truncate transition-colors duration-200 group-hover:text-foreground">
            {value}
          </p>
        </div>
      </div>
      <ArrowUpRight
        size={13}
        className="shrink-0 text-muted-foreground/40 transition-colors duration-200 group-hover:text-primary"
      />
    </Link>
  );
};

const ConnectList = () => {
  const [copiedHref, setCopiedHref] = useState<string | null>(null);

  const copyEmail = async (href: string) => {
    try {
      await navigator.clipboard.writeText(getDisplayValue(href));
      setCopiedHref(href);
      window.setTimeout(() => setCopiedHref(null), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {social.map((item) =>
        item.href.startsWith("mailto:") ? (
          <EmailConnectRow
            key={item.label}
            item={item}
            onCopy={copyEmail}
            copied={copiedHref === item.href}
          />
        ) : (
          <LinkConnectRow key={item.label} item={item} />
        ),
      )}
    </div>
  );
};

export default ConnectList;
