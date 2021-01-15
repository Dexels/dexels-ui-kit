module.exports = {
    verbose: true,
    roots: ["<rootDir>/src"],
    preset: 'ts-jest',
    testEnvironment: 'node',

    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // TypeScript support
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },

    // DOM cleanup and extended assertions
    setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],

    globals: {
        "ts-jest": {
            tsConfigFile: "./tsconfig.json",
            diagnostics: {
                warnOnly: true
            }
        }
    },

    // Setup Enzyme
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]

  };
