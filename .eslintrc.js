module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  // Let eslint-plugin-react automatically detect the installed React version
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/function-component-definition": 0,
    "import/extensions": 0,
    // Allow either quote style by disabling enforcement entirely
    quotes: 0,
    // Treat stylistic whitespace/linebreak rules as non-blocking
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "no-confusing-arrow": 0,
    "react/jsx-curly-newline": 0,
    // React 17+ has the new JSX transform so importing React is not required.
    // Disable the rule that enforces "React in scope" for JSX files.
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "import/prefer-default-export": 0,
    "max-len": [2, 550],
    "comma-dangle": ["error", "always-multiline"],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
      },
    ],
    "object-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
  },
};
