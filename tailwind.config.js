/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        line: '#e5e5e5',
        mute: '#111111',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(4rem, 14vw, 14rem)',
        'fluid-h1': 'clamp(2.75rem, 8vw, 7rem)',
        'fluid-h2': 'clamp(2.25rem, 5vw, 4rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        brutal: '-0.055em',
      },
    },
  },
  plugins: [],
}
