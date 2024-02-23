import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import clsx from 'clsx';

import { formatPrice } from './format-price';
import { FADE_IN } from '~/animations/index';

type PrincingCardForMediumScreensProps = {
  price: number;
  type: string;
  description: string;
  features: string[];
  className?: string;
  checkoutLink: string;
};

export function PrincingCardForMediumScreens({
  price,
  type,
  description,
  features,
  className,
  checkoutLink
}: PrincingCardForMediumScreensProps) {
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

  return (
    <motion.div
      ref={containerRef}
      className={clsx(
        'w-full h-[659px] bg-grey-50 px-[32px] py-[32px] flex flex-col justify-between rounded-xlg border-[2px] border-solid border-[rgba(255,255,255,0.80)]',
        className
      )}
      initial="hidden"
      animate={animationControls}
      variants={FADE_IN}
    >
      <div className="flex flex-col">
        <motion.h2
          className="font-bold text-blue-800 text-[2.25rem] flex items-center"
          initial="hidden"
          animate={animationControls}
          variants={FADE_IN}
        >
          {formatPrice(price)}{' '}
          <span className="text-[1.06rem] text-[#848199] font-medium pl-[4px]">/mês</span>
        </motion.h2>

        <motion.div
          className="mt-[17px]"
          initial="hidden"
          animate={animationControls}
          variants={FADE_IN}
        >
          <h3 className="text-blue-800 font-medium text-[1.75rem]">{type}</h3>
          <p className="text-[#848199] text-sm font-medium mt-[8px]">{description}</p>
        </motion.div>

        <div className="text-[#848199] text-sm mt-[36px]">
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
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z"
                    fill="#5243C2"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z"
                    fill="#BB6BD9"
                  />
                </svg>{' '}
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.a
        href={checkoutLink}
        target="_blank"
        rel="noreferrer"
        className="w-full inline-block py-[12px] bg-[#848199] text-center rounded-md mb-[28px] hover:bg-[#928FAC] transition-colors mt-[8px]"
        initial="hidden"
        animate={animationControls}
        variants={{
          visible: {
            ...FADE_IN.visible,
            y: 0,
            transition: {
              ...FADE_IN.visible.transition,
              delay: 0.4 * features.length,
              duration: 0.5
            }
          },
          hidden: {
            ...FADE_IN.hidden,
            y: '20px',
            transition: {
              ...FADE_IN.hidden.transition,
              delay: 0.4 * features.length,
              duration: 0.5
            }
          }
        }}
      >
        Assinar agora
      </motion.a>
    </motion.div>
  );
}
