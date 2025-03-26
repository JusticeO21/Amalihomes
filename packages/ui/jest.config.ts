import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
  },
};

export default config;
