import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: '1440px'
    },
    extend: {
      fontSize: {
        '2xl': "45px",
        'xl': '24px',
        'lg': '20px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px'
      },
      colors: {
        primary: '#8DD3BB',
        secondary: '#FAFBFC',
        white: '#fff',
        green: '#121',
        dark: '#1C1B1F',
        accent: '#CDEAE1'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
