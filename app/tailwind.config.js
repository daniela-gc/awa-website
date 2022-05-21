/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  mode: 'jit',
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'content/**/*.md',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Fira Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
