"use client";

import ErrorContent from "@/components/layout/error-content";
import { errorTerminalSections } from "@/data/terminal";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    document.title = "Error";
    console.error(error);
  }, [error]);

  return (
    <ErrorContent reset={reset} terminalSections={errorTerminalSections} />
  );
};

export default Error;
