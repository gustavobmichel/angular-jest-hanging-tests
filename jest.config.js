var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/jest-preset-angular/build/setup-jest.js",
  ],
  testMatch: ["**/*.spec.ts"],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsConfig: "<rootDir>/tsconfig.spec.json",
      isolatedModules: true,
    },
  },
};
