"use client";

import { withMotion } from "@/lib/animations/gsap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";

type HeroMotionProps = {
  children: ReactNode;
};

const HeroMotion = ({ children }: HeroMotionProps) => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope) return;

      const motionTargets = Array.from(scope.querySelectorAll("[data-motion]"));

      return withMotion(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from("[data-motion='role']", { y: 20, opacity: 0, duration: 0.5 })
          .from(
            "[data-motion='title']",
            { y: 32, opacity: 0, duration: 0.6 },
            "-=0.25",
          )
          .from(
            "[data-motion='line']",
            { y: 20, opacity: 0, duration: 0.45, stagger: 0.08 },
            "-=0.3",
          )
          .from(
            "[data-motion='cta']",
            { y: 16, opacity: 0, duration: 0.4 },
            "-=0.15",
          )
          .from(
            "[data-motion='terminal']",
            { x: 24, opacity: 0, duration: 0.6 },
            "-=0.35",
          );
      }, motionTargets);
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="contents">
      {children}
    </div>
  );
};

export default HeroMotion;
