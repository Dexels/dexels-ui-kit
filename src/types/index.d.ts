// Type definitions for dexels-ui-kit 2.0.43
// Project: dexels-ui-kit
// Definitions by: David de Lusenet <https://github.com/daviddelusenet>
// TypeScript Version: 3.7.3

// References to types which our library depends on
import * as moment from 'moment';
import * as React from 'react';
import * as ReactDates from 'react-dates';

// Set up the project namespace, should be the same as the output.library field in the webpack config
export as namespace DexelsUIKit;

// Typings for utility functions, variables and mixins
export interface ThemeTextStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
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
    availableTextStyles: () => {
        [TextStyle in keyof Theme['textStyles']]: TextStyle;
    };
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
    textStyling: (textStyleSelector: keyof Theme['textStyles']) => string;
}

export const themeBasic: Theme;
export const themeDark: Theme;

export type Alignments = 'CENTER' | 'LEFT' | 'RIGHT';
export type AlignmentsMap =  { [Alignment in Alignments]: Alignment }

export type Directions = 'LTR' | 'RTL';
export type DirectionsMap =  { [Direction in Directions]: Direction }

export type DropdownVariants = 'COMPACT' | 'OUTLINE';
export type DropdownVariantsMap =  { [DropdownVariant in DropdownVariants]: DropdownVariant }

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

export type IconTypes = 'CABLE' | 'CALENDAR' | 'CALENDARACCEPT' | 'CALENDARDECLINE' | 'CARDS' | 'CHANGE' | 'CHECK' | 'CHECKBOXCHECK' | 'CHECKBOXMINUS1' | 'CHEVRONDOWN' | 'CHEVRONFIRST' | 'CHEVRONLAST' | 'CHEVRONLEFT' | 'CHEVRONRIGHT' | 'CHEVRONUP' | 'CLOCK' | 'COMMUNICATIONMAIL' | 'COMMUNICATIONPHONE' | 'CROSS' | 'DROPDOWN' | 'DROPLEFT' | 'DROPRIGHT' | 'DROPUP' | 'EVENTGENERIC' | 'EVENTREDCARD' | 'EVENTYELLOWCARD' | 'FLAG' | 'GEAR' | 'INDICATOR' | 'LIGHTBULB' | 'LOCKOFF' | 'LOCKON' | 'LOGOUT' | 'MATCHCANCEL' | 'MATCHCOMPA' | 'MATCHCOMPB' | 'MATCHCUP' | 'MATCHDELETE' | 'MATCHOWN' | 'MATCHRESUME' | 'MENU' | 'MINUS' | 'MOVEALL' | 'MOVELEFTRIGHT' | 'MOVEUPDOWN' | 'NEWS' | 'OPTIONS' | 'PENCIL' | 'PLACEHOLDER' | 'PLANE' | 'PLUS' | 'POSTBOXIN' | 'POSTBOXOUT' | 'PRODUCTADS' | 'PRODUCTAVG' | 'PRODUCTBOEKHOUDING' | 'PRODUCTCONTRIBUTIE' | 'PRODUCTDATASERVICE' | 'PRODUCTDWF' | 'PRODUCTMOBIEL' | 'PRODUCTOPLEIDINGEN' | 'PRODUCTTOERNOOIEN' | 'PRODUCTTRAININGEN' | 'PRODUCTTV' | 'PRODUCTVRIJWILLIGERS' | 'PRODUCTWEBSITE' | 'QUESTION' | 'ROUNDCHECK' | 'ROUNDCROSS' | 'ROUNDHELP' | 'ROUNDINFO' | 'ROUNDMINUS' | 'ROUNDPLUS' | 'SEARCH' | 'SELECT' | 'SHARE' | 'SHIELD' | 'SHIRT' | 'SPORTATLETIEK' | 'SPORTBASKETBAL' | 'SPORTHANDBAL' | 'SPORTHOCKEY' | 'SPORTHONKBAL' | 'SPORTJUDO' | 'SPORTKORFBAL' | 'SPORTKRACHT' | 'SPORTREDDINGSBRIGADE' | 'SPORTVOETBAL' | 'SPORTVOLLEYBAL' | 'SPORTZWEMMEN' | 'STAR' | 'STATUSALERT' | 'STATUSCANCELED' | 'STATUSCONCEPT' | 'STATUSCONCEPTALERT' | 'STATUSDONE' | 'STATUSERROR' | 'STATUSSUSPENDED' | 'TRASHCAN' | 'TUTORIAL' | 'TWITTER' | 'USER' | 'USERDOUBLE' | 'VISIBILITYOFF' | 'VISIBILITYON' | 'WORLD';
export type IconTypesMap = { [IconType in IconTypes]: IconType }

export type InputVariants = 'COMPACT' | 'OUTLINE';
export type InputVariantsMap =  { [InputVariant in InputVariants]: InputVariant }

export type Placements = 'BOTTOM' | 'LEFT' | 'RIGHT' | 'TOP';
export type PlacementsMap = { [Placement in Placements]: Placement }

export type Positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';
export type PositionsMap = { [Position in Positions]: Position }

export type Sizes = 'LARGE' | 'MEDIUM' | 'SMALL' | 'XLARGE';
export type SizesMap = { [Size in Sizes]: Size }

export type Statuses = 'ALERT' | 'DEFAULT' | 'DISABLED' | 'INVALID' | 'NONE' | 'VALID';
export type StatusesMap = { [Status in Statuses]: Status }

export function createDuiTheme(baseTheme: Theme, overrides: object): Theme;

export function getAlignment(alignment: Alignments): string;

export function getElevation(elevation: Elevations): string;

export function getPosition(position: Positions): string;

export function getStatusColor(status: Statuses, theme: Theme): string;

export function rippleEffect(backgroundColor: string): string;

export function rippleEffectInit(): string;

export function rippleEffectReset(): string;

export function setBoxSizing(): string;

export function setCentered(): string;

export function setTruncate(): string;

// Typings for components
// Atoms
export interface CardProps {
    children: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    hasBorderRadius?: boolean;
}

interface Card<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
}

export const Card: Card<CardProps>;

export interface ErrorMessageProps {
    children: React.ReactNode;
    className?: string;
}

export const ErrorMessage: React.FunctionComponent<ErrorMessageProps>;

export interface IconProps {
    children?: never;
    className?: string;
    type: IconTypes;
}

interface Icon<P> extends React.FunctionComponent<P> {
    types: IconTypesMap;
}

export const Icon: Icon<IconProps>;

export interface LabelProps {
    children: React.ReactNode;
    className?: string;
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
    background?: string;
    children: React.ReactNode;
    className?: string;
    placement: Placements;
    size?: 'LARGE' | 'SMALL';
    status: Statuses;
}

interface StatusIndicator<P> extends React.FunctionComponent<P> {
    placements: PlacementsMap;
    sizes: {
        [Size in StatusIndicatorProps['size']]: Size;
    }
    statuses: StatusesMap;
}

export const StatusIndicator: StatusIndicator<StatusIndicatorProps>;

// Molecules
export interface ButtonProps {
    autoFocus?: boolean;
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    iconType?: IconTypes;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isInverted?: boolean;
    isLoading?: boolean;
    onClick?: (...args: any[]) => any;
    size?: 'LARGE' | 'MEDIUM' | 'SMALL';
    transitionDuration?: number;
    transitionEasing?: Easings;
    variant?: 'FILLED' | 'OUTLINE' | 'TEXT_ONLY';
    [key: string]: any;
}

interface Button<P> extends React.FunctionComponent<P> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
    sizes: {
        [Size in ButtonProps['size']]: Size;
    };
    transitionEasings: EasingsMap;
    variants: {
        [Variant in ButtonProps['variant']]: Variant;
    };
}

export const Button: Button<ButtonProps>;

export interface ButtonIconProps {
    className?: string;
    iconType: IconTypes;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick: (...args: any[]) => any;
    size?: Sizes;
    [key: string]: any;
}

interface ButtonIcon<P> extends React.FunctionComponent<P> {
    iconTypes: IconTypesMap;
    sizes: SizesMap;
}

export const ButtonIcon: ButtonIcon<ButtonIconProps>;

export interface CardNoResultsProps {
    className?: string;
    elevation?: Elevations;
    header: React.ReactNode;
    iconType: IconTypes;
    itemPrefix?: string;
    items?: React.ReactNode[];
    title: React.ReactNode;
}

interface CardNoResults<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
    iconTypes: IconTypesMap;
}

export const CardNoResults: CardNoResults<CardNoResultsProps>;

export interface CardStatusProps {
    children: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    hasBorderRadius?: boolean;
    placement?: Placements;
    status?: Statuses;
}

interface CardStatus<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
    placements: PlacementsMap;
    statuses: StatusesMap;
}

export const CardStatus: CardStatus<CardStatusProps>;

export interface ChipProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    iconType?: IconTypes
    isDisabled?: boolean;
    isSelected?: boolean;
    onClick: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: Easings;
    [key: string]: any;
}

interface Chip<P> extends React.FunctionComponent<P> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
    transitionEasings: EasingsMap;
}

export const Chip: Chip<ChipProps>;

export interface DialogFooterProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText?: React.ReactNode;
    className?: string;
    onCancel?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    text?: React.ReactNode;
}

export const DialogFooter: React.FunctionComponent<DialogFooterProps>;

export interface DropdownProps {
    as?: string;
    children: React.ReactNode;
    className?: string;
    errormessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    label?: React.ReactNode;
    name: string;
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    placeholder?: React.ReactNode;
    value: number | string;
    variant?: DropdownVariants;
    [key: string]: any;
}

interface Dropdown<P> extends React.FunctionComponent<P> {
    variants: DropdownVariantsMap;
}

export const Dropdown: Dropdown<DropdownProps>;

export interface FormElementLabelProps {
    children: React.ReactNode;
    className?: string;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isValid?: boolean;
    variant?: InputVariants;
}

interface FormElementLabel<P> extends React.FunctionComponent<P> {
    variants: InputVariantsMap;
}

export const FormElementLabel: FormElementLabel<FormElementLabelProps>;

export interface FullscreenLoaderProps {
    amount?: number;
    className?: string;
    type?: 'CIRCLES';
}

interface FullscreenLoader<P> extends React.FunctionComponent<P> {
    types: {
        [Type in FullscreenLoaderProps['type']]: Type;
    };
}

export const FullscreenLoader: FullscreenLoader<FullscreenLoaderProps>;

export interface InputProps {
    className?: string;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (...args: any[]) => any;
    type?: 'email' | 'number' | 'password' | 'tel' | 'text';
    value?: string;
    variant?: InputVariants;
    [key: string]: any;
}

interface Input<P> extends React.FunctionComponent<P> {
    types: {
        EMAIL: 'email';
        NUMBER: 'number';
        PASSWORD: 'password';
        TEL: 'tel';
        TEXT: 'text';
    };
    variants: InputVariantsMap;
}

export const Input: Input<InputProps>;

export interface LoaderProps {
    className?: string;
}

export const Loader: React.FunctionComponent<LoaderProps>;

export interface OverlayProps {
    className?: string;
    height?: number;
    isFullscreen?: boolean;
    isVisible?: boolean;
    width?: number;
}

export const Overlay: React.FunctionComponent<OverlayProps>;

export interface SelectionControlProps {
    className?: string;
    direction?: Directions;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    hasHorizontalCorrection?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isValid?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: Easings;
    type?: 'CHECKBOX' | 'RADIO';
    value: string;
    [key: string]: any;
}

interface SelectionControl<P> extends React.FunctionComponent<P> {
    directions: DirectionsMap;
    transitionEasing: EasingsMap;
    types: {
        [Type in SelectionControlProps['type']]: Type;
    };
}

export const SelectionControl: SelectionControl<SelectionControlProps>;

export interface TextIconProps {
    className?: string;
    size?: Sizes;
    text: string;
    [key: string]: any;
}

interface TextIcon<P> extends React.FunctionComponent<P> {
    sizes: SizesMap;
}

export const TextIcon: TextIcon<TextIconProps>;

export interface TextWithOptionalIconProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    iconType?: IconTypes
    isCapitalized?: boolean;
    isTruncatable?: boolean;
    [key: string]: any;
}

interface TextWithOptionalIcon<P> extends React.FunctionComponent<P> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
}

export const TextWithOptionalIcon: TextWithOptionalIcon<TextWithOptionalIconProps>;

export interface TooltipProps {
    className?: string;
    elevation?: Elevations;
    position?: Positions;
    transitionDuration?: number;
    transitionEasing?: Easings;
}

interface Tooltip<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
    positions: PositionsMap;
    transitionEasings: EasingsMap;
}

export const Tooltip: Tooltip<TooltipProps>;

// Organisms
export interface ChipStatusProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    isDisabled?: boolean;
    onClick: (...args: any[]) => any;
    variant?: 'DESELECTED' | 'INDETERMINATE' | 'SELECTED';
}

interface ChipStatus<P> extends React.FunctionComponent<P> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
    variants: {
        [Variant in ChipStatusProps['variant']]: Variant;
    };
}

export const ChipStatus: ChipStatus<ChipStatusProps>;

export interface DateRangePickerProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText?: React.ReactNode;
    className?: string;
    daySize?: number;
    displayFormat?: React.ReactNode;
    endDate?: moment.Moment;
    endDateId: string;
    endDatePlaceholderText?: React.ReactNode;
    focusedInput?: ReactDates.FocusedInputShape;
    footerText?: React.ReactNode;
    hasYearSelector?: boolean;
    isDayHighlighted?: (...args: any[]) => any;
    isDisabled?: boolean;
    isOutsideRange?: (...args: any[]) => any;
    keepOpenOnDateSelect?: boolean;
    label: React.ReactNode;
    labelMonth?: React.ReactNode;
    labelYear?: React.ReactNode;
    minimumNights?: number;
    numberOfMonths?: number;
    onCancel?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    onDatesChange: (...args: any[]) => any;
    onFocusChange: (...args: any[]) => any;
    orientation?: ReactDates.OrientationShape;
    shortcuts?: {
        onClick: (...args: any[]) => any;
        text: React.ReactNode;
    }[];
    shortcutsText?: React.ReactNode;
    startDate?: moment.Moment;
    startDateId: string;
    startDatePlaceholderText?: React.ReactNode;
    yearCount?: number;
}

export const DateRangePicker: React.FunctionComponent<DateRangePickerProps>;

export interface DialogProps {
    bodyAlignment?: Alignments;
    buttonCancelText?: React.ReactNode;
    buttonClosePosition: 'LEFT' | 'RIGHT';
    buttonConfirmText: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    footerText?: React.ReactNode;
    hasButtonClose?: boolean;
    hasOverlay?: boolean;
    header?: React.ReactNode;
    headerAlignment?: Alignments;
    isVisible: boolean;
    onCancel?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onConfirm: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: Easings;
    width?: string;
}

interface Dialog<P> extends React.FunctionComponent<P> {
    bodyAlignments: AlignmentsMap;
    buttonClosePositions: {
        [ButtonClosePosition in DialogProps['buttonClosePosition']]: ButtonClosePosition;
    };
    elevations: ElevationsMap;
    headerAlignments: AlignmentsMap;
    transitionEasings: EasingsMap;
}

export const Dialog: Dialog<DialogProps>;

export interface DropdownMultiSelectProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen: boolean;
    isValid?: boolean;
    label?: React.ReactNode;
    maxHeight?: string;
    name: string;
    onCancel: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onConfirm: (...args: any[]) => any;
    optionAll?: React.ReactNode;
    options: React.ReactNode;
    placeholder?: React.ReactNode;
    resetOnOutsideClick?: boolean;
    value: string;
    variant?: DropdownVariants;
}

interface DropdownMultiSelect<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
    optionAllTexts: {
        INDETERMINATE: 'Indeterminate';
        OFF: 'Off';
        ON: 'On';
    };
    variants: DropdownVariantsMap;
}

export const DropdownMultiSelect: DropdownMultiSelect<DropdownMultiSelectProps>;

export interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    isInverted?: boolean;
    onBack?: (...args: any[]) => any;
    onToggleMenu?: (...args: any[]) => any;
    title: React.ReactNode;
}

interface Header<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
}

export const Header: Header<HeaderProps>;

export interface InputPasswordProps {
    className?: string;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    isVisibleDefault?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (...args: any[]) => any;
    value?: string;
    variant?: InputVariants;
}

interface InputPassword<P> extends React.FunctionComponent<P> {
    variants: InputVariantsMap;
}

export const InputPassword: InputPassword<InputPasswordProps>;

export interface MenuProps {
    className?: string;
    defaultOpenItem?: React.ReactNode;
    items: {
        children: {
            exact?: boolean;
            isDisabled?: boolean;
            path: string;
            text: React.ReactNode;
        }[];
        exact?: boolean;
        iconType: IconTypes
        isDisabled?: boolean;
        path?: string;
        text: React.ReactNode;
    }[];
}

interface Menu<P> extends React.FunctionComponent<P> {
    iconTypes: IconTypesMap;
}

export const Menu: Menu<MenuProps>;

export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: (...args: any[]) => any;
    options?: React.ReactNode;
    title: React.ReactNode;
    transitionDuration?: number;
    transitionEasings?: Easings;
}

interface Modal<P> extends React.FunctionComponent<P> {
    transitionEasings: EasingsMap;
}

export const Modal: Modal<ModalProps>;

export interface PaginatorProps {
    className?: string;
    hasAllPagingButtons?: boolean;
    hasGoToPage?: boolean;
    hasPageSizeSelector?: boolean;
    instance: {
        canNextPage: boolean;
        canPreviousPage: boolean;
        gotoPage: (...args: any[]) => any;
        nextPage: (...args: any[]) => any;
        pageCount: boolean;
        pageIndex: boolean;
        pageSize: boolean;
        previousPage: (...args: any[]) => any;
        rows: object[];
        setPageSize: (...args: any[]) => any;
    };
    pageSizes?: number[] | string[];
    texts: {
        page: React.ReactNode;
        pageGoto: React.ReactNode;
        pageOf: React.ReactNode;
        resultsOf: React.ReactNode;
        rowsPerPage: React.ReactNode;
        show: React.ReactNode;
    };
    useResultsOfText?: boolean;
}

export const Paginator: React.FunctionComponent<PaginatorProps>;

export interface SingleDatePickerProps {
    className?: string;
    date?: moment.Moment;
    daySize?: number;
    displayFormat?: React.ReactNode;
    hasYearSelector?: boolean;
    id: string;
    isDayHighlighted?: (...args: any[]) => any;
    isDisabled?: boolean;
    isFocused: boolean;
    isOutsideRange?: (...args: any[]) => any;
    keepOpenOnDateSelect?: boolean;
    label: React.ReactNode;
    labelMonth?: React.ReactNode;
    labelYear?: React.ReactNode;
    numberOfMonths?: number;
    onClose?: (...args: any[]) => any;
    onDateChange: (...args: any[]) => any;
    onFocusChange: (...args: any[]) => any;
    orientation?: ReactDates.OrientationShape;
    placeholder?: React.ReactNode;
    yearCount?: number;
}

export const SingleDatePicker: React.FunctionComponent<SingleDatePickerProps>;

export interface TableProps {
    caption?: React.ReactNode;
    className?: string;
    debug?: boolean;
    elevation?: Elevations;
    footerComponent?: React.ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: {
        getTableBodyProps: (...args: any[]) => any;
        getTableProps: (...args: any[]) => any;
        headerGroups: any[];
        prepareRow: (...args: any[]) => any;
    };
    isFullWidth?: boolean;
    onClickRow?: (...args: any[]) => any;
    pagingComponent?: React.ReactNode;
    texts?: {
        toggleSortTooltip?: React.ReactNode;
    };
}

interface Table<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
}

export const Table: Table<TableProps>;

export interface TabsProps {
    className?: string;
    elevation?: Elevations;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    tabs: {
        content: React.ReactNode;
        isDisabled?: boolean;
        title: React.ReactNode;
    }[];
}

interface Tabs<P> extends React.FunctionComponent<P> {
    elevations: ElevationsMap;
}

export const Tabs: Tabs<TabsProps>;

export interface ToolbarProps {
    children?: React.ReactNode;
    className?: string;
    isInverted?: boolean;
}

export const Toolbar: React.FunctionComponent<ToolbarProps>;
