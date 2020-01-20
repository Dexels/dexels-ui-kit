/* eslint-disable max-len, typescript-sort-keys/interface */
export type Alignments = 'CENTER' | 'LEFT' | 'RIGHT';
export type AlignmentsMap = { [Alignment in Alignments]: Alignment }

export type ButtonSizes = 'LARGE' | 'MEDIUM' | 'SMALL';
export type ButtonSizesMap = { [Size in ButtonSizes]: Size }

export type ButtonVariants = 'FILLED' | 'OUTLINE' | 'TEXT_ONLY';
export type ButtonVariantsMap = { [ButtonVariant in ButtonVariants]: ButtonVariant }

export type Directions = 'LTR' | 'RTL';
export type DirectionsMap = { [Direction in Directions]: Direction }

export type DropdownVariants = 'COMPACT' | 'OUTLINE';
export type DropdownVariantsMap = { [DropdownVariant in DropdownVariants]: DropdownVariant }

export type Easings = 'EASE' | 'EASE_IN' | 'EASE_IN_OUT' | 'EASE_OUT' | 'LINEAR' | 'NONE';
export type EasingsMap = {
    EASE: 'ease';
    EASE_IN: 'ease-in';
    EASE_IN_OUT: 'ease-in-out';
    EASE_OUT: 'ease-out';
    LINEAR: 'linear';
    NONE: 'none';
}

export type Elevations = 'LEVEL_0' | 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_6' | 'LEVEL_8' | 'LEVEL_12' | 'LEVEL_16' | 'LEVEL_24';
export type ElevationsMap = { [Elevation in Elevations]: Elevation }

export type IconTypes = 'CABLE' | 'CALENDAR' | 'CALENDARACCEPT' | 'CALENDARDECLINE' | 'CARDS' | 'CHANGE' | 'CHECK' | 'CHECKBOXCHECK' | 'CHECKBOXMINUS1' | 'CHEVRONDOWN' | 'CHEVRONFIRST' | 'CHEVRONLAST' | 'CHEVRONLEFT' | 'CHEVRONRIGHT' | 'CHEVRONUP' | 'CLOCK' | 'CLUBPLACEHOLDER1' | 'CLUBPLACEHOLDER2' | 'CLUBPLACEHOLDER3' | 'CLUBPLACEHOLDER4' | 'COMMUNICATIONMAIL' | 'COMMUNICATIONPHONE' | 'CROSS' | 'DROPDOWN' | 'DROPLEFT' | 'DROPRIGHT' | 'DROPUP' | 'EVENTGENERIC' | 'EVENTREDCARD' | 'EVENTYELLOWCARD' | 'FIELDSOCCER' | 'FLAG' | 'GEAR' | 'GENDERFEMALE' | 'GENDERMALE' | 'GENDERMIXED' | 'INDICATOR' | 'LIGHTBULB' | 'LOCKOFF' | 'LOCKON' | 'LOGOUT' | 'MATCHCANCEL' | 'MATCHCOMPA' | 'MATCHCOMPB' | 'MATCHCUP' | 'MATCHDELETE' | 'MATCHOWN' | 'MATCHRESUME' | 'MENU' | 'MINUS' | 'MOVEALL' | 'MOVELEFTRIGHT' | 'MOVEUPDOWN' | 'NEWS' | 'OPTIONS' | 'PENCIL' | 'PLACEHOLDER' | 'PLANE' | 'PLUS' | 'POSTBOXIN' | 'POSTBOXOUT' | 'PRODUCTADS' | 'PRODUCTAVG' | 'PRODUCTBOEKHOUDING' | 'PRODUCTCONTRIBUTIE' | 'PRODUCTDATASERVICE' | 'PRODUCTDWF' | 'PRODUCTMOBIEL' | 'PRODUCTOPLEIDINGEN' | 'PRODUCTTOERNOOIEN' | 'PRODUCTTRAININGEN' | 'PRODUCTTV' | 'PRODUCTVRIJWILLIGERS' | 'PRODUCTWEBSITE' | 'QUESTION' | 'ROUNDCHECK' | 'ROUNDCROSS' | 'ROUNDHELP' | 'ROUNDINFO' | 'ROUNDMINUS' | 'ROUNDPLUS' | 'SEARCH' | 'SELECT' | 'SHARE' | 'SHIELD' | 'SHIRT' | 'SPORTATLETIEK' | 'SPORTBASKETBAL' | 'SPORTHANDBAL' | 'SPORTHOCKEY' | 'SPORTHONKBAL' | 'SPORTJUDO' | 'SPORTKORFBAL' | 'SPORTKRACHT' | 'SPORTREDDINGSBRIGADE' | 'SPORTVOETBAL' | 'SPORTVOLLEYBAL' | 'SPORTZWEMMEN' | 'STAR' | 'STATUSALERT' | 'STATUSCANCELED' | 'STATUSCONCEPT' | 'STATUSCONCEPTALERT' | 'STATUSDONE' | 'STATUSERROR' | 'STATUSSUSPENDED' | 'TRASHCAN' | 'TUTORIAL' | 'TWITTER' | 'USER' | 'USERDOUBLE' | 'VISIBILITYOFF' | 'VISIBILITYON' | 'WORLD';
export type IconTypesMap = { [IconType in IconTypes]: IconType }

export type InputVariants = 'COMPACT' | 'OUTLINE';
export type InputVariantsMap = { [InputVariant in InputVariants]: InputVariant }

export type Placements = 'BOTTOM' | 'LEFT' | 'RIGHT' | 'TOP';
export type PlacementsMap = { [Placement in Placements]: Placement }

export type Positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';
export type PositionsMap = { [Position in Positions]: Position }

export type Sizes = 'LARGE' | 'MEDIUM' | 'SMALL' | 'XLARGE';
export type SizesMap = { [Size in Sizes]: Size }

export type Statuses = 'ALERT' | 'DEFAULT' | 'DISABLED' | 'INVALID' | 'NONE' | 'VALID';
export type StatusesMap = { [Status in Statuses]: Status }

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
}
