module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(png|gif)$': '<rootDir>/test/jest/fileMock.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest/setup.ts'],
  testRegex: '((\\.|/)(spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
