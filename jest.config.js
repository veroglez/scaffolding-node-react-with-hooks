module.exports = {
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/index.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'build/coverage',
  coverageReporters: [
    'json',
    'text',
    'html',
  ],
  testPathIgnorePatterns: [
    '/node_modules',
    '/dist',
  ],
  silent: false,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
};
