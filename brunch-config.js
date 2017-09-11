module.exports = {
  files: {
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },
    digest: {
      pattern: /DIGEST\(\/?([^\)]*)\)/g,
      discardNonFilenamePatternParts: true,
      referenceFiles: /\.html$/,
      precision: 8,
      alwaysRun: false,
      environments: ['production'],
      prependHost: null,
      manifest: '',
      infixes: []
    }
  }
};
