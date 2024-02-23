import { motion } from 'framer-motion';

import { SLIDE_IN_FROM_BOTTOM, FADE_IN } from '~/animations/index';

export function FeaturesSection() {
  return (
    <>
      <motion.h1
        className="font-manrope font-bold text-base text-blue-800"
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
        CONHEÇA OS NOSSOS SERVIÇOS{' '}
      </motion.h1>

      <motion.h1
        className="font-manrope font-bold text-mdlg text-blue-600"
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
        Tecnologia para seu negócio<br></br>
        se destacar no mercado{' '}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] md:gap-[110px] mt-[48px] sm:mt-[74px] sm:text-left text-center">
        <div>
          <motion.img
            src="/assets/images/Ia.webp"
            alt="Imagem de uma inteligencia artificial"
            className="w-full"
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              onscreen: {
                ...SLIDE_IN_FROM_BOTTOM.visible,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.visible.transition,
                  duration: 0.6,
                  ease: 'easeOut'
                }
              },
              offscreen: {
                ...SLIDE_IN_FROM_BOTTOM.hidden,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.hidden.transition,
                  duration: 0.6,
                  ease: 'easeOut'
                }
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          />

          <div className="md:mt-[42px] mt-[12px] max-w-[532px] w-full">
            <motion.h3
              className=" text-blue-600 text-[1.125rem] sm:text-[1.426rem] mb-[14px] font-semibold"
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
              Consultoria em IA{' '}
            </motion.h3>
            <motion.p
              className="text-blue-600 text-[1rem] sm:text-sm font-light"
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                onscreen: {
                  ...FADE_IN.visible,
                  transition: {
                    ...FADE_IN.visible.transition,
                    delay: 0.4
                  }
                },
                offscreen: {
                  ...FADE_IN.hidden,
                  transition: {
                    ...FADE_IN.hidden.transition,
                    delay: 0.4
                  }
                }
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Nossos especialistas em IA oferecem consultoria personalizada para incorporar
              inteligência artificial aos seus processos, otimizando a tomada de decisões e
              impulsionando a inovação
            </motion.p>
          </div>
        </div>

        <div>
          <motion.img
            src="/assets/images/chatbot.webp"
            alt="Imagem ilustrativa de um chatbot"
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              onscreen: {
                ...SLIDE_IN_FROM_BOTTOM.visible,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.visible.transition,
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.2
                }
              },
              offscreen: {
                ...SLIDE_IN_FROM_BOTTOM.hidden,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.hidden.transition,
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.2
                }
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          />

          <div className="md:mt-[42px] mt-[12px] max-w-[532px] w-full">
            <motion.h3
              className=" text-blue-600 text-[1.125rem] sm:text-[1.426rem] mb-[14px] font-semibold"
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
              Chatbots Inteligentes{' '}
            </motion.h3>
            <motion.p
              className="text-blue-600 text-[1rem] sm:text-sm font-light"
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                onscreen: {
                  ...FADE_IN.visible,
                  transition: {
                    ...FADE_IN.visible.transition,
                    delay: 0.8
                  }
                },
                offscreen: {
                  ...FADE_IN.hidden,
                  transition: {
                    ...FADE_IN.hidden.transition,
                    delay: 0.8
                  }
                }
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Crie experiências de atendimento ao cliente excepcionais com chatbots inteligentes que
              entendem e respondem às necessidades dos seus usuários em tempo real
            </motion.p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] md:gap-[110px] md:-mt-[78px] mt-[42px] sm:text-left text-center">
        <div>
          <motion.img
            src="/assets/images/tecnologia.webp"
            alt="Imagem ilustrativa de geração de contrato"
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              onscreen: {
                ...SLIDE_IN_FROM_BOTTOM.visible,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.visible.transition,
                  duration: 0.6,
                  ease: 'easeOut'
                }
              },
              offscreen: {
                ...SLIDE_IN_FROM_BOTTOM.hidden,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.hidden.transition,
                  duration: 0.6,
                  ease: 'easeOut'
                }
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          />

          <div className="md:mt-[42px] mt-[12px] max-w-[532px] w-full">
            <motion.h3
              className=" text-blue-600 text-[1.125rem] sm:text-[1.426rem] mb-[14px] font-semibold"
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
              Sistemas Inovadores
            </motion.h3>
            <motion.p
              className="text-blue-600 text-[1rem] sm:text-sm font-light"
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                onscreen: {
                  ...FADE_IN.visible,
                  transition: {
                    ...FADE_IN.visible.transition,
                    delay: 0.4
                  }
                },
                offscreen: {
                  ...FADE_IN.hidden,
                  transition: {
                    ...FADE_IN.hidden.transition,
                    delay: 0.4
                  }
                }
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Desenvolvemos sistemas eficientes que automatizam processos, melhoram a eficiência
              operacional e impulsionam o crescimento sustentável do seu negócio
            </motion.p>
          </div>
        </div>

        <div className="self-end">
          <motion.img
            src="/assets/images/mexendo-no-celular.webp"
            alt="Imagem ilustrativa de um homem mexendo no celular"
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              onscreen: {
                ...SLIDE_IN_FROM_BOTTOM.visible,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.visible.transition,
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.2
                }
              },
              offscreen: {
                ...SLIDE_IN_FROM_BOTTOM.hidden,
                transition: {
                  ...SLIDE_IN_FROM_BOTTOM.hidden.transition,
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.2
                }
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          />

          <div className="md:mt-[42px] mt-[12px] max-w-[532px] w-full">
            <motion.h3
              className=" text-blue-600 text-[1.125rem] sm:text-[1.426rem] mb-[14px] font-semibold"
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
              Aplicativos Web e Mobile{' '}
            </motion.h3>
            <motion.p
              className="text-blue-600 text-[1rem] sm:text-sm font-light"
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                onscreen: {
                  ...FADE_IN.visible,
                  transition: {
                    ...FADE_IN.visible.transition,
                    delay: 0.4
                  }
                },
                offscreen: {
                  ...FADE_IN.hidden,
                  transition: {
                    ...FADE_IN.hidden.transition,
                    delay: 0.4
                  }
                }
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Desde aplicativos móveis intuitivos até soluções de software complexas, nossa equipe
              experiente desenvolve produtos personalizados que destacam a singularidade da sua
              marca
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-center"
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
          href="https://wa.me/5561998066454"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 animate-fade text-center bg-white text-[1rem] min-[1178px]:text-[1.25rem] font-poppins mt-[37px] p-[10px] min-[1178px]:rounded-lg rounded-sm font-extrabold transition-colors min-[1178px]:max-w-[314px] max-w-full py-[16px] px-[30px] lg:py-[20px] border border-blue-600"
        >
          Entrar em Contato
        </a>
      </motion.div>
    </>
  );
}
