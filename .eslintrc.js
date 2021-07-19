module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    eqeqeq: 1,
    curly: 1,
    "no-unused-vars": 1,
    "no-unused-expressions": 1,
    "prettier/prettier": [
      1,
      {
        endOfLine: "auto",
      },
    ],
  },
};
