"use client";

import { cn } from "@/lib/utils";
import { MOTION, withMotion } from "@/lib/animations/gsap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  start?: string;
};

const Stagger = ({
  children,
  className,
  stagger = MOTION.stagger,
  start = MOTION.scrollStart,
}: StaggerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = el.children;
      if (!items.length) return;

      return withMotion(() => {
        gsap.from(items, {
          ...MOTION.from,
          duration: MOTION.duration,
          ease: MOTION.ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      }, el);
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default Stagger;
