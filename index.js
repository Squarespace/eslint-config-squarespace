module.exports = {
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
    'requireConfigFile': false
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'rules': {
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'object-curly-spacing': ['warn', 'always'],
    'wrap-iife': ['error', 'any'],
    'camelcase': 'error',
    'comma-dangle': 'off',
    'comma-spacing': 'warn',
    'complexity': ['warn', { 'max': 8 }],
    'comma-style': ['error', 'last'],
    'consistent-return': 'off',
    'curly': 'error',
    'dot-notation': ['error', { 'allowKeywords': true }],
    'eol-last': 'off',
    'eqeqeq': 'error',
    'indent': ['warn', 2],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'warn',
    'max-depth': ['warn', { 'max': 4 }],
    'max-len': ['warn', { 'code': 120, 'tabWidth': 2 }],
    'max-params': ['warn', { 'max': 4 }],
    'new-cap': 'off',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'off',
    'no-else-return': 'warn',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'warn',
    'no-extra-parens': 'off',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-redeclare': 'off',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'warn',
    'no-unused-vars': ['warn', { 'args': 'none' }],
    'no-use-before-define': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-linebreak': ['error', 'after'],
    'quote-props': 'off',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'semi': ['warn', 'always'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'strict': 'off',
    'yoda': ['error', 'never', { 'exceptRange': true }]
  }
};