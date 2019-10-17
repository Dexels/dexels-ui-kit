import mapArrayToObject from '../../utils/mapArrayToObject';
import theme from 'styled-theming';

export const themeLayouts = mapArrayToObject([
    'basic',
    'compact',
]);

export const getAvailableThemeLayouts = () => (
    Object.values(themeLayouts)
);

export const spacingUnit = theme('layout', {
    [themeLayouts.basic]: '8px',
    [themeLayouts.compact]: '4px',
});
