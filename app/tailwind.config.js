/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  mode: 'jit',
  // future: {
  //   purgeLayersByDefault: true,
  // },
  purge: false,
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Fira Sans', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1530px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}],
};
