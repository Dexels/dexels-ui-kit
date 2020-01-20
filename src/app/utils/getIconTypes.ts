import iconFontData from '../styles/fonts/iconfont/selection.json';

const ICON_TYPES: { [key: string]: string } = {};

iconFontData.icons.forEach(({ properties: { name } }) => {
    ICON_TYPES[name.toUpperCase()] = name;
});

/* eslint-disable-next-line */
console.log(JSON.stringify(ICON_TYPES, Object.keys(ICON_TYPES).sort()));
