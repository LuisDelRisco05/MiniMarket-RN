module.exports = {
    preset: 'react-native',
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      },
      transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|@react-navigation)",
        "node_modules/(?!(react-native|@react-native|@react-navigation|@unimodules))",
        "node_modules/@react-native/polyfills/"
      ],
};
  