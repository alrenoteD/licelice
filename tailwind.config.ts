
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for Alice's website
				alice: {
					background: "#000000",
					red: "#ea384c",
					rose: "#FFDEE2",
					gold: "#F1F1F1", 
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'floating-petal': {
					'0%': { transform: 'translateY(-10%) translateX(-10%) rotate(0deg)', opacity: '0' },
					'50%': { opacity: '0.8' },
					'100%': { transform: 'translateY(110%) translateX(10%) rotate(90deg)', opacity: '0' }
				},
				'heartbeat': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.2)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '1' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out forwards',
				'fade-out': 'fade-out 1.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
				'floating-petal': 'floating-petal 15s ease-in-out infinite',
				'heartbeat': 'heartbeat 2s ease-in-out infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'blink': 'blink 1.5s ease-in-out infinite'
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'garamond': ['"EB Garamond"', 'serif'],
				'baskerville': ['"Libre Baskerville"', 'serif'],
				'tangerine': ['"Tangerine"', 'cursive']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'starry-night': "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1600')",
				'forest-mist': "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600')",
				'rose-garden': "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600')",
				'valentine-roses': "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1600')",
				'dark-castle': "url('https://images.unsplash.com/photo-1533686510-5d7ddfb1fe3a?q=80&w=1600')",
				'moonlit-lake': "url('https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=1600')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
