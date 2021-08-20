module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
