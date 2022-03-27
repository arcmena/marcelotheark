const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@contexts/(.*)$': '<rootDir>/contexts/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@helpers/(.*)$': '<rootDir>/helpers/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@graphql/(.*)$': '<rootDir>/graphql/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@localTypes/(.*)$': '<rootDir>/types/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
