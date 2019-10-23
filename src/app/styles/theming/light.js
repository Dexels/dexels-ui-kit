import basicTheme from './basic';
import createDuiTheme from './createDuiTheme';

const themeLight = createDuiTheme(basicTheme, {
    colorDark: {
        light: 'green',
    },
});

export default themeLight;
