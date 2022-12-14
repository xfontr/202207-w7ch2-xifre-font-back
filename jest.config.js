/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/index.ts",
    "!src/server/index.ts",
    "!src/server/startServer.ts",
    "!src/loadApp.ts",
    "!src/loadEnvironment.ts",
    "!src/server/routers/robotsRouter.ts",
  ],
};
