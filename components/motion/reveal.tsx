"use client";

import { cn } from "@/lib/utils";
import { MOTION, withMotion } from "@/lib/animations/gsap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  start?: string;
};

const Reveal = ({
  children,
  className,
  start = MOTION.scrollStart,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      return withMotion(() => {
        gsap.from(el, {
          ...MOTION.from,
          duration: MOTION.duration,
          ease: MOTION.ease,
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

export default Reveal;
