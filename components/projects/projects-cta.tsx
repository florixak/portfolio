"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ProjectsCTA = () => {
  return (
    <Button variant="outline" asChild>
      <Link href="/contact">
        Contact Me <ArrowUpRight className="size-4" />
      </Link>
    </Button>
  );
};

export default ProjectsCTA;
