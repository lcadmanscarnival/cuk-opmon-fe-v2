export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mock__/styleMock.js",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mock__/fileMock.js",
    "\\.svg\\?react$": "<rootDir>/__mock__/svgReactMock.jsx",
  },
  collectCoverage: true,
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
