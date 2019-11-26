// Type definitions for dexels-ui-kit 2.0.9
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

export type alignments = 'CENTER' | 'LEFT' | 'RIGHT';
export type alignmentsMap =  { [alignment in alignments]: alignment };

export type directions = 'LTR' | 'RTL';
export type directionsMap =  { [direction in directions]: direction };

export type dropdownVariants = 'COMPACT' | 'OUTLINE';
export type dropdownVariantsMap =  { [dropdownVariant in dropdownVariants]: dropdownVariant };

export type easings = 'EASE' | 'EASE_IN' | 'EASE_IN_OUT' | 'EASE_OUT' | 'LINEAR' | 'NONE';
export type easingsMap = {
    EASE: 'ease';
    EASE_IN: 'ease-in';
    EASE_IN_OUT: 'ease-in-out';
    EASE_OUT: 'ease-out';
    LINEAR: 'linear';
    NONE: 'none';
};

export type elevations = 'LEVEL_0' | 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_6' | 'LEVEL_8' | 'LEVEL_12' | 'LEVEL_16' | 'LEVEL_24';
export type elevationsMap = { [elevation in elevations]: elevation };

export type iconTypes = 'CABLE' | 'CALENDAR' | 'CALENDARACCEPT' | 'CALENDARDECLINE' | 'CARDS' | 'CHANGE' | 'CHECK' | 'CHEVRONDOWN' | 'CHEVRONFIRST' | 'CHEVRONLAST' | 'CHEVRONLEFT' | 'CHEVRONRIGHT' | 'CHEVRONUP' | 'CLOCK' | 'COMMUNICATIONMAIL' | 'COMMUNICATIONPHONE' | 'CROSS' | 'DROPDOWN' | 'DROPLEFT' | 'DROPRIGHT' | 'DROPUP' | 'EVENTGENERIC' | 'EVENTREDCARD' | 'EVENTYELLOWCARD' | 'FLAG' | 'GEAR' | 'INDICATOR' | 'LIGHTBULB' | 'LOCKOFF' | 'LOCKON' | 'LOGOUT' | 'MATCHCANCEL' | 'MATCHCOMPA' | 'MATCHCOMPB' | 'MATCHCUP' | 'MATCHDELETE' | 'MATCHOWN' | 'MATCHRESUME' | 'MENU' | 'MINUS' | 'MOVEALL' | 'MOVELEFTRIGHT' | 'MOVEUPDOWN' | 'NEWS' | 'OPTIONS' | 'PENCIL' | 'PLACEHOLDER' | 'PLANE' | 'PLUS' | 'POSTBOXIN' | 'POSTBOXOUT' | 'PRODUCTADS' | 'PRODUCTAVG' | 'PRODUCTBOEKHOUDING' | 'PRODUCTCONTRIBUTIE' | 'PRODUCTDATASERVICE' | 'PRODUCTDWF' | 'PRODUCTMOBIEL' | 'PRODUCTOPLEIDINGEN' | 'PRODUCTTOERNOOIEN' | 'PRODUCTTRAININGEN' | 'PRODUCTTV' | 'PRODUCTVRIJWILLIGERS' | 'PRODUCTWEBSITE' | 'QUESTION' | 'ROUNDCHECK' | 'ROUNDCROSS' | 'ROUNDHELP' | 'ROUNDINFO' | 'ROUNDMINUS' | 'ROUNDPLUS' | 'SEARCH' | 'SELECT' | 'SHARE' | 'SHIELD' | 'SHIRT' | 'SPORTATLETIEK' | 'SPORTBASKETBAL' | 'SPORTHANDBAL' | 'SPORTHOCKEY' | 'SPORTHONKBAL' | 'SPORTJUDO' | 'SPORTKORFBAL' | 'SPORTKRACHT' | 'SPORTREDDINGSBRIGADE' | 'SPORTVOETBAL' | 'SPORTVOLLEYBAL' | 'SPORTZWEMMEN' | 'STAR' | 'STATUSALERT' | 'STATUSCANCELED' | 'STATUSCONCEPT' | 'STATUSCONCEPTALERT' | 'STATUSDONE' | 'STATUSERROR' | 'STATUSSUSPENDED' | 'TRASHCAN' | 'TUTORIAL' | 'TWITTER' | 'USER' | 'USERDOUBLE' | 'VISIBILITYOFF' | 'VISIBILITYON' | 'WORLD';
export type iconTypesMap = { [iconType in iconTypes]: iconType };

export type inputVariants = 'COMPACT' | 'OUTLINE';
export type inputVariantsMap =  { [inputVariant in inputVariants]: inputVariant };

export type placements = 'BOTTOM' | 'LEFT' | 'RIGHT' | 'TOP';
export type placementsMap = { [placement in placements]: placement };

export type positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';
export type positionsMap = { [position in positions]: position };

export type sizes = 'LARGE' | 'MEDIUM' | 'SMALL' | 'XLARGE';
export type sizesMap = { [size in sizes]: size };

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

// Molecules
export interface ButtonProps {
    autoFocus?: boolean;
    children: React.ReactNode;
    direction?: directions;
    iconType?: iconTypes;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isInverted?: boolean;
    onClick: (...args: any[]) => any;
    size?: 'LARGE' | 'MEDIUM' | 'SMALL';
    transitionDuration?: number;
    transitionEasing?: easings;
    variant?: 'FILLED' | 'OUTLINE' | 'TEXT_ONLY';
    [key: string]: any;
}

interface Button<P> extends React.FunctionComponent<P> {
    directions: directionsMap;
    iconTypes: iconTypesMap;
    sizes: {
        [size in ButtonProps['size']]: size;
    }
    transitionEasings: easingsMap;
    variants: {
        [variant in ButtonProps['variant']]: variant;
    }
}

export const Button: Button<ButtonProps>;

export interface ButtonIconProps {
    iconType: iconTypes;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick: (...args: any[]) => any;
    size?: sizes,
    [key: string]: any;
}

interface ButtonIcon<P> extends React.FunctionComponent<P> {
    iconTypes: iconTypesMap;
    sizes: sizesMap;
}

export const ButtonIcon: ButtonIcon<ButtonIconProps>;

export interface CardNoResultsProps {
    elevation?: elevations;
    header: string;
    iconType: iconTypes;
    itemPrefix?: string;
    items?: React.ReactNode[];
    title: string;
}

interface CardNoResults<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    iconTypes: iconTypesMap;
}

export const CardNoResults: CardNoResults<CardNoResultsProps>;

export interface CardStatusProps {
    children: React.ReactNode;
    elevation?: elevations;
    hasBorderRadius?: boolean,
    placement?: placements;
    position?: positions;
    status?: statuses;
}

interface CardStatus<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    placements: placementsMap;
    positions: positionsMap;
    statuses: statusesMap;
}

export const CardStatus: CardStatus<CardStatusProps>;

export interface ChipProps {
    children: React.ReactNode;
    direction?: directions;
    iconType?: iconTypes;
    isDisabled?: boolean;
    isSelected?: boolean;
    onClick: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: easings;
    [key: string]: any;
}

interface Chip<P> extends React.FunctionComponent<P> {
    directions: directionsMap;
    iconTypes: iconTypesMap;
    transitionEasings: easingsMap;
}

export const Chip: Chip<ChipProps>;
