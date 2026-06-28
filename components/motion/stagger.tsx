"use client";

import { cn } from "@/lib/utils";
import { MOTION, withMotion } from "@/lib/animations/gsap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type StaggerOwnProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  start?: string;
};

type StaggerProps<T extends ElementType = "div"> = StaggerOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof StaggerOwnProps | "as">;

const Stagger = <T extends ElementType = "div">({
  children,
  className,
  stagger = MOTION.stagger,
  start = MOTION.scrollStart,
  as,
  ...rest
}: StaggerProps<T>) => {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = Array.from(el.children);
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
      }, items);
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Stagger;
