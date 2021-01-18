module.exports = {
    verbose: true,
    roots: [
      '<rootDir>/src',
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/__tests__/|(\\.|/)(test|spec))\\.tsx?$',
    setupFilesAfterEnv: [
      '<rootDir>/src/app/__tests__/setupEnzyme.ts',
    ],
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json',
        diagnostics: {
          warnOnly: true,
        },
      },
    },
    snapshotSerializers: [
      'enzyme-to-json/serializer',
    ],
    testMatch: null,
  }
