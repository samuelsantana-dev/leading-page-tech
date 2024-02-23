const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      cyan: {
        50: '#D3FDF8',
        100: '#ADFFF5',
        200: '#6AFFED',
        300: '',
        400: '#34D6BF',
        500: '#00CCB4',
        600: '#00ABA3',
        700: '#008591'
      },
      'dark-green': {
        50_5: 'rgba(233,244,241,0.5)',
        50: '#E9F4F1',
        60: '#637381'
      },
      blue: {
        500: '#E3EAFF',
        600: '#111F42',
        700: '#0F274C',
        800: '#4C73F4',
        900: '#637381',
      },
      purple: {
        800: '#0D0D2B'
      },
      grey: {
        50: '#FFFFFF',
        100: '#F9FAFB',
        200: '#F4F6F8',
        300: '#DFE3E8',
        400: '#C4CDD5',
        500: '#919EAB',
        600: '#637381',
        700: '#454F5B',
        800: '#212B36',
        900: '#161C24'
      }
    },
    fontFamily: {
      manrope: ['"Manrope Variable"', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      inter: ['"Inter Variable"', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      sm: '1rem',
      md: '1.5rem',
      base: '1.125rem',
      mdlg: '1.768rem',  
      lg: '2.812rem',
      lgxl: '3.39rem',  
      xl: '3rem',
      '1xl': '3.125rem'
    },
    keyframes: {
      fade: {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      },
      fadeInRighShort: {
        from: {
          opacity: 0,
          transform: "translate3d(100px, 0, 0)"
        },
        to: {
          opacity: 1,
          transform: "translate3d(0, 0, 0)"
        }
      },
      slideDown: {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 }
      },
      slideDownAndFade: {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' }
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: 'translateX(-2px)' },
        to: { opacity: 1, transform: 'translateX(0)' }
      }
    },
    animation: {
      fade: 'fade 1s',
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
    },
    extend: {
      borderRadius: {
        sm: '8px',
        md: '10px',
        lg: '16px',
        xlg: '26px'
      }
    }
  },
  plugins: []
};
