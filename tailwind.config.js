/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#0C112F",
        "secondary": "#DD0004",
        "white-trans": "rgb(255, 255, 255, 0.2)"
      },
      boxShadow: {
        'med': '5px 5px 25px 0 rgba(0, 0, 0, 0.2)',
        'med-2': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      zIndex: {
  			'1': '1',
  			'2': '2',
  			'3': '3',
  			'4': '4',
  			'5': '5',
  			'6': '6',
  			'7': '7',
  			'8': '8',
  			'9': '9'
  		},
    },
  },
  plugins: [],
};
