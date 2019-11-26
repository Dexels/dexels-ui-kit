// Type definitions for dexels-ui-kit 1.0.44
// Project: dexels-ui-kit
// Definitions by: David de Lusenet <https://github.com/daviddelusenet>
// TypeScript Version: 3.7.2

// References to types which our library depends on
/// <reference types="react" />

// Set up the project namespace, should be the same as the output.library field in the webpack config
export as namespace DexelsUIKit;

// Typings for functions/variables
export function createDuiTheme(baseTheme: object, overrides: object): object;

export const themeBasic: {
    [key: string]: any;
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
    }
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    colorAlert: string;
    colorInvalid: string;
    colorValid: string;
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
}

export type elevations = 'LEVEL_0' | 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_6' | 'LEVEL_8' | 'LEVEL_12' | 'LEVEL_16' | 'LEVEL_24';
export type elevationsMap = { [elevation in elevations]: elevation };

export type iconTypes = 'CABLE' | 'CALENDAR' | 'CALENDARACCEPT' | 'CALENDARDECLINE' | 'CARDS' | 'CHANGE' | 'CHECK' | 'CHEVRONDOWN' | 'CHEVRONFIRST' | 'CHEVRONLAST' | 'CHEVRONLEFT' | 'CHEVRONRIGHT' | 'CHEVRONUP' | 'CLOCK' | 'COMMUNICATIONMAIL' | 'COMMUNICATIONPHONE' | 'CROSS' | 'DROPDOWN' | 'DROPLEFT' | 'DROPRIGHT' | 'DROPUP' | 'EVENTGENERIC' | 'EVENTREDCARD' | 'EVENTYELLOWCARD' | 'FLAG' | 'GEAR' | 'INDICATOR' | 'LIGHTBULB' | 'LOCKOFF' | 'LOCKON' | 'LOGOUT' | 'MATCHCANCEL' | 'MATCHCOMPA' | 'MATCHCOMPB' | 'MATCHCUP' | 'MATCHDELETE' | 'MATCHOWN' | 'MATCHRESUME' | 'MENU' | 'MINUS' | 'MOVEALL' | 'MOVELEFTRIGHT' | 'MOVEUPDOWN' | 'NEWS' | 'OPTIONS' | 'PENCIL' | 'PLACEHOLDER' | 'PLANE' | 'PLUS' | 'POSTBOXIN' | 'POSTBOXOUT' | 'PRODUCTADS' | 'PRODUCTAVG' | 'PRODUCTBOEKHOUDING' | 'PRODUCTCONTRIBUTIE' | 'PRODUCTDATASERVICE' | 'PRODUCTDWF' | 'PRODUCTMOBIEL' | 'PRODUCTOPLEIDINGEN' | 'PRODUCTTOERNOOIEN' | 'PRODUCTTRAININGEN' | 'PRODUCTTV' | 'PRODUCTVRIJWILLIGERS' | 'PRODUCTWEBSITE' | 'QUESTION' | 'ROUNDCHECK' | 'ROUNDCROSS' | 'ROUNDHELP' | 'ROUNDINFO' | 'ROUNDMINUS' | 'ROUNDPLUS' | 'SEARCH' | 'SELECT' | 'SHARE' | 'SHIELD' | 'SHIRT' | 'SPORTATLETIEK' | 'SPORTBASKETBAL' | 'SPORTHANDBAL' | 'SPORTHOCKEY' | 'SPORTHONKBAL' | 'SPORTJUDO' | 'SPORTKORFBAL' | 'SPORTKRACHT' | 'SPORTREDDINGSBRIGADE' | 'SPORTVOETBAL' | 'SPORTVOLLEYBAL' | 'SPORTZWEMMEN' | 'STAR' | 'STATUSALERT' | 'STATUSCANCELED' | 'STATUSCONCEPT' | 'STATUSCONCEPTALERT' | 'STATUSDONE' | 'STATUSERROR' | 'STATUSSUSPENDED' | 'TRASHCAN' | 'TUTORIAL' | 'TWITTER' | 'USER' | 'USERDOUBLE' | 'VISIBILITYOFF' | 'VISIBILITYON' | 'WORLD';
export type iconTypesMap = { [iconType in iconTypes]: iconType };

export type placements = 'BOTTOM' | 'LEFT' | 'RIGHT' | 'TOP';
export type placementsMap = { [placement in placements]: placement };

export type positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';
export type positionsMap = { [position in positions]: position };

export type statuses = 'ALERT' | 'DEFAULT' | 'DISABLED' | 'INVALID' | 'NONE' | 'VALID';
export type statusesMap = { [status in statuses]: status };

// Typings for components
// Atoms
export interface CardProps {
    children: React.ReactNode;
    elevation?: elevations;
    hasBorderRadius?: boolean;
    position?: positions;
}

interface Card<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    positions: positionsMap;
}

export const Card: Card<CardProps>;

export interface ErrorMessageProps {
    children: React.ReactNode;
}

export const ErrorMessage: React.FunctionComponent<ErrorMessageProps>;

export interface IconProps {
    children?: never;
    type: iconTypes;
}

interface Icon<P> extends React.FunctionComponent<P> {
    types: iconTypesMap;
}

export const Icon: Icon<IconProps>;

export interface LabelProps {
    children: React.ReactNode;
    hasError?: boolean;
    isActive?: boolean;
    isCheckboxLabel?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isSmall?: boolean;
    isTruncatable?: boolean;
    isValid?: boolean;
}

export const Label: React.FunctionComponent<LabelProps>;

export interface StatusIndicatorProps {
    as?: string;
    children: React.ReactNode;
    placement: placements;
    status: statuses;
}

interface StatusIndicator<P> extends React.FunctionComponent<P> {
    placements: placementsMap;
    statuses: statusesMap;
}

export const StatusIndicator: StatusIndicator<StatusIndicatorProps>;
