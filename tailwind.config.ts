import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        beige : "#FAE8C8",
        olivegreen: "#BAB86C",
        sagegreen: "#D1E2C4",
        textbeige: "#D7BDA3",
        sanddollar: "#CEA660",
        textbrown : "#745D20",
        bggreen : "#2cd292",
        darkolive : "#6A6932",
        bglightblue : "#ddecfb",
        bggray : "#909193"
      }
    },
  },
  plugins: [],
}
export default config
