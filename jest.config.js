
//const { pathsToModuleNameMapper } = require('ts-jest/utils');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: "src/__tests__/.*\\.(js|jsx|tsx)$",
  testPathIgnorePatterns: [
    '/node_modules/',
    '.history'
],
moduleNameMapper: {
  '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':'<rootDir>/src/__mocks__/fileMock.js',
  '\\.(css|less)$': '<rootDir>/src/__mocks__/fileMock.js',
},
  setupFilesAfterEnv: [
    "<rootDir>/setuptests.ts"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};