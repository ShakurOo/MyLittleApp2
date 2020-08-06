module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: './test/jest/setup.js',
  testMatch: [
    '**/*.(spec).+(ts|tsx|js)'
  ]
}
