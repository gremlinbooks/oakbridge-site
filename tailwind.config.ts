import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#161310',
        panel: '#1e1a15',
        panelAlt: '#241d15',
        ink: '#f2ece1',
        muted: '#a89f92',
        mutedDark: '#8a8175',
        line: 'rgba(242,236,225,0.12)',
        rust: '#c4501f',
        rustLight: '#d9642f',
        amber: '#d97a3f'
      },
      fontFamily: {
        display: ['var(--font-anton)', 'sans-serif'],
        body: ['var(--font-plex-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
