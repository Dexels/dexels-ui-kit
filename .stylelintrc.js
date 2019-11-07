module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
        'stylelint-config-concentric-order',
    ],
    rules: {
        indentation: 4,
        'length-zero-no-unit': true,
    },
};
