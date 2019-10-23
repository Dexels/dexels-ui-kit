// This is how the colors are being called in the design:
// black = #000000
// blue10 = #DFF3FE
// blue25 = #BFE7FE
// blue50 = #80CFFE
// blue100 = #009FFD
// purple50 = #9BA1C9
// purple100 = #3D4A9A
// green = #2DD67B
// orange = #EB6500
// red = #F94E4E
// sl2 = #FAFBFC
// sl5 = #F2F4F6
// sl10 = #E5E9ED
// sl25 = #BFC8D3
// sl50 = #7F91A8
// sl75 = #3F5A7C
// sl100 = #002451
// white = #FFFFFF

/* eslint-disable sort-keys */
const themeBasic = {
    colorPrimary: {
        dark: '#3D4A9A',
        main: '#9BA1C9',
    },
    colorSecondary: {
        dark: '#009FFD',
        main: '#80CFFE',
        light: '#BFE7FE',
    },
    colorDisabled: {
        main: '#E5E9ED',
    },
    colorError: {
        main: '#F94E4E',
    },
    colorValid: {
        main: '#2DD67B',
    },
    colorWarning: {
        main: '#EB6500',
    },
    colorDark: {
        dark: '#000000',
        main: '#002451',
        light: '#3F5A7C',
    },
    colorMedium: {
        dark: '#7F91A8',
        main: '#BFC8D3',
        light: '#E5E9ED', // @TODO discuss this with Marrick since this is the same color as the colorDisabled.main
    },
    colorLight: {
        dark: '#F2F4F6',
        main: '#FAFBFC',
        light: '#FFFFFF',
    },
    spacingValue: '8px',
};

export default themeBasic;
