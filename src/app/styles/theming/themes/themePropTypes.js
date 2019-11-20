import PropTypes from 'prop-types';

const buttonObjectShape = PropTypes.shape({
    backgroundColor: PropTypes.shape({
        disabled: PropTypes.string.isRequired,
        hover: PropTypes.string.isRequired,
        hoverInverted: PropTypes.string.isRequired,
        inverted: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
    }),
    color: PropTypes.shape({
        disabled: PropTypes.string.isRequired,
        hover: PropTypes.string.isRequired,
        hoverInverted: PropTypes.string.isRequired,
        inverted: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
    }),
});

export const textStylePropTypes = PropTypes.shape({
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
});

/* eslint-disable sort-keys */
export const themePropTypes = PropTypes.shape({
    shades: PropTypes.shape({
        one: PropTypes.string.isRequired,
        two: PropTypes.string.isRequired,
        three: PropTypes.string.isRequired,
        four: PropTypes.string.isRequired,
        five: PropTypes.string.isRequired,
        six: PropTypes.string.isRequired,
        seven: PropTypes.string.isRequired,
        eight: PropTypes.string.isRequired,
        nine: PropTypes.string.isRequired,
    }).isRequired,
    colorPrimary: PropTypes.string.isRequired,
    colorSecondary: PropTypes.string.isRequired,
    colorTertiary: PropTypes.string.isRequired,
    colorAlert: PropTypes.string.isRequired,
    colorInvalid: PropTypes.string.isRequired,
    colorValid: PropTypes.string.isRequired,
    colorText: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    colorTextContrast: PropTypes.shape({
        primary: PropTypes.string.isRequired,
    }).isRequired,
    colorTextBody: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    fontFamilyPrimary: PropTypes.string.isRequired,
    fontFamilySecondary: PropTypes.string.isRequired,
    background: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
        tertiary: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
        filled: buttonObjectShape,
        outline: buttonObjectShape,
        textOnly: PropTypes.shape({
            disabled: PropTypes.string.isRequired,
            disabledInverted: PropTypes.string.isRequired,
            hover: PropTypes.string.isRequired,
            hoverInverted: PropTypes.string.isRequired,
            inverted: PropTypes.string.isRequired,
            primary: PropTypes.string.isRequired,
        }),
    }).isRequired,
    card: PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
    }).isRequired,
    header: PropTypes.shape({
        backgroundColor: PropTypes.shape({
            primary: PropTypes.string.isRequired,
            secondary: PropTypes.string.isRequired,
        }),
    }).isRequired,
    table: PropTypes.shape({
        row: PropTypes.shape({
            backgroundColor: PropTypes.string.isRequired,
            backgroundColorAlt: PropTypes.string.isRequired,
        }),
    }).isRequired,
    spacingValue: PropTypes.number.isRequired,
    textStyles: PropTypes.shape({
        body1: textStylePropTypes.isRequired,
        body2: textStylePropTypes.isRequired,
        buttonLarge: textStylePropTypes.isRequired,
        buttonMedium: textStylePropTypes.isRequired,
        buttonSmall: textStylePropTypes.isRequired,
        caption: textStylePropTypes.isRequired,
        h1: textStylePropTypes.isRequired,
        h2: textStylePropTypes.isRequired,
        h3: textStylePropTypes.isRequired,
    }).isRequired,
    availableTextStyles: PropTypes.func.isRequired,
    spacing: PropTypes.func.isRequired,
    textStyling: PropTypes.func.isRequired,
});
