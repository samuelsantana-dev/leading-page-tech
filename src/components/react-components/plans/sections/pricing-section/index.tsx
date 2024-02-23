import { motion } from 'framer-motion';

import { MostPopularPricingCardForLargeScreens } from './most-popular-pricing-card-for-large-screens';
import { PrincingCardForLargeScreens } from './princing-card-for-large-screens';
import { MostPopularPricingCardForMediumScreens } from './most-popular-pricing-card-for-medium-screens';
import { PrincingCardForMediumScreens } from './princing-card-for-medium-screens';
import { FADE_IN } from '~/animations/index';

const PRINCING = [
  {
    id: 3,
    price: 99.9,
    type: 'Essencial',
    is_most_popular: true,
    description: 'Indicado para empreendedores com negócio consolidado.',
    features: ['150 mil palavras', '+60 recursos de IA', 'Suporte via Whatsapp'],
    checkout_link: import.meta.env.PUBLIC_PRICING_PLUS
  },
  {
    id: 4,
    price: 129.9,
    type: 'Premium',
    is_most_popular: false,
    description: 'Indicado para gerar contratos ou para negócio com alto volume de vendas',
    features: ['Sem limite de palavras', '+60 recursos de IA', 'Suporte via Whatsapp'],
    checkout_link: import.meta.env.PUBLIC_PRICING_PREMIUM
  }
];

export function PricingSection() {
  return (
    <div className="mx-auto px-4 max-w-[680px] py-[172px] md:py-[190px]">
      <motion.h1
        className="text-[2.5rem] text-blue-800 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={FADE_IN}
      >
        Planos e preços
      </motion.h1>

      <div className="flex-col md:flex-row flex justify-between w-full mt-[12px] md:mt-[25px] text-center md:text-left">
        <motion.p
          className="text-[#848199] text-base block max-w-[584px] w-full mx-auto md:mx-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition,
                delay: 0.2
              }
            },
            hidden: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition,
                delay: 0.2
              }
            }
          }}
        >
          Otimize as tarefas do seu negócio com a inteligência artificial da Sofia Resolve e torne
          sua empresa mais competitiva.
        </motion.p>
        {/* <motion.div
          className="flex self-center md:self-start mt-[32px] md:mt-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              ...FADE_IN.visible,
              transition: {
                ...FADE_IN.visible.transition,
                delay: 0.2
              }
            },
            hidden: {
              ...FADE_IN.hidden,
              transition: {
                ...FADE_IN.hidden.transition,
                delay: 0.2
              }
            }
          }}
        >
          <button
            type="button"
            className="w-[110px] h-[44px] bg-cyan-500 rounded-l-md text-center font-medium text-blue-800 text-[0.75rem] shadow-[0px_5px_7px_0px_rgba(82,67,194,0.23)] cursor-pointer"
          >
            MENSAL
          </button>

          <button
            type="button"
            className="bg-grey-50 w-[110px] h-[44px] text-cyan-500 rounded-r-md text-center text-[0.75rem] font-medium cursor-pointer"
          >
            ANUAL
          </button>
        </motion.div> */}
      </div>

      <motion.div
        className="flex flex-col min-[1092px]:flex-row items-center mt-[72px] min-[1092px]:mt-[123px] min-[1092px]:bg-grey-50 bg-none rounded-xlg gap-[32px] min-[1092px]:gap-0"
        initial="hidden"
        animate="visible"
        variants={FADE_IN}
      >
        {PRINCING.map((price) =>
          price.is_most_popular ? (
            <>
              <MostPopularPricingCardForLargeScreens
                className="hidden min-[1092px]:flex"
                key={price.id}
                price={price.price}
                description={price.description}
                type={price.type}
                features={price.features}
                checkoutLink={price.checkout_link}
              />
              <MostPopularPricingCardForMediumScreens
                className="flex min-[1092px]:hidden"
                key={price.id}
                price={price.price}
                description={price.description}
                type={price.type}
                features={price.features}
                checkoutLink={price.checkout_link}
              />
            </>
          ) : (
            <>
              <PrincingCardForLargeScreens
                className="hidden min-[1092px]:flex"
                key={price.id}
                price={price.price}
                description={price.description}
                type={price.type}
                features={price.features}
                checkoutLink={price.checkout_link}
              />
              <PrincingCardForMediumScreens
                className="flex min-[1092px]:hidden"
                key={price.id}
                price={price.price}
                description={price.description}
                type={price.type}
                features={price.features}
                checkoutLink={price.checkout_link}
              />
            </>
          )
        )}
      </motion.div>
    </div>
  );
}
