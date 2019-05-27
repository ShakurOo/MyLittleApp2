module.exports = {
  setupTestFrameworkScriptFile: './test/jest/setup.js',
  testMatch: [
    '**/src/**/?(*.)(spec|test).js?(x)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/jest/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@vp).*/'
  ]
}
