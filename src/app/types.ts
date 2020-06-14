/* eslint-disable @typescript-eslint/triple-slash-reference, max-len, spaced-comment, typescript-sort-keys/interface */
/// <reference path="../@types/react-table.d.ts" />

export enum Alignment {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export enum ButtonSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export enum ButtonVariant {
    FILLED = 'FILLED',
    OUTLINE = 'OUTLINE',
    TEXT_ONLY = 'TEXT_ONLY',
}

export enum Currencies {
    EUR = 'EUR',
    GBP = 'GBP',
    KZT = 'KZT',
    RUB = 'RUB',
    USD = 'USD',
}

export enum Direction {
    LTR = 'LTR',
    RTL = 'RTL',
}

export enum Easing {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    EASE_IN_OUT = 'ease-in-out',
    EASE_OUT = 'ease-out',
    LINEAR = 'linear',
    NONE = 'none',
}

/* eslint-disable typescript-sort-keys/string-enum */
export enum Elevation {
    LEVEL_0 = 'LEVEL_0',
    LEVEL_1 = 'LEVEL_1',
    LEVEL_2 = 'LEVEL_2',
    LEVEL_3 = 'LEVEL_3',
    LEVEL_4 = 'LEVEL_4',
    LEVEL_6 = 'LEVEL_6',
    LEVEL_8 = 'LEVEL_8',
    LEVEL_12 = 'LEVEL_12',
    LEVEL_16 = 'LEVEL_16',
    LEVEL_24 = 'LEVEL_24',
}
/* eslint-enable typescript-sort-keys/string-enum */

// Since we don't want to include selection.json in our distribution bundle we came up with the following solution:
// If the contents of selection.json ever change just run `npm run build:iconTypes` and replace the enum with
// the output from the console.
export enum IconType {
    ARROWDOWN = 'ARROWDOWN',
    ARROWLEFT = 'ARROWLEFT',
    ARROWRIGHT = 'ARROWRIGHT',
    ARROWUP = 'ARROWUP',
    CABLE = 'CABLE',
    CALENDAR = 'CALENDAR',
    CALENDARACCEPT = 'CALENDARACCEPT',
    CALENDARDECLINE = 'CALENDARDECLINE',
    CARDS = 'CARDS',
    CHANGE = 'CHANGE',
    CHECK = 'CHECK',
    CHECKBOXCHECK = 'CHECKBOXCHECK',
    CHECKBOXMINUS1 = 'CHECKBOXMINUS1',
    CHEVRONDOWN = 'CHEVRONDOWN',
    CHEVRONFIRST = 'CHEVRONFIRST',
    CHEVRONLAST = 'CHEVRONLAST',
    CHEVRONLEFT = 'CHEVRONLEFT',
    CHEVRONRIGHT = 'CHEVRONRIGHT',
    CHEVRONUP = 'CHEVRONUP',
    CLOCK = 'CLOCK',
    CLUBPLACEHOLDER09 = 'CLUBPLACEHOLDER09',
    CLUBPLACEHOLDER1 = 'CLUBPLACEHOLDER1',
    CLUBPLACEHOLDER10 = 'CLUBPLACEHOLDER10',
    CLUBPLACEHOLDER11 = 'CLUBPLACEHOLDER11',
    CLUBPLACEHOLDER12 = 'CLUBPLACEHOLDER12',
    CLUBPLACEHOLDER13 = 'CLUBPLACEHOLDER13',
    CLUBPLACEHOLDER14 = 'CLUBPLACEHOLDER14',
    CLUBPLACEHOLDER15 = 'CLUBPLACEHOLDER15',
    CLUBPLACEHOLDER16 = 'CLUBPLACEHOLDER16',
    CLUBPLACEHOLDER2 = 'CLUBPLACEHOLDER2',
    CLUBPLACEHOLDER3 = 'CLUBPLACEHOLDER3',
    CLUBPLACEHOLDER4 = 'CLUBPLACEHOLDER4',
    CLUBPLACEHOLDER5 = 'CLUBPLACEHOLDER5',
    CLUBPLACEHOLDER6 = 'CLUBPLACEHOLDER6',
    CLUBPLACEHOLDER7 = 'CLUBPLACEHOLDER7',
    CLUBPLACEHOLDER8 = 'CLUBPLACEHOLDER8',
    CLUBUNKNOWN = 'CLUBUNKNOWN',
    COFFEE = 'COFFEE',
    COMMUNICATIONMAIL = 'COMMUNICATIONMAIL',
    COMMUNICATIONPHONE = 'COMMUNICATIONPHONE',
    CROSS = 'CROSS',
    DROPDOWN = 'DROPDOWN',
    DROPLEFT = 'DROPLEFT',
    DROPRIGHT = 'DROPRIGHT',
    DROPUP = 'DROPUP',
    EVENTGENERIC = 'EVENTGENERIC',
    EVENTREDCARD = 'EVENTREDCARD',
    EVENTYELLOWCARD = 'EVENTYELLOWCARD',
    FIELDSOCCER = 'FIELDSOCCER',
    FLAG = 'FLAG',
    GEAR = 'GEAR',
    GENDERFEMALE = 'GENDERFEMALE',
    GENDERMALE = 'GENDERMALE',
    GENDERMIXED = 'GENDERMIXED',
    HANGER = 'HANGER',
    HELPDESK = 'HELPDESK',
    INDICATOR = 'INDICATOR',
    LIGHTBULB = 'LIGHTBULB',
    LOCATION = 'LOCATION',
    LOCKOFF = 'LOCKOFF',
    LOCKON = 'LOCKON',
    LOGOUT = 'LOGOUT',
    MATCHCANCEL = 'MATCHCANCEL',
    MATCHCOMPA = 'MATCHCOMPA',
    MATCHCOMPB = 'MATCHCOMPB',
    MATCHCUP = 'MATCHCUP',
    MATCHDELETE = 'MATCHDELETE',
    MATCHOWN = 'MATCHOWN',
    MATCHRESUME = 'MATCHRESUME',
    MENU = 'MENU',
    MINUS = 'MINUS',
    MOVEALL = 'MOVEALL',
    MOVELEFTRIGHT = 'MOVELEFTRIGHT',
    MOVEUPDOWN = 'MOVEUPDOWN',
    NEWS = 'NEWS',
    OFFICIALSHIRT = 'OFFICIALSHIRT',
    OPTIONS = 'OPTIONS',
    PACKAGE = 'PACKAGE',
    PENCIL = 'PENCIL',
    PLACEHOLDER = 'PLACEHOLDER',
    PLANE = 'PLANE',
    PLUS = 'PLUS',
    POSTBOXIN = 'POSTBOXIN',
    POSTBOXOUT = 'POSTBOXOUT',
    PRODUCTADS = 'PRODUCTADS',
    PRODUCTAVG = 'PRODUCTAVG',
    PRODUCTBOEKHOUDING = 'PRODUCTBOEKHOUDING',
    PRODUCTCONTRIBUTIE = 'PRODUCTCONTRIBUTIE',
    PRODUCTDATASERVICE = 'PRODUCTDATASERVICE',
    PRODUCTDWF = 'PRODUCTDWF',
    PRODUCTMOBIEL = 'PRODUCTMOBIEL',
    PRODUCTOPLEIDINGEN = 'PRODUCTOPLEIDINGEN',
    PRODUCTTOERNOOIEN = 'PRODUCTTOERNOOIEN',
    PRODUCTTRAININGEN = 'PRODUCTTRAININGEN',
    PRODUCTTV = 'PRODUCTTV',
    PRODUCTVRIJWILLIGERS = 'PRODUCTVRIJWILLIGERS',
    PRODUCTWEBSITE = 'PRODUCTWEBSITE',
    QUESTION = 'QUESTION',
    ROUNDCHECK = 'ROUNDCHECK',
    ROUNDCROSS = 'ROUNDCROSS',
    ROUNDHELP = 'ROUNDHELP',
    ROUNDINFO = 'ROUNDINFO',
    ROUNDMINUS = 'ROUNDMINUS',
    ROUNDPLUS = 'ROUNDPLUS',
    SEARCH = 'SEARCH',
    SELECT = 'SELECT',
    SHARE = 'SHARE',
    SHIELD = 'SHIELD',
    SHIRT = 'SHIRT',
    SPARKLE = 'SPARKLE',
    SPORTATLETIEK = 'SPORTATLETIEK',
    SPORTBASKETBAL = 'SPORTBASKETBAL',
    SPORTHANDBAL = 'SPORTHANDBAL',
    SPORTHOCKEY = 'SPORTHOCKEY',
    SPORTHONKBAL = 'SPORTHONKBAL',
    SPORTJUDO = 'SPORTJUDO',
    SPORTKORFBAL = 'SPORTKORFBAL',
    SPORTKRACHT = 'SPORTKRACHT',
    SPORTREDDINGSBRIGADE = 'SPORTREDDINGSBRIGADE',
    SPORTVOETBAL = 'SPORTVOETBAL',
    SPORTVOLLEYBAL = 'SPORTVOLLEYBAL',
    SPORTZWEMMEN = 'SPORTZWEMMEN',
    STAREMPTY = 'STAREMPTY',
    STARFULL = 'STARFULL',
    STARHALF = 'STARHALF',
    STATUSALERT = 'STATUSALERT',
    STATUSCANCELED = 'STATUSCANCELED',
    STATUSCONCEPT = 'STATUSCONCEPT',
    STATUSCONCEPTALERT = 'STATUSCONCEPTALERT',
    STATUSDONE = 'STATUSDONE',
    STATUSERROR = 'STATUSERROR',
    STATUSSUSPENDED = 'STATUSSUSPENDED',
    SUBSTITUTE = 'SUBSTITUTE',
    SUPPORT = 'SUPPORT',
    TRASHCAN = 'TRASHCAN',
    TUTORIAL = 'TUTORIAL',
    TWITTER = 'TWITTER',
    USER = 'USER',
    USERADD = 'USERADD',
    USERDOUBLE = 'USERDOUBLE',
    USERREMOVE = 'USERREMOVE',
    VISIBILITYOFF = 'VISIBILITYOFF',
    VISIBILITYON = 'VISIBILITYON',
    WORLD = 'WORLD',
}

export enum IconSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XSMALL = 'XSMALL',
}

export enum InputType {
    EMAIL = 'email',
    NUMBER = 'number',
    PASSWORD = 'password',
    TEL = 'tel',
    TEXT = 'text',
}

export enum InputVariant {
    COMPACT = 'COMPACT',
    OUTLINE = 'OUTLINE',
}

export enum Locale {
    BE = 'BE',
    DE = 'DE',
    EN = 'EN',
    GB = 'GB',
    KZ = 'KZ',
    NL = 'NL',
    RU = 'RU',
    UK = 'UK',
    US = 'US',
}

export enum Placement {
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
}

export enum Position {
    BOTTOM_CENTER = 'BOTTOM_CENTER',
    BOTTOM_LEFT = 'BOTTOM_LEFT',
    BOTTOM_RIGHT = 'BOTTOM_RIGHT',
    MIDDLE_CENTER = 'MIDDLE_CENTER',
    MIDDLE_LEFT = 'MIDDLE_LEFT',
    MIDDLE_RIGHT = 'MIDDLE_RIGHT',
    TOP_CENTER = 'TOP_CENTER',
    TOP_LEFT = 'TOP_LEFT',
    TOP_RIGHT = 'TOP_RIGHT',
}

export enum SidePanelSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export enum Size {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
}

export enum Status {
    ALERT = 'ALERT',
    DEFAULT = 'DEFAULT',
    DISABLED = 'DISABLED',
    INVALID = 'INVALID',
    NONE = 'NONE',
    VALID = 'VALID',
}

export enum StatusIndicatorSize {
    LARGE = 'LARGE',
    SMALL = 'SMALL',
}

export interface Theme {
    shades: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
        seven: string;
        eight: string;
        nine: string;
    };
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    colorAlert: string;
    colorDisabled: string;
    colorInvalid: string;
    colorValid: string;
    fontFamilyPrimary: string;
    fontFamilySecondary: string;
    colorTextContrast: {
        primary: string;
    };
    colorText: {
        primary: string;
        secondary: string;
    };
    colorTextBody: {
        primary: string;
        secondary: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    button: {
        filled: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                loader: string;
                loaderInverted: string;
                primary: string;
            };
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            };
        };
        outline: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                loader: string;
                loaderInverted: string;
                primary: string;
            };
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            };
        };
        textOnly: {
            disabled: string;
            disabledInverted: string;
            hover: string;
            hoverInverted: string;
            inverted: string;
            loader: string;
            loaderInverted: string;
            primary: string;
        };
    };
    card: {
        backgroundColor: string;
    };
    datePicker: {
        backgroundColor: string;
        color: string;
        day: {
            accent: string;
            backgroundColor: string;
            color: string;
            disabled: {
                backgroundColor: string;
                color: string;
            };
            hover: {
                accent: string;
                backgroundColor: string;
                color: string;
            };
            selected: {
                backgroundColor: string;
                color: string;
            };
            selectionLimit: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    header: {
        backgroundColor: {
            primary: string;
            secondary: string;
        };
    };
    hover: {
        backgroundColor: string;
    };
    loader: {
        primary: string;
        secondary: string;
    };
    table: {
        footer: {
            backgroundColor: string;
        };
        row: {
            backgroundColorEven: string;
            backgroundColorOdd: string;
        };
    };
    textStyles: {
        body1: ThemeTextStyle;
        body2: ThemeTextStyle;
        buttonLarge: ThemeTextStyle;
        buttonMedium: ThemeTextStyle;
        buttonSmall: ThemeTextStyle;
        caption: ThemeTextStyle;
        h1: ThemeTextStyle;
        h2: ThemeTextStyle;
        h3: ThemeTextStyle;
    };
    spacingValue: number;
    availableTextStyles: () => ThemeTextStylesMap;
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
    textStyling: (textStyleSelector: keyof Theme['textStyles']) => string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ThemeTextStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

export type ThemeTextStylesMap = {
    [TextStyle in keyof Theme['textStyles']]: TextStyle;
};
