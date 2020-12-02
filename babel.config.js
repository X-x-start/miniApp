module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['module:zoom-babel-plugin-separate-import', {
      libraryName: 'zoom-intro',
      libraryDirectory: 'dist/packages',
      style: 'scss',
    }],
  ],
};
