/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      // Disable diagnostics to bypass pre-existing TS errors in
      // downstream modules (EventBroadcaster, ZaloLoginHelper, etc.)
      diagnostics: false,
    }],
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.test.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(uuid|@socket.io|socket.io)/)',
  ],
};
