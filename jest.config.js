module.exports = {
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/*.spec.ts"
    ],
    "moduleNameMapper": {
      "^~/(.+)": "<rootDir>/src/$1"
    }
};