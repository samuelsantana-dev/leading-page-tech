import { PropsWithChildren, useEffect, useRef } from 'react';
import { animate, useMotionValue, useInView } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';

type ResultImpactNumberAnimationProps = PropsWithChildren<{
  amount: number;
  duration?: number;
  ease?: Easing | Easing[];
  delay?: number;
  asChild?: boolean;
}>;

export function ResultImpactNumberAnimation({
  amount,
  duration,
  ease,
  delay,
  asChild
}: ResultImpactNumberAnimationProps) {
  const initialTotal = useMotionValue(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const controls = animate(initialTotal, amount, {
        duration,
        ease,
        delay,
        onUpdate: (value) => {
          const current = ref.current;

          if (current) {
            current.textContent = value.toFixed(0).toString();
          }
        }
      });

      return () => controls.pause();
    }
  }, [initialTotal, amount, isInView]);

  const Comp = asChild ? Slot : 'span';

  return <Comp ref={ref} />;
}
