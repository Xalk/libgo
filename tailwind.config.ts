import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
};
export default config;
