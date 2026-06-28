import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const MOTION = {
  from: { y: 24, opacity: 0 },
  duration: 0.65,
  ease: "power2.out" as const,
  scrollStart: "top 85%",
  stagger: 0.08,
} as const;

export const withMotion = (
  animate: () => void,
  targets?: Element | Element[],
) => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", () => {
    if (targets) gsap.set(targets, { clearProps: "all" });
  });

  mm.add("(prefers-reduced-motion: no-preference)", animate);

  return () => mm.revert();
};
