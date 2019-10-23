import basicTheme from './basic';
import createDuiTheme from './createDuiTheme';
import { green } from '../colors/colors';

const themeLight = createDuiTheme(basicTheme, {
    colorDark: {
        light: green,
    },
});

export default themeLight;
