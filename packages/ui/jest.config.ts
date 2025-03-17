module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // Ensure this file exists
    moduleNameMapper: {
        "^@/components/(.*)$": "<rootDir>/src/components/$1"
    }
};
