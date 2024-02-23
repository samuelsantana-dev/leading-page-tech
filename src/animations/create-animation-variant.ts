import type { TargetAndTransition } from 'framer-motion';

type Variant = {
  [key: string]: TargetAndTransition;
};

export function createAnimationVariant<T = Variant>(variants: T): T {
  return variants;
}
