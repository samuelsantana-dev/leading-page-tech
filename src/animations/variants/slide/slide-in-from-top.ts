import { createAnimationVariant } from '../../create-animation-variant';
import { DISTANCE } from './distance';

const TRANSITION = {
  duration: 0.1,
  ease: 'linear'
};

export const SLIDE_IN_FROM_TOP = createAnimationVariant({
  visible: {
    y: 0,
    opacity: 1,
    transition: TRANSITION
  },
  hidden: {
    y: '-' + DISTANCE,
    opacity: 0,
    transition: {
      ...TRANSITION,
      duration: 0.2
    }
  }
});
