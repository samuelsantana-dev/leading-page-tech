import { motion } from 'framer-motion';

import { SLIDE_IN_FROM_BOTTOM, FADE_IN } from '~/animations/index';

export function MobileAppSection() {
  return (
    <div className="flex justify-between relative overflow-hidden">
      <div className="max-w-[592px] w-full py-[70px] lg:py-[119px] min-[1178px]:items-center">
        <motion.h1
          className="font-Poppins font-bold text-sm text-[#4C73F4] min-[1178px]:text-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition
              }
            },
            offscreen: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          CONHEÇA TAMBEM{' '}
        </motion.h1>
        <motion.h1
          className="font-poppins font-bold text-mdlg text-[#0F274C] min-[1178] justify-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition
              }
            },
            offscreen: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Sofia Resolve{' '}
        </motion.h1>
        <motion.h1
          className="font-poppins font-bold text-mdlg text-[#0F274C]"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition
              }
            },
            offscreen: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Um de nossos projetos desenvolvidos{' '}
        </motion.h1>
        <motion.p
          className="text-base mt-[8px] text-grey-600"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition,
                delay: 0.2
              }
            },
            offscreen: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition,
                delay: 0.2
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Utilize a inteligência artificial para realizar tarefas de modo rápido e prático e ter uma
          vida menos sobrecarregada. Experimente hoje e começe a ver os resultados.
        </motion.p>

        <div className="mt-[32px]">
          <motion.div
            className="flex items-center gap-[12px] mt-[8px]"
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              onscreen: {
                ...FADE_IN.visible,
                transition: {
                  ...FADE_IN.visible.transition,
                  delay: 0.6
                }
              },
              offscreen: {
                ...FADE_IN.hidden,
                transition: {
                  ...FADE_IN.hidden.transition,
                  delay: 0.6
                }
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <a
              href="https://www.sofiaresolve.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="main_section_button animate-fade text-center bg-blue-800  text-[1rem] min-[1178px]:text-[1.25rem] font-poppins mt-[37px] p-[10px] min-[1178px]:rounded-lg rounded-sm font-extrabold  transition-colors min-[1178px]:max-w-[314px] max-w-full py-[16px] px-[30px] lg:py-[20px]"
            >
              Conhecer Sofia Resolve
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hidden min-[1128px]:block">
        <motion.img
          src="/assets/images/Logo.webp"
          aria-hidden
          className="absolute inset-y-0 right-0 mx-auto my-auto"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              ...SLIDE_IN_FROM_BOTTOM.visible,
              transition: {
                ...SLIDE_IN_FROM_BOTTOM.visible.transition,
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.4
              }
            },
            offscreen: {
              ...SLIDE_IN_FROM_BOTTOM.hidden,
              transition: {
                ...SLIDE_IN_FROM_BOTTOM.hidden.transition,
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.4
              }
            }
          }}
          viewport={{ once: true, amount: 'some' }}
        />
      </div>
    </div>
  );
}
