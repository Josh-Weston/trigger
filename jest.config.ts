import type { Config } from 'jest';

const config: Config = {
    // Use ts-jest to compile TS files on the fly
    preset: "ts-jest",

    // Use jsdom to simulate the browser environment (DOM, window, document)
    testEnvironment: "jsdom",

    // Reset mocks between tests to prevent pollution
    clearMocks: true,
};

export default config;