/* eslint-disable @typescript-eslint/triple-slash-reference, max-len, spaced-comment, typescript-sort-keys/interface */
/// <reference path="../@types/react-table.d.ts" />
export enum AdornmentPosition {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

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

export enum EditableDataComponent {
    CHECKBOX = 'Checkbox',
    DATEPICKER = 'DatePicker',
    DROPDOWN = 'Dropdown',
    DROPDOWNMULTISELECT = 'DropdownMultiSelect',
    DROPDOWNSELECT = 'DropdownSelect',
    INPUT = 'Input',
    INPUTCURRENCY = 'InputCurrency',
    INPUTNUMBER = 'InputNumber',
    SCOREPICKER = 'ScorePicker',
    TEXTAREA = 'Textarea',
    TIMEPICKER = 'TimePicker',
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
    ADJUSTMENT = 'ADJUSTMENT',
    ADVERTISEMENT = 'ADVERTISEMENT',
    ARROWDOWN = 'ARROWDOWN',
    ARROWLEFT = 'ARROWLEFT',
    ARROWRIGHT = 'ARROWRIGHT',
    ARROWUP = 'ARROWUP',
    AWARD = 'AWARD',
    BEACH = 'BEACH',
    BENCH = 'BENCH',
    CABLE = 'CABLE',
    CALENDAR = 'CALENDAR',
    CALENDARACCEPT = 'CALENDARACCEPT',
    CALENDARDECLINE = 'CALENDARDECLINE',
    CARDS = 'CARDS',
    CHANGE = 'CHANGE',
    CHART = 'CHART',
    CHECK = 'CHECK',
    CHECKBOXCHECK = 'CHECKBOXCHECK',
    CHECKBOXMINUS1 = 'CHECKBOXMINUS1',
    CHEVRONDOWN = 'CHEVRONDOWN',
    CHEVRONFIRST = 'CHEVRONFIRST',
    CHEVRONLAST = 'CHEVRONLAST',
    CHEVRONLEFT = 'CHEVRONLEFT',
    CHEVRONRIGHT = 'CHEVRONRIGHT',
    CHEVRONUP = 'CHEVRONUP',
    CLIPBOARDCHECK = 'CLIPBOARDCHECK',
    CLIPBOARDQUESTION = 'CLIPBOARDQUESTION',
    CLOCK = 'CLOCK',
    CLUBMULTIPLE = 'CLUBMULTIPLE',
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
    CONTRIBUTION = 'CONTRIBUTION',
    CROSS = 'CROSS',
    CURRENCY_CN = 'CURRENCY_CN',
    CURRENCY_EU = 'CURRENCY_EU',
    CURRENCY_IN = 'CURRENCY_IN',
    CURRENCY_JP = 'CURRENCY_JP',
    CURRENCY_KR = 'CURRENCY_KR',
    CURRENCY_KZ = 'CURRENCY_KZ',
    CURRENCY_NL = 'CURRENCY_NL',
    CURRENCY_RU = 'CURRENCY_RU',
    CURRENCY_SA = 'CURRENCY_SA',
    CURRENCY_UK = 'CURRENCY_UK',
    CURRENCY_US = 'CURRENCY_US',
    DANGER = 'DANGER',
    DIAMOND = 'DIAMOND',
    DROPDOWN = 'DROPDOWN',
    DROPLEFT = 'DROPLEFT',
    DROPRIGHT = 'DROPRIGHT',
    DROPUP = 'DROPUP',
    EVENTGENERIC = 'EVENTGENERIC',
    EVENTREDCARD = 'EVENTREDCARD',
    EVENTYELLOWCARD = 'EVENTYELLOWCARD',
    FENCE = 'FENCE',
    FIELDSOCCER = 'FIELDSOCCER',
    FILEADD = 'FILEADD',
    FILEDELETE = 'FILEDELETE',
    FILEDOCUMENT = 'FILEDOCUMENT',
    FILEDOWNLOAD = 'FILEDOWNLOAD',
    FILEGENERIC = 'FILEGENERIC',
    FILEIMAGE = 'FILEIMAGE',
    FILEREMOVE = 'FILEREMOVE',
    FILEVIDEO = 'FILEVIDEO',
    FLAG = 'FLAG',
    FLAME = 'FLAME',
    FOLDERADD = 'FOLDERADD',
    FOLDERDELETE = 'FOLDERDELETE',
    FOLDERGENERIC = 'FOLDERGENERIC',
    FOLDEROPEN = 'FOLDEROPEN',
    FOLDERREMOVE = 'FOLDERREMOVE',
    FOLDERSEARCH = 'FOLDERSEARCH',
    GEAR = 'GEAR',
    GENDERFEMALE = 'GENDERFEMALE',
    GENDERMALE = 'GENDERMALE',
    GENDERMIXED = 'GENDERMIXED',
    HANDSNAP = 'HANDSNAP',
    HANGER = 'HANGER',
    HEART = 'HEART',
    HELPDESK = 'HELPDESK',
    HOME = 'HOME',
    IDCARD = 'IDCARD',
    INDICATOR = 'INDICATOR',
    LETTERICON_A = 'LETTERICON_A',
    LETTERICON_B = 'LETTERICON_B',
    LETTERICON_C = 'LETTERICON_C',
    LETTERICON_D = 'LETTERICON_D',
    LETTERICON_E = 'LETTERICON_E',
    LETTERICON_F = 'LETTERICON_F',
    LETTERICON_G = 'LETTERICON_G',
    LETTERICON_H = 'LETTERICON_H',
    LETTERICON_I = 'LETTERICON_I',
    LETTERICON_J = 'LETTERICON_J',
    LETTERICON_K = 'LETTERICON_K',
    LETTERICON_L = 'LETTERICON_L',
    LETTERICON_M = 'LETTERICON_M',
    LETTERICON_N = 'LETTERICON_N',
    LETTERICON_O = 'LETTERICON_O',
    LETTERICON_P = 'LETTERICON_P',
    LETTERICON_Q = 'LETTERICON_Q',
    LETTERICON_R = 'LETTERICON_R',
    LETTERICON_S = 'LETTERICON_S',
    LETTERICON_T = 'LETTERICON_T',
    LETTERICON_U = 'LETTERICON_U',
    LETTERICON_V = 'LETTERICON_V',
    LETTERICON_W = 'LETTERICON_W',
    LETTERICON_X = 'LETTERICON_X',
    LETTERICON_Y = 'LETTERICON_Y',
    LETTERICON_Z = 'LETTERICON_Z',
    LIGHTBULB = 'LIGHTBULB',
    LIGHTPOLE = 'LIGHTPOLE',
    LOCATION = 'LOCATION',
    LOCKOFF = 'LOCKOFF',
    LOCKON = 'LOCKON',
    LOGOUT = 'LOGOUT',
    MATCHCANCEL = 'MATCHCANCEL',
    MATCHCUP = 'MATCHCUP',
    MATCHDELETE = 'MATCHDELETE',
    MATCHOWN = 'MATCHOWN',
    MATCHRESUME = 'MATCHRESUME',
    MENU = 'MENU',
    MESSAGE = 'MESSAGE',
    MINUS = 'MINUS',
    MONEY = 'MONEY',
    MOVEALL = 'MOVEALL',
    MOVELEFTRIGHT = 'MOVELEFTRIGHT',
    MOVEUPDOWN = 'MOVEUPDOWN',
    NEWS = 'NEWS',
    NUMBERICON_1 = 'NUMBERICON_1',
    NUMBERICON_2 = 'NUMBERICON_2',
    NUMBERICON_3 = 'NUMBERICON_3',
    NUMBERICON_4 = 'NUMBERICON_4',
    NUMBERICON_5 = 'NUMBERICON_5',
    OFFICE = 'OFFICE',
    OFFICIALSHIRT = 'OFFICIALSHIRT',
    OPTIONS = 'OPTIONS',
    PACKAGE = 'PACKAGE',
    PENCIL = 'PENCIL',
    PLACEHOLDER = 'PLACEHOLDER',
    PLANE = 'PLANE',
    PLATFORM = 'PLATFORM',
    PLUS = 'PLUS',
    POSTBOXIN = 'POSTBOXIN',
    POSTBOXOUT = 'POSTBOXOUT',
    PUZZLEPIECE = 'PUZZLEPIECE',
    QUESTION = 'QUESTION',
    ROOF = 'ROOF',
    ROUNDEURO_DASHED = 'ROUNDEURO_DASHED',
    ROUND_ALERT = 'ROUND_ALERT',
    ROUND_ARROWDOWN = 'ROUND_ARROWDOWN',
    ROUND_ARROWDOWN_DASHED = 'ROUND_ARROWDOWN_DASHED',
    ROUND_ARROWLEFT = 'ROUND_ARROWLEFT',
    ROUND_ARROWLEFT_DASHED = 'ROUND_ARROWLEFT_DASHED',
    ROUND_ARROWRIGHT = 'ROUND_ARROWRIGHT',
    ROUND_ARROWRIGHT_DASHED = 'ROUND_ARROWRIGHT_DASHED',
    ROUND_ARROWUP = 'ROUND_ARROWUP',
    ROUND_ARROWUP_DASHED = 'ROUND_ARROWUP_DASHED',
    ROUND_CHECK = 'ROUND_CHECK',
    ROUND_CHECK_DASHED = 'ROUND_CHECK_DASHED',
    ROUND_CROSS = 'ROUND_CROSS',
    ROUND_CROSS_DASHED = 'ROUND_CROSS_DASHED',
    ROUND_EURO = 'ROUND_EURO',
    ROUND_EURODISABLED = 'ROUND_EURODISABLED',
    ROUND_HELP = 'ROUND_HELP',
    ROUND_INFO = 'ROUND_INFO',
    ROUND_MINUS = 'ROUND_MINUS',
    ROUND_MINUS_DASHED = 'ROUND_MINUS_DASHED',
    ROUND_NONE = 'ROUND_NONE',
    ROUND_PAUSE = 'ROUND_PAUSE',
    ROUND_PAUSE_DASHED = 'ROUND_PAUSE_DASHED',
    ROUND_PERSON = 'ROUND_PERSON',
    ROUND_PLUS = 'ROUND_PLUS',
    ROUND_PLUS_DASHED = 'ROUND_PLUS_DASHED',
    ROUND_STAR = 'ROUND_STAR',
    SCISSORS = 'SCISSORS',
    SCOREBOARD = 'SCOREBOARD',
    SEARCH = 'SEARCH',
    SELECT = 'SELECT',
    SHARE = 'SHARE',
    SHIELD = 'SHIELD',
    SHIRT = 'SHIRT',
    SMARTPHONE = 'SMARTPHONE',
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
    SUBSTITUTE = 'SUBSTITUTE',
    SUN = 'SUN',
    SUPPORT = 'SUPPORT',
    TIMER = 'TIMER',
    TRANSPORT = 'TRANSPORT',
    TRASHCAN = 'TRASHCAN',
    TUTORIAL = 'TUTORIAL',
    TV = 'TV',
    TWITTER = 'TWITTER',
    USER = 'USER',
    USERADD = 'USERADD',
    USERDOUBLE = 'USERDOUBLE',
    USERREMOVE = 'USERREMOVE',
    VENDIAGRAM = 'VENDIAGRAM',
    VIDEOCAMERA = 'VIDEOCAMERA',
    VISIBILITYOFF = 'VISIBILITYOFF',
    VISIBILITYON = 'VISIBILITYON',
    WATER = 'WATER',
    WEBSITE = 'WEBSITE',
    WORLD = 'WORLD',
}

export enum IconSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
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
    FR = 'FR',
    GB = 'GB',
    KZ = 'KZ',
    NL = 'NL',
    RU = 'RU',
    UK = 'UK',
    US = 'US',
}

export enum ModalSize {
    FULL = 'FULL',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
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
    FULL = 'FULL',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
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

export enum zIndex {
    DIALOG = 10000, // Uses 3 layers down
    MODAL = 9996, // Uses 2 layers down. Needs at least -3 from DIALOG, because DIALOG uses 3 layers
    OVERLAY = 10,
    SIDEPANEL = 9997, // It's possible to have a sidepanel in a modal, so this needs to be at least +1 to modal
    TOOLTIP = 99999999,
}
