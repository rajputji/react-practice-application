module.exports = {
  // ...existing code...
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    // ...existing code...
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
  // ...existing code...
};