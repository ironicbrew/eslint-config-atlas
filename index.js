module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": ["airbnb",
      "eslint:recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended"],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "ecmaVersion": 2017,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "react-hooks",
      "import"
  ],
  "rules": {
      // I prefer not to use these currently
      "no-console": "off",
      "react/jsx-filename-extension": "off",
      "react/destructuring-assignment": "off",
      "react/prop-types": "off",
      "react/button-has-type": "off",
      "react/no-array-index-key": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-curly-newline": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      
      // I really want to get rid of all any calls, we really should implement this down the road
      "@typescript-eslint/no-explicit-any": "off",

      // I'm not sure the benefit of this one. Things are fine to work on without but I'm also a fan of explicit typing
      "@typescript-eslint/explicit-function-return-type": "off",

      // Huge fan of errors only, warnings I procrastinate on and polute the terminal
      "@typescript-eslint/no-unused-vars": "error",

      // I use empty functions as placeholders a bunch
      "@typescript-eslint/no-empty-function": "off",

      // We switch often from PC to mac, having this on would be unmaintainable
      "linebreak-style": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-lone-blocks": "error",
      "use-isnan": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/alt-text": "error",

      // Named function callbacks give better stack traces and communicate their role better
      "prefer-arrow-callback": "off",
      // Double equals used judiciously makes for tidier code
      "eqeqeq": "off",

      // Sometimes prettier and this check conflict, better to just rely on prettier
      "react/jsx-indent": "off",

      /*
      TODO: The rest of these will gradually be turned on/evaluated as I have more time
      */
      "no-underscore-dangle": "off",
      "quotes": "off",
      "comma-dangle": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "object-curly-newline": "off",
      "max-len": "off",
      "import/order": "off",
      "import/no-extraneous-dependencies": "off",
      "padded-blocks": "off",
      "object-curly-spacing": "off",
      "no-trailing-spaces": "off",
      "semi": "off",
      "arrow-parens": "off",
      "no-case-declarations": "off",
      "no-else-return": "off",
      "no-useless-return": "off",
      "no-use-before-define": "off",
      "block-spacing": "off",
      "semi-spacing": "off",
      "indent": "off",
      "no-multi-spaces": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "no-param-reassign": "off",
      "arrow-body-style": "off",
      "spaced-comment": "off",
      "no-unused-expressions": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "no-shadow": "off",
      "implicit-arrow-linebreak": "off",
      "quote-props": "off",
      "function-paren-newline": "off",
      "global-require": "off",
      "array-bracket-spacing": "off",
      "operator-linebreak": "off",
      "no-array-index-key": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "eol-last": "off",
      "prefer-const": "off",
      "consistent-return": "off",
      "object-shorthand": "off",
      "prefer-template": "off",
      "no-plusplus": "off",
      "operator-assignment": "off",
      "prefer-promise-reject-errors": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "no-restricted-globals": "off",
      "no-undef": "off",
      "no-unneeded-ternary": "off",
      "no-var": "off",
      "vars-on-top": "off",
      "key-spacing": "off",
      "import/newline-after-import": "off",
      "jsx-a11y/no-autofocus": "off",
      "no-confusing-arrow": "off",
      "default-case": "off",
      "no-extra-semi": "off",
      "import/prefer-default-export": "off",
      "comma-spacing": "off",
      "jsx-quotes": "off",
      "no-await-in-loop": "off",
      "prefer-destructuring": "off",
      "no-multiple-empty-lines": "off",
      "space-before-function-paren": "off",
      "no-restricted-syntax": "off",
      "no-tabs": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-nested-ternary": "off",
      "brace-style": "off",
      "keyword-spacing": "off",
      "no-extra-boolean-cast": "off",
      "template-curly-spacing": "off",
      "func-names": "off",
      "no-mixed-operators": "off",
      "space-before-blocks": "off",
      "jsx-a11y/label-has-associated-control": "off"
  }
}
