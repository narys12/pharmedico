module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/37476/medical-doctor-megaphone-clipart-md.png')",
      }),
      colors: {
				"smoke-900": "rgba(0, 0, 0, 0.9)",
				"smoke-800": "rgba(0, 0, 0, 0.75)",
				"smoke-600": "rgba(0, 0, 0, 0.6)",
				smoke: "rgba(0, 0, 0, 0.5)",
				"smoke-400": "rgba(0, 0, 0, 0.4)",
				"smoke-200": "rgba(0, 0, 0, 0.25)",
				"smoke-100": "rgba(0, 0, 0, 0.1)",
			},
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}