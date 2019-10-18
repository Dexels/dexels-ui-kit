import mapArrayToObject from '../../utils/mapArrayToObject';
import theme from 'styled-theming';

export const themeLayouts = mapArrayToObject([
    'basic',
    'compact',
]);

export const getAvailableThemeLayouts = () => (
    Object.values(themeLayouts)
);

export const borderRadius = theme('layout', {
    [themeLayouts.basic]: '8px',
    [themeLayouts.compact]: '6px',
});

export const defaultIconSize = theme('layout', {
    [themeLayouts.basic]: '24px',
    [themeLayouts.compact]: '22px',
});

export const spacingUnit = theme('layout', {
    [themeLayouts.basic]: '8px',
    [themeLayouts.compact]: '4px',
});
