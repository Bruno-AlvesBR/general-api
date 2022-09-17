module.exports = {
  bail: true,
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/domain/**/useCases/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['<rootDir>/test.ts'],
};
