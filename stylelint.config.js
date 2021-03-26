module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'prettier/prettier': true,
    'declaration-colon-newline-after': null,
  },
};
