"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroCTA = () => {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      <Button asChild>
        <Link href="#projects">
          View Projects <ArrowUpRight className="size-4" />
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/contact">
          Contact Me <ArrowUpRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
};

export default HeroCTA;
