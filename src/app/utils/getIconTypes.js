import iconFontData from '../styles/fonts/iconfont/selection';

const ICON_TYPES = {};

iconFontData.icons.forEach(({ properties: { name } }) => {
    if (name.includes('-')) {
        ICON_TYPES[name.replace(/-/g, '_').toUpperCase()] = name;
    } else {
        ICON_TYPES[name.toUpperCase()] = name;
    }
});

/* eslint-disable-next-line */
console.log(JSON.stringify(ICON_TYPES));
