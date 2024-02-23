import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import clsx from 'clsx';

import { formatPrice } from './format-price';
import { FADE_IN } from '~/animations/index';

type MostPopularPricingCardForMediumScreensProps = {
  price: number;
  type: string;
  description: string;
  features: string[];
  className?: string;
  checkoutLink: string;
};

export function MostPopularPricingCardForMediumScreens({
  price,
  type,
  description,
  features,
  className,
  checkoutLink
}: MostPopularPricingCardForMediumScreensProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef);
  const animationControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      animationControls.start('visible');

      return () => {
        animationControls.stop();
      };
    }
  }, [isInView]);

  const ANIMATION_DELAY = 0.4 * features.length;
  const TEXT_ANIMATION_VARIANTS = {
    visible: {
      color: '#FFFFFF',
      transition: {
        delay: ANIMATION_DELAY,
        duration: 0.8
      }
    },
    hidden: {
      color: '#848199',
      transition: {
        delay: ANIMATION_DELAY,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={clsx(
        'w-full h-[659px] px-[32px] py-[32px] flex flex-col justify-between bg-blue-800 rounded-xlg',
        className
      )}
      initial="hidden"
      animate={animationControls}
      variants={{
        visible: {
          background: '#0F274C',
          boxShadow: '0px 42px 34px 0px rgba(82,67,194,0.3)',
          transition: {
            duration: 0.8,
            delay: ANIMATION_DELAY
          }
        },
        hidden: {
          background: '#FFFFFF',
          transition: {
            duration: 0.8,
            delay: ANIMATION_DELAY
          }
        }
      }}
    >
      <motion.div
        className="flex flex-col"
        initial="hidden"
        animate={animationControls}
        variants={{
          visible: {
            marginTop: '0',
            transition: {
              duration: 0.8,
              delay: ANIMATION_DELAY
            }
          },
          hidden: {
            marginTop: 'calc(-27px + -20px)', // "27px" is the "MAIS POPULAR" badge, "20px" is the "MAIS POPULAR" badge margin bottom.
            transition: {
              duration: 0.8,
              delay: ANIMATION_DELAY
            }
          }
        }}
      >
        <motion.div
          className="self-end max-w-[121px] w-full h-[27px] mb-[20px] bg-[#00FFED] text-blue-800 rounded-full flex items-center justify-center font-extrabold text-[0.825rem]"
          initial="hidden"
          animate={animationControls}
          variants={{
            visible: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition,
                delay: ANIMATION_DELAY
              }
            },
            hidden: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition,
                delay: ANIMATION_DELAY
              }
            }
          }}
        >
          <span>MAIS POPULAR</span>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={FADE_IN}>
          <motion.h2
            className="font-bold text-grey-50 text-[2.25rem] flex items-center"
            initial="hidden"
            animate={animationControls}
            variants={{
              visible: TEXT_ANIMATION_VARIANTS.visible,
              hidden: {
                ...TEXT_ANIMATION_VARIANTS.hidden,
                color: '#0F274C'
              }
            }}
          >
            {formatPrice(price)}{' '}
            <motion.span
              className="text-[1.06rem] text-grey-50 font-medium pl-[4px]"
              initial="hidden"
              animate={animationControls}
              variants={TEXT_ANIMATION_VARIANTS}
            >
              /mês
            </motion.span>
          </motion.h2>

          <div className="mt-[17px]">
            <motion.h3
              className="text-grey-50 font-medium text-[1.75rem]"
              initial="hidden"
              animate={animationControls}
              variants={{
                visible: {
                  ...TEXT_ANIMATION_VARIANTS.visible
                },
                hidden: {
                  ...TEXT_ANIMATION_VARIANTS.hidden,
                  color: '#0F274C'
                }
              }}
            >
              {type}
            </motion.h3>
            <motion.p
              className="text-grey-50 text-sm font-medium mt-[8px]"
              initial="hidden"
              animate={animationControls}
              variants={TEXT_ANIMATION_VARIANTS}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        <div className="text-grey-50 text-sm mt-[36px]">
          <ul className="flex flex-col gap-[14px]">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                className="flex items-center gap-[10px]"
                initial="hidden"
                animate={animationControls}
                variants={{
                  visible: {
                    ...FADE_IN.visible,
                    transition: {
                      ...FADE_IN.visible.transition,
                      delay: 0.4 * index,
                      duration: 0.8
                    }
                  },
                  hidden: {
                    ...FADE_IN.hidden,
                    transition: {
                      ...FADE_IN.hidden.transition,
                      delay: 0.4 * index,
                      duration: 0.8
                    }
                  }
                }}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    opacity="0.1"
                    d="M10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5C15.5228 20.5 20 16.0228 20 10.5C19.9936 4.97982 15.5202 0.506429 10 0.5Z"
                    fill="white"
                    initial="hidden"
                    animate={animationControls}
                    variants={{
                      visible: {
                        fill: 'white',
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: ANIMATION_DELAY
                        }
                      },
                      hidden: {
                        fill: '#5243C2',
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: ANIMATION_DELAY
                        }
                      }
                    }}
                  />
                  <motion.path
                    d="M15.7724 7.33337L10.0683 15.0742C9.93221 15.2547 9.72936 15.373 9.50527 15.4024C9.28118 15.4319 9.05465 15.3701 8.87659 15.2309L4.80325 11.9742C4.44381 11.6866 4.3856 11.162 4.67325 10.8025C4.9609 10.4431 5.48547 10.3849 5.84492 10.6725L9.24159 13.39L14.4308 6.34754C14.6009 6.0922 14.8976 5.95103 15.2031 5.98007C15.5086 6.00912 15.7734 6.20368 15.8923 6.48652C16.0113 6.76935 15.9653 7.09469 15.7724 7.33337Z"
                    fill="white"
                    initial="hidden"
                    animate={animationControls}
                    variants={{
                      visible: {
                        fill: 'white',
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: ANIMATION_DELAY
                        }
                      },
                      hidden: {
                        fill: '#BB6BD9',
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: ANIMATION_DELAY
                        }
                      }
                    }}
                  />
                </svg>
                <motion.span
                  initial="hidden"
                  animate={animationControls}
                  variants={TEXT_ANIMATION_VARIANTS}
                >
                  {feature}
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.a
        href={checkoutLink}
        target="_blank"
        rel="noreferrer"
        className="w-full inline-block py-[12px] mb-[28px] text-center rounded-md transition-colors text-blue-800 bg-cyan-500 hover:bg-cyan-400 font-medium mt-[8px]"
        initial="hidden"
        animate={animationControls}
        variants={{
          visible: {
            ...FADE_IN.visible,
            transition: {
              ...FADE_IN.visible.transition,
              delay: ANIMATION_DELAY,
              duration: 0.5
            }
          },
          hidden: {
            ...FADE_IN.hidden,
            transition: {
              ...FADE_IN.hidden.transition,
              delay: ANIMATION_DELAY,
              duration: 0.5
            }
          }
        }}
      >
        Escolher Plano
      </motion.a>
    </motion.div>
  );
}
