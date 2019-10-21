import mapArrayToObject from '../../utils/mapArrayToObject';
import styledTheming from 'styled-theming';

export const themeLayouts = mapArrayToObject([
    'basic',
    'compact',
]);

export const getAvailableThemeLayouts = () => (
    Object.values(themeLayouts)
);

export const borderRadius = styledTheming('layout', {
    [themeLayouts.basic]: '8px',
    [themeLayouts.compact]: '6px',
});

export const defaultIconSize = styledTheming('layout', {
    [themeLayouts.basic]: '24px',
    [themeLayouts.compact]: '22px',
});

export const spacingUnit = styledTheming('layout', {
    [themeLayouts.basic]: '8px',
    [themeLayouts.compact]: '4px',
});
