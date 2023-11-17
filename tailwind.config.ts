import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        gradientee: 'linear-gradient(180deg, #8047f8 0%, #dbac2c 100%)',
      },
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',

        gradienti: 'linear-gradient(to right, #8047f8, #dbac2c)',

        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',

        'base-label': '#8D8686',
        'base-title': '#272221',
        'base-card': '#F3F2F2',
        'base-subtitle': '#251D1B',
        'base-text': '#574F4D',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED', // Corrigi o nome aqui para 'base-input'

        background: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

export default config
