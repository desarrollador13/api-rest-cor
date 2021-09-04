module.exports = {
    roots: ['<rootDir>/unitTest'],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,js,jsx}'],
    coverageReporters: ["html", "text"] //lcov  text
  }

// module.exports = {
//     collectCoverage: true,
//     coverageReporters: ["lcov"],
//     testEnvironmet: "node",
//     //setupFilesAfterEnv: ["./test/setup.ts"],
//     //"<rootDir>/node_modules/",
//     modulePaths: [
//         "<rootDir>/src/",
//         "<rootDir>/test/",
//     ],
//     moduleNameMapper: {
//         "Business/(.*)":"<rootDir>/src/Business/$1"
//     },
//     testRegex:"(/test/(factory|unit).*|\\.(test|spec))\\.(ts|tsx|js)$",
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//     reporters:["default","./node_modules/jest-html-reporters"]
// }