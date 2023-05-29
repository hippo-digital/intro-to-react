module.exports = {
    testEnvironment: 'jsdom',
    testMatch: [ "**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
}
