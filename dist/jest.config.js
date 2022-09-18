"use strict";
module.exports = {
    bail: true,
    verbose: true,
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/domain/**/useCases/*.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
};
