import { motion } from 'framer-motion';
import { clsx } from 'clsx';

import { SLIDE_IN_FROM_TOP } from '~/animations/index';
import { FADE_IN } from '~/animations/variants/fade/fade-in';
import { ResultImpactNumberAnimation } from './result-impact-number-animation';

const RESULTS = [
  {
    title: 'Usuários nos nossos sistemas',
    image_path: '/assets/images/icone-pessoa.webp',
    image_alt: 'Icone de uma pessoa',
    impact: '60_k'
  },
  {
    title: 'Downloads de Aplicativos nas lojas',
    image_path: '/assets/images/download.webp',
    image_alt: 'Icone de uma nuvem de dowload',
    impact: '15_k'
  },
  {
    title: 'Chamados diários atendidos',
    image_path: '/assets/images/headphones.webp',
    image_alt: 'Icone de fones de ouvido',
    impact: '+_100'
  },
  {
    title: 'Pessoas especializadas no time',
    image_path: '/assets/images/rating.webp',
    image_alt: '3 icones de pessoas',
    impact: '25'
  }
];

const RESERVED_NUMBER_REGEX = /\d+/;

export function ResultsSection() {
  return (
    <>
      <div className="grid items-center justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[40px] md:gap-0">
        {RESULTS.map((result, index) => {
          const impactArray = result.impact.split('_');
          const isLastResultItem = RESULTS.length - 1 === index;

          return (
            <div
              key={result.title}
              className="text-center flex items-center w-full md:flex-row flex-col"
            >
              <div className="max-w-[214px] w-full">
                <div className="flex flex-col items-center">
                  <motion.img
                    src={result.image_path}
                    alt={result.image_alt}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                      onscreen: {
                        ...SLIDE_IN_FROM_TOP.visible,
                        transition: {
                          ...SLIDE_IN_FROM_TOP.visible.transition,
                          duration: 0.6,
                          ease: 'easeOut',
                          delay: 0.2 * index
                        }
                      },
                      offscreen: {
                        ...SLIDE_IN_FROM_TOP.hidden,
                        transition: {
                          ...SLIDE_IN_FROM_TOP.hidden.transition,
                          duration: 0.6,
                          ease: 'easeOut',
                          delay: 0.2 * index
                        }
                      }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                  />
                  <motion.span
                    className="text-sm text-blue-600 font-medium mt-[10px]"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                      onscreen: {
                        ...FADE_IN.visible,
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: 0.2 * index
                        }
                      },
                      offscreen: {
                        ...FADE_IN.hidden,
                        transition: {
                          ...FADE_IN.hidden.transition,
                          delay: 0.2 * index
                        }
                      }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    {result.title}
                  </motion.span>
                  <motion.h1
                    className="text-[2.5rem] font-extrabold text-blue-800 mt-[15px]"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                      onscreen: {
                        ...FADE_IN.visible,
                        transition: {
                          ...FADE_IN.visible.transition,
                          delay: 0.4 * index
                        }
                      },
                      offscreen: {
                        ...FADE_IN.hidden,
                        transition: {
                          ...FADE_IN.hidden.transition,
                          delay: 0.4 * index
                        }
                      }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    {impactArray.map((impact) =>
                      RESERVED_NUMBER_REGEX.test(impact) ? (
                        <ResultImpactNumberAnimation
                          key={impact}
                          duration={1.5}
                          delay={0.4 * index}
                          amount={Number(impact)}
                        />
                      ) : (
                        impact
                      )
                    )}
                  </motion.h1>
                </div>
              </div>
              <motion.hr
                className={clsx('border-[0.2px] border-[#C4C4C480] mx-auto w-0 h-[259px]', {
                  hidden: isLastResultItem,
                  'hidden md:block': !isLastResultItem
                })}
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                  onscreen: {
                    ...FADE_IN.visible,
                    transition: {
                      ...FADE_IN.visible.transition,
                      delay: 0.4 * index
                    }
                  },
                  offscreen: {
                    ...FADE_IN.hidden,
                    transition: {
                      ...FADE_IN.hidden.transition,
                      delay: 0.4 * index
                    }
                  }
                }}
                viewport={{ once: true, amount: 0.8 }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
