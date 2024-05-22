module.exports = {
  preset: "react-native",
  testEnvironment: "jsdom", // jsdom 환경을 명시적으로 설정
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-navigation|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-native-.*|@react-native-picker|@react-native-picker/.*|@react-navigation/.*|@unimodules|unimodules|sentry-expo|native-base|@sentry|jest-?expo)/",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};
