/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1fcec8',
        darkGray:'#43475f',
        blue:'#00192D'
      },
    },

  },

  plugins: [
    flowbitePlugin
  ],

};