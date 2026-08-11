"use client";

import ErrorContent from "@/components/layout/error-content";
import { errorTerminalSections } from "@/data/terminal";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  const t = useTranslations("error");

  useEffect(() => {
    document.title = t("label");
    console.error(error);
  }, [error, t]);

  return (
    <ErrorContent reset={reset} terminalSections={errorTerminalSections} />
  );
};

export default Error;
