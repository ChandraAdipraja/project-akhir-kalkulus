import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			montserrat: ['Montserrat', 'sans-serif'],
  		},
  		 colors: {
      		main: '#88aaee',
      		mainAccent: '#4d80e6', // not needed for shadcn components
      		overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      		// light mode
      		bg: '#dfe5f2',
      		text: '#000',
      		border: '#000',

      		// dark mode
      		darkBg: '#272933',
      		darkText: '#eeefe9',
      		darkBorder: '#000',
      		secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
    		},
			borderRadius: {
    		  base: '5px'
    		},
		    boxShadow: {
      			light: '3px 4px 0px 0px #000',
      			dark: '3px 4px 0px 0px #000',
    		},
			translate: {
    		  boxShadowX: '4px',
    		  boxShadowY: '4px',
    		  reverseBoxShadowX: '-4px',
    		  reverseBoxShadowY: '-4px',
    		},
    		fontWeight: {
    		  base: '500',
    		  heading: '700',
    		},
  			},
  		},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
