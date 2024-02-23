import './sm-header.css';

import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { PipeTechLogo } from '../../sofia-resolve-logo';
import { linksArray } from '../../../../constants';

export function SmHeader({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'w-full h-[117px] flex justify-between items-center mx-auto md:px-[100px] px-[14px]',
        className
      )}
      {...rest}
    >
      <div className="mr-[4px]">
        <a href="/">
          <PipeTechLogo />
        </a>
      </div>

      <div className="flex items-center gap-[30px]">
        <NavigationMenu.Root className="NavigationMenuRoot">
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="flex items-center text-blue-800 p-[10px] rounded-[10px] font-extrabold text-sm transition-colors border-[1px] border-solid border-blue-800">
                menu
                <div className="ml-[4px] CaretDown">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one text-blue-800 gap-[8px]">
                  {linksArray.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={clsx('hover:text-blue-700 transition-colors', {
                          'opacity-50 cursor-not-allowed': !link.is_available
                        })}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="NavigationMenuIndicator">
              <div className="Arrow" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="ViewportPosition z-50">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>
        </NavigationMenu.Root>
      </div>
    </div>
  );
}
