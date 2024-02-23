import { createAnimationVariant } from '~/animations/create-animation-variant';

const TRANSITION = {
  duration: 2
};

export const FADE_IN = createAnimationVariant({
  visible: {
    opacity: 1,
    transition: TRANSITION
  },
  hidden: {
    opacity: 0,
    transition: TRANSITION
  }
});
