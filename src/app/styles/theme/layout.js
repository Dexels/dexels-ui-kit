import theme from 'styled-theming';

export const getAvailableThemeLayouts = () => (
    ['basic', 'compact']
);

export const spacingUnit = theme('layout', {
    basic: '8px',
    compact: '4px',
});

export const buttonBorderRadius = theme('layout', {
    basic: '50px',
    compact: '4px',
});

export const buttonHeight = theme.variants('layout', 'variant', {
    LARGE: {
        basic: '48px',
        compact: '46px',
    },
    MEDIUM: {
        basic: '40px',
        compact: '38px',
    },
    SMALL: {
        basic: '32px',
        compact: '30px',
    },
});

export const buttonIconFontSize = theme.variants('layout', 'size', {
    LARGE: {
        basic: '20px',
        compact: '18px',
    },
    SMALL: {
        basic: '14px',
        compact: '12px',
    },
});
