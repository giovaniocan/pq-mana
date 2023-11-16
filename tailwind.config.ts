import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',

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
        'base-inpunt': '#EDEDED',

        background: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
