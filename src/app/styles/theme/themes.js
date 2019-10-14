import {
    black,
    blue100,
    purple100,
    sl10,
    sl100,
    sl2,
    sl50,
    white,
} from '../colors/colors';

/* BASIC APP THEME */
const basic = {
    button: {
        backgroundColor: purple100,
        backgroundColorDisabled: sl10,
        backgroundColorHover: blue100,
        borderColor: purple100,
        borderColorDisabled: sl10,
        borderColorHover: blue100,
        color: white,
        colorDisabled: sl10,
        colorHover: white,
        filled: {
            backgroundColor: purple100,
            backgroundColorDisabled: sl10,
            backgroundColorHover: blue100,
            borderColor: purple100,
            borderColorDisabled: sl10,
            borderColorHover: blue100,
            color: white,
            colorDisabled: white,
            colorHover: white,
        },
        outline: {
            borderColor: purple100,
            borderColorDisabled: sl10,
            borderColorHover: blue100,
            color: purple100,
            colorDisabled: sl10,
            colorHover: blue100,
        },
        textonly: {
            color: purple100,
            colorDisabled: sl10,
            colorHover: blue100,
        },
        variant: {
            large: {
                borderRadius: '24px',
                height: '48px',
            },
            medium: {
                borderRadius: '20px',
                height: '40px',
            },
            small: {
                borderRadius: '16px',
                height: '32px',
            },
        },
    },
    root: {
        backgroundColor: 'grey',
        color: '#fff',
    },
};

/* DARK THEME */
const dark = {
    button: {
        backgroundColor: black,
        backgroundColorDisabled: sl10,
        backgroundColorHover: sl2,
        borderColor: purple100,
        borderColorDisabled: sl10,
        borderColorHover: blue100,
        color: white,
        colorDisabled: sl10,
        colorHover: white,
        filled: {
            backgroundColor: black,
            backgroundColorDisabled: sl10,
            backgroundColorHover: sl2,
            borderColor: purple100,
            borderColorDisabled: sl10,
            borderColorHover: blue100,
            color: white,
            colorDisabled: sl10,
            colorHover: white,
        },
        outline: {
            borderColor: black,
            borderColorDisabled: sl10,
            borderColorHover: sl50,
            color: white,
            colorDisabled: sl10,
            colorHover: sl50,
        },
        textonly: {
            color: white,
            colorDisabled: sl10,
            colorHover: sl50,
        },
        variant: {
            large: {
                borderRadius: '24px',
                height: '48px',
            },
            medium: {
                borderRadius: '20px',
                height: '40px',
            },
            small: {
                borderRadius: '16px',
                height: '32px',
            },
        },
    },
    root: {
        backgroundColor: '#222',
        color: '#fff',
    },
};

/* LIGHT THEME */
const light = {
    button: {
        backgroundColor: sl2,
        backgroundColorDisabled: sl10,
        backgroundColorHover: black,
        borderColor: sl100,
        borderColorDisabled: sl10,
        borderColorHover: blue100,
        color: black,
        colorDisabled: sl10,
        colorHover: black,
        filled: {
            backgroundColor: sl2,
            backgroundColorDisabled: sl10,
            backgroundColorHover: black,
            borderColor: sl100,
            borderColorDisabled: sl10,
            borderColorHover: blue100,
            color: black,
            colorDisabled: sl10,
            colorHover: black,
        },
        outline: {
            borderColor: black,
            borderColorDisabled: sl10,
            borderColorHover: sl50,
            color: black,
            colorDisabled: sl10,
            colorHover: sl50,
        },
        textonly: {
            color: black,
            colorDisabled: sl10,
            colorHover: sl50,
        },
        variant: {
            large: {
                borderRadius: '24px',
                height: '48px',
            },
            medium: {
                borderRadius: '20px',
                height: '40px',
            },
            small: {
                borderRadius: '16px',
                height: '32px',
            },
        },
    },
    root: {
        backgroundColor: '#fafafa',
        color: '#000',
    },
};

/* OVERRIDABLE THEME */
const customTheme = {
    ...basic,
    button: {
        ...basic.button,
        color: 'yellow',
    },
};

export {
    basic,
    dark,
    light,
};
