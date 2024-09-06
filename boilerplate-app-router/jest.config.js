module.exports = {
    TestEnvironment: 'jsdom',
    testPathIgnorePattern: ['/node_modules/', '/.next'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?'],
    setupFileAfterEnv: ["<rootDir>/.jest/setup.ts"],
    modulePaths: ["<rootDir>/src/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$":["babel-jest", {presets:["next/babel"] }]
    }
}
