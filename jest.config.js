module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: './test/jest/setup.js',
  testMatch: [
    '**/*.(spec).+(ts|tsx)'
  ]
}
