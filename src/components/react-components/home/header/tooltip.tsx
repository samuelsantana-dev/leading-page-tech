import { useState } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

type TooltipProps = {
  label: string;
  content: string;
};

export function Tooltip({ label, content }: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger
          onClick={() => setOpen(true)}
          className="hover:text-blue-700 transition-colors opacity-50 cursor-not-allowed"
        >
          {label}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-grey-50 text-blue-800 font-bold px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
            sideOffset={5}
            side="bottom"
          >
            {content}
            <RadixTooltip.Arrow className="fill-grey-50" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
