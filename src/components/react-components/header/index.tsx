import type { PropsWithChildren } from 'react';
import { motion, useMotionValueEvent, useScroll, useAnimationControls } from 'framer-motion';

import { SLIDE_IN_FROM_TOP } from '~/animations/index';

export function Header({ children }: PropsWithChildren) {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previousScrollY = scrollY.getPrevious();

    const isScrollingUpwards = latest <= previousScrollY;

    if (isScrollingUpwards) {
      controls.start(SLIDE_IN_FROM_TOP.visible);
    } else {
      controls.start(SLIDE_IN_FROM_TOP.hidden);
    }
  });

  return (
    <>
      <motion.header
        initial={SLIDE_IN_FROM_TOP.visible}
        animate={controls}
        variants={{
          hidden: SLIDE_IN_FROM_TOP.hidden,
          visible: SLIDE_IN_FROM_TOP.visible
        }}
        className="w-full flex items-center fixed top-0 z-10 h-20 bg-[#FFFFFF]"
      >
        {children}
      </motion.header>
    </>
  );
}
