import iconFontData from '../../../styles/fonts/selection';

export const ICON_TYPES = {};

iconFontData.icons.forEach(({ properties: { name } }) => {
    if (name.includes('-')) {
        ICON_TYPES[name.replace(/-/g, '_').toUpperCase()] = name;
    } else {
        ICON_TYPES[name.toUpperCase()] = name;
    }
});

export default ICON_TYPES;
