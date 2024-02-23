import type { ComponentProps } from 'react';
import clsx from 'clsx';

import { PipeTechLogo } from '../../sofia-resolve-logo';
import { linksArray } from '../../../../constants';
import { Tooltip } from './tooltip';

export function LgHeader({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'w-full h-[117px] flex justify-between items-center mx-auto xl:px-[100px] px-[14px]',
        className
      )}
      {...rest}
    >
      <div className="mr-[18px]">
        <a href="/">
          <PipeTechLogo />
        </a>
      </div>

      <nav className="flex items-center gap-[30px]">
        <ul className="text-blue-600 font-semibold gap-[30px] flex">
          {linksArray.map((link) =>
            link.is_available ? (
              <li key={link.href}>
                <a href={link.href} className="hover:text-blue-700 transition-colors">
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Tooltip label={link.label} content="Em breve!" />
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
