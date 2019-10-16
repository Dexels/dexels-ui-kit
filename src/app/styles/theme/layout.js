import theme from 'styled-theming';

export const getAvailableThemeLayouts = () => (
    ['basic', 'compact']
);

export const spacingUnit = theme('layout', {
    basic: '8px',
    compact: '4px',
});
