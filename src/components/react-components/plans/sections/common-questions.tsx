import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';

import { FADE_IN } from '~/animations/index';

const QUESTIONS = [
  {
    id: 'item-1',
    question: 'O que a Sofia Resolve faz?',
    answer:
      'A Sofia é uma Assistente Virtual que utiliza da Inteligência Artificial para auxiliar empreendedores em tarefas essenciais do seu negócio. Ela traz excelência e agilidade ao desenvolver textos estruturados e autorais. Dessa forma, o empreendedor pode focar todos os esforços do seu time nas tarefas principais do negócio, deixando a copy, a descrição dos produtos, a redação de legendas, cartas aos clientes e funcionários e muito mais para que a Sofia resolva! '
  },
  {
    id: 'item-2',
    question: 'Como a Sofia Resolve pode me ajudar?',
    answer:
      'A Sofia Resolve redige textos que envolvem a vida do empreendedor mas que não estão ligados ao foco principal do negócio. Diversas vezes o empreendedor precisa dispor de um tempo ou destinar alguém da sua equipe para execução de tarefas como elaboração de contratos, desenvolvimento de calendário editorial, legendas para Instagram e muitos outros. Através da Sofia Resolve, essas tarefas podem ser rapidamente resolvidas gerando economia de todos os recursos mas garantindo a alta qualidade. '
  },
  {
    id: 'item-3',
    question: 'Para quem é a Sofia Resolve?',
    answer:
      'Para microempreendedores ou pequenas empresas que visam utilizar da Inteligência Artificial para automatizar tarefas e reduzir custos. '
  },
  {
    id: 'item-4',
    question: 'Quais são os recursos da Sofia Resolve?',
    answer:
      'A Sofia elabora textos para todas as áreas da sua empresa: Marketing, Jurídico, Recursos Humanos, Administrativo, Financeiro, Conteúdo e Branding. Em todas as áreas ela é capaz de produzir conteúdos '
  },
  {
    id: 'item-5',
    question: 'Como utilizar a Sofia Resolve?',
    answer:
      'A Sofia Resolve fornece diversas opções dentro de cada área de atuação. A medida que é utilizada, ela compreende melhor suas necessidades e as características do seu negócio, de modo que as próximas atividades desenvolvidas por ela fiquem mais aprimoradas e individualizadas para atender ao negócio do usuário. '
  },
  {
    id: 'item-6',
    question: 'Como é feito o pagamento?',
    answer:
      'O pagamento é realizado mediante assinatura mensal. O empreendedor seleciona o plano que melhor atende seu negócio, conforme sua necessidade de redação e mensalmente o valor será debitado do cartão de crédito.'
  }
];

export function CommonQuestions() {
  return (
    <div className="section_content py-[48px]">
      <h1 className="text-blue-800 text-[2rem] font-medium text-center">Perguntas Frequentes</h1>

      <div className="mt-[40px]">
        <Accordion.Root
          type="multiple"
          defaultValue={['item-1']}
          className="grid grid-cols-1 gap-[26px]"
        >
          {QUESTIONS.map((question, index) => (
            <Accordion.Item
              asChild
              key={question.id}
              className="flex justify-between bg-grey-50 shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)] px-[32px] py-[44px] rounded-[16px] w-full"
              value={question.id}
            >
              <motion.div
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
                <div>
                  <h4 className="text-blue-800 text-[1.375rem] font-medium">{question.question}</h4>
                  <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden mt-[13px] w-full">
                    <p className="text-[#6F6C90] text-base leading-[30px]">{question.answer}</p>
                  </Accordion.Content>
                </div>
                <Accordion.Header>
                  {/* CLOSE BUTTON */}
                  <Accordion.Trigger
                    className="data-[state=closed]:hidden data-[state=open]:flex animate-fill-both w-[41px] h-[41px] bg-blue-800 hover:bg-[#183663] transition-colors rounded-sm flex items-center justify-center cursor-pointer"
                    aria-label="Clique para ocultar resposta"
                  >
                    <svg
                      width="20"
                      height="4"
                      viewBox="0 0 20 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M1.76562 0.6C1.1305 0.6 0.615625 1.11487 0.615625 1.75C0.615625 2.38513 1.1305 2.9 1.76563 2.9H17.7656C18.4008 2.9 18.9156 2.38513 18.9156 1.75C18.9156 1.11487 18.4008 0.6 17.7656 0.6H1.76562Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Accordion.Trigger>

                  {/* OPEN BUTTON */}
                  <Accordion.Trigger
                    className="data-[state=closed]:flex data-[state=open]:hidden w-[41px] h-[41px] bg-blue-[#F7F7FF] hover:bg-[#F0F0F0] transition-colors rounded-sm flex items-center justify-center cursor-pointer"
                    aria-label="Clique para ver a resposta"
                  >
                    <svg
                      className="data-[state=open]:animate-fadeOut data-[state=closed]:animate-fadeIn"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.76514 0.985254C9.13001 0.985254 8.61514 1.50013 8.61514 2.13525V18.1353C8.61514 18.7704 9.13001 19.2853 9.76514 19.2853C10.4003 19.2853 10.9151 18.7704 10.9151 18.1353V2.13525C10.9151 1.50013 10.4003 0.985254 9.76514 0.985254Z"
                        fill="#6F6C90"
                        stroke="#6F6C90"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.76514 8.98525C1.13001 8.98525 0.615137 9.50013 0.615137 10.1353C0.615137 10.7704 1.13001 11.2853 1.76514 11.2853H17.7651C18.4003 11.2853 18.9151 10.7704 18.9151 10.1353C18.9151 9.50013 18.4003 8.98525 17.7651 8.98525H1.76514Z"
                        fill="#6F6C90"
                        stroke="#6F6C90"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
              </motion.div>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
