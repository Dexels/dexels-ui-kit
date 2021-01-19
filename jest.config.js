module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/__tests__/|(\\.|/)(test|spec))\\.tsx?$',
    setupFilesAfterEnv: ['<rootDir>/src/app/__tests__/setupEnzyme.ts'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
            diagnostics: {
                warnOnly: true,
            },
        },
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/app/components/**/**/*.tsx",
        "<rootDir>/src/app/utils/**/*.ts",
        "!<rootDir>/src/app/components/**/**/*.stories.tsx"
    ],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: null,
};
