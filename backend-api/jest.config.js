module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["dist", ".http.test.ts"],
  moduleNameMapper: {
    '@oktara-logistics-internal/(.*)': '<rootDir>/src/internal/$1',
    '@oktara-logistics-clients/(.*)': '<rootDir>/src/clients/$1',
    '@oktara-logistics-server/(.*)': '<rootDir>/src/transport/server/$1',
    '@oktara-logistics-utils/(.*)': '<rootDir>/src/utils/$1',
    '@oktara-logistics-database/(.*)': '<rootDir>/src/database/$1',
  },
  resetMocks: true,
  restoreMocks: true,
  globalSetup: "<rootDir>/jest.global.setup.ts",
  globalTeardown: "<rootDir>/jest.global.teardown.ts",
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  }
};
