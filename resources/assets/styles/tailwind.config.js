module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
  ],
    whitelist: require('purgecss-with-wordpress').whitelist,
    whitelistPatterns: require('purgecss-with-wordpress').whitelistPatterns,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
