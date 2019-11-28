// Type definitions for dexels-ui-kit 2.0.9
// Project: dexels-ui-kit
// Definitions by: David de Lusenet <https://github.com/daviddelusenet>
// TypeScript Version: 3.7.2

// References to types which our library depends on
import * as moment from 'moment';
import * as React from 'react';
import * as ReactDates from 'react-dates';

// Set up the project namespace, should be the same as the output.library field in the webpack config
export as namespace DexelsUIKit;

// Typings for functions/variables
export function createDuiTheme(baseTheme: object, overrides: object): object;

export interface themeTextStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

export interface theme {
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
    colorDisabled: string;
    colorInvalid: string;
    colorValid: string;
    fontFamilyPrimary: string;
    fontFamilySecondary: string;
    colorTextContrast: {
        primary: string;
    }
    colorText: {
        primary: string;
        secondary: string;
    }
    colorTextBody: {
        primary: string;
        secondary: string;
    }
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
    }
    button: {
        filled: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            }
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            }
        }
        outline: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            }
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            }
        }
        textOnly: {
            disabled: string;
            disabledInverted: string;
            hover: string;
            hoverInverted: string;
            inverted: string;
            primary: string;
        }
    }
    card: {
        backgroundColor: string;
    }
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
            }
            hover: {
                accent: string;
                backgroundColor: string;
                color: string;
            }
            selected: {
                backgroundColor: string;
                color: string;
            }
            selectionLimit: {
                backgroundColor: string;
                color: string;
            }
        }
    }
    header: {
        backgroundColor: {
            primary: string;
            secondary: string;
        }
    }
    hover: {
        backgroundColor: string;
    }
    table: {
        row: {
            backgroundColorEven: string;
            backgroundColorOdd: string;
        }
    }
    textStyles: {
        body1: themeTextStyle;
        body2: themeTextStyle;
        buttonLarge: themeTextStyle;
        buttonMedium: themeTextStyle;
        buttonSmall: themeTextStyle;
        caption: themeTextStyle;
        h1: themeTextStyle;
        h2: themeTextStyle;
        h3: themeTextStyle;
    }
    spacingValue: number;
    availableTextStyles: () => {
        [textStyle in keyof theme['textStyles']]: textStyle;
    }
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
    textStyling: (textStyleSelector: keyof theme['textStyles']) => string;
}

export const themeBasic: theme;
export const themeDark: theme;

export type alignments = 'CENTER' | 'LEFT' | 'RIGHT';
export type alignmentsMap =  { [alignment in alignments]: alignment }

export type directions = 'LTR' | 'RTL';
export type directionsMap =  { [direction in directions]: direction }

export type dropdownVariants = 'COMPACT' | 'OUTLINE';
export type dropdownVariantsMap =  { [dropdownVariant in dropdownVariants]: dropdownVariant }

export type easings = 'EASE' | 'EASE_IN' | 'EASE_IN_OUT' | 'EASE_OUT' | 'LINEAR' | 'NONE';
export type easingsMap = {
    EASE: 'ease';
    EASE_IN: 'ease-in';
    EASE_IN_OUT: 'ease-in-out';
    EASE_OUT: 'ease-out';
    LINEAR: 'linear';
    NONE: 'none';
}

export type elevations = 'LEVEL_0' | 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_6' | 'LEVEL_8' | 'LEVEL_12' | 'LEVEL_16' | 'LEVEL_24';
export type elevationsMap = { [elevation in elevations]: elevation }

export type iconTypes = 'CABLE' | 'CALENDAR' | 'CALENDARACCEPT' | 'CALENDARDECLINE' | 'CARDS' | 'CHANGE' | 'CHECK' | 'CHEVRONDOWN' | 'CHEVRONFIRST' | 'CHEVRONLAST' | 'CHEVRONLEFT' | 'CHEVRONRIGHT' | 'CHEVRONUP' | 'CLOCK' | 'COMMUNICATIONMAIL' | 'COMMUNICATIONPHONE' | 'CROSS' | 'DROPDOWN' | 'DROPLEFT' | 'DROPRIGHT' | 'DROPUP' | 'EVENTGENERIC' | 'EVENTREDCARD' | 'EVENTYELLOWCARD' | 'FLAG' | 'GEAR' | 'INDICATOR' | 'LIGHTBULB' | 'LOCKOFF' | 'LOCKON' | 'LOGOUT' | 'MATCHCANCEL' | 'MATCHCOMPA' | 'MATCHCOMPB' | 'MATCHCUP' | 'MATCHDELETE' | 'MATCHOWN' | 'MATCHRESUME' | 'MENU' | 'MINUS' | 'MOVEALL' | 'MOVELEFTRIGHT' | 'MOVEUPDOWN' | 'NEWS' | 'OPTIONS' | 'PENCIL' | 'PLACEHOLDER' | 'PLANE' | 'PLUS' | 'POSTBOXIN' | 'POSTBOXOUT' | 'PRODUCTADS' | 'PRODUCTAVG' | 'PRODUCTBOEKHOUDING' | 'PRODUCTCONTRIBUTIE' | 'PRODUCTDATASERVICE' | 'PRODUCTDWF' | 'PRODUCTMOBIEL' | 'PRODUCTOPLEIDINGEN' | 'PRODUCTTOERNOOIEN' | 'PRODUCTTRAININGEN' | 'PRODUCTTV' | 'PRODUCTVRIJWILLIGERS' | 'PRODUCTWEBSITE' | 'QUESTION' | 'ROUNDCHECK' | 'ROUNDCROSS' | 'ROUNDHELP' | 'ROUNDINFO' | 'ROUNDMINUS' | 'ROUNDPLUS' | 'SEARCH' | 'SELECT' | 'SHARE' | 'SHIELD' | 'SHIRT' | 'SPORTATLETIEK' | 'SPORTBASKETBAL' | 'SPORTHANDBAL' | 'SPORTHOCKEY' | 'SPORTHONKBAL' | 'SPORTJUDO' | 'SPORTKORFBAL' | 'SPORTKRACHT' | 'SPORTREDDINGSBRIGADE' | 'SPORTVOETBAL' | 'SPORTVOLLEYBAL' | 'SPORTZWEMMEN' | 'STAR' | 'STATUSALERT' | 'STATUSCANCELED' | 'STATUSCONCEPT' | 'STATUSCONCEPTALERT' | 'STATUSDONE' | 'STATUSERROR' | 'STATUSSUSPENDED' | 'TRASHCAN' | 'TUTORIAL' | 'TWITTER' | 'USER' | 'USERDOUBLE' | 'VISIBILITYOFF' | 'VISIBILITYON' | 'WORLD';
export type iconTypesMap = { [iconType in iconTypes]: iconType }

export type inputVariants = 'COMPACT' | 'OUTLINE';
export type inputVariantsMap =  { [inputVariant in inputVariants]: inputVariant }

export type placements = 'BOTTOM' | 'LEFT' | 'RIGHT' | 'TOP';
export type placementsMap = { [placement in placements]: placement }

export type positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';
export type positionsMap = { [position in positions]: position }

export type sizes = 'LARGE' | 'MEDIUM' | 'SMALL' | 'XLARGE';
export type sizesMap = { [size in sizes]: size }

export type statuses = 'ALERT' | 'DEFAULT' | 'DISABLED' | 'INVALID' | 'NONE' | 'VALID';
export type statusesMap = { [status in statuses]: status }

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
    size?: sizes;
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
    hasBorderRadius?: boolean;
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

export interface DialogFooterProps {
    buttonCancelText?: string;
    buttonConfirmText?: string;
    onCancel?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    text?: string;
}

export const DialogFooter: React.FunctionComponent<DialogFooterProps>;

export interface DropdownProps {
    as?: string;
    children: React.ReactNode;
    errormessage?: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    label?: string;
    name: string;
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    placeholder: string;
    value: number | string;
    variant?: dropdownVariants;
    [key: string]: any;
}

interface Dropdown<P> extends React.FunctionComponent<P> {
    variants: dropdownVariantsMap;
}

export const Dropdown: Dropdown<DropdownProps>;

export interface FormElementLabelProps {
    children: React.ReactNode;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isValid?: boolean;
    variant?: inputVariants;
}

interface FormElementLabel<P> extends React.FunctionComponent<P> {
    variants: inputVariantsMap;
}

export const FormElementLabel: FormElementLabel<FormElementLabelProps>;

export interface InputProps {
    errorMessage?: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label: string;
    name: string;
    onChange: (...args: any[]) => any;
    type?: 'EMAIL' | 'NUMBER' | 'PASSWORD' | 'TEL' | 'TEXT';
    value?: string;
    variant?: inputVariants;
    [key: string]: any;
}

interface Input<P> extends React.FunctionComponent<P> {
    types: {
        [type in InputProps['type']]: type;
    }
    variants: inputVariantsMap;
}

export const Input: Input<InputProps>;

export interface OverlayProps {
    height?: number;
    isFullscreen?: boolean;
    isVisible?: boolean;
    width?: number;
}

export const Overlay: React.FunctionComponent<OverlayProps>;

export interface SelectionControlProps {
    direction?: directions;
    errorMessage?: string;
    hasError?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isValid?: boolean;
    label: string;
    name: string;
    onChange: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: easings;
    type?: 'CHECKBOX' | 'RADIO';
    value: string;
    [key: string]: any;
}

interface SelectionControl<P> extends React.FunctionComponent<P> {
    directions: directionsMap;
    transitionEasing: easingsMap;
    types: {
        [type in SelectionControlProps['type']]: type;
    }
}

export const SelectionControl: SelectionControl<SelectionControlProps>;

export interface TextIconProps {
    size?: sizes;
    text: string;
    [key: string]: any;
}

interface TextIcon<P> extends React.FunctionComponent<P> {
    sizes: sizesMap;
}

export const TextIcon: TextIcon<TextIconProps>;

export interface TextWithOptionalIconProps {
    children: React.ReactNode;
    direction?: directions;
    iconType?: iconTypes;
    isCapitalized?: boolean;
    isTruncatable?: boolean;
    [key: string]: any;
}

interface TextWithOptionalIcon<P> extends React.FunctionComponent<P> {
    directions: directionsMap;
    iconTypes: iconTypesMap;
}

export const TextWithOptionalIcon: TextWithOptionalIcon<TextWithOptionalIconProps>;

export interface TooltipProps {
    elevations?: elevations;
    position?: positions;
    transitionDuration?: number;
    transitionEasing?: easings;
}

interface Tooltip<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    positions: positionsMap;
    transitionEasings: easingsMap;
}

export const Tooltip: Tooltip<TooltipProps>;

// Organisms
export interface ChipStatusProps {
    children: React.ReactNode;
    direction?: directions;
    isDisabled?: boolean;
    onClick: (...args: any[]) => any;
    variant?: 'DESELECTED' | 'INDETERMINATE' | 'SELECTED';
}

interface ChipStatus<P> extends React.FunctionComponent<P> {
    directions: directionsMap;
    iconTypes: iconTypesMap;
    variants: {
        [variant in ChipStatusProps['variant']]: variant;
    }
}

export const ChipStatus: ChipStatus<ChipStatusProps>;

export interface ContainerContentProps {
    children: React.ReactNode;
    elevation?: elevations;
    position?: positions;
}

interface ContainerContent<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    positions: positionsMap;
}

export const ContainerContent: ContainerContent<ContainerContentProps>;

export interface DateRangePickerProps {
    buttonCancelText?: string;
    buttonConfirmText?: string;
    daySize?: number;
    displayFormat?: string;
    endDate?: moment.Moment;
    endDateId: string;
    endDatePlaceholderText?: string;
    focusedInput?: ReactDates.FocusedInputShape;
    footerText?: string;
    hasYearSelector?: boolean;
    isDayHighlighted?: (...args: any[]) => any;
    isDisabled?: boolean;
    isOutsideRange?: (...args: any[]) => any;
    keepOpenOnDateSelect?: boolean;
    label: string;
    labelMonth?: string;
    labelYear?: string;
    minimumNights?: number;
    numberOfMonths?: number;
    onCancel?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    onDatesChange: (...args: any[]) => any;
    onFocusChange: (...args: any[]) => any;
    orientation?: ReactDates.OrientationShape;
    shortcuts?: {
        onClick: (...args: any[]) => any;
        text: string;
    }[];
    shortcutsText?: string;
    startDate?: moment.Moment;
    startDateId: string;
    startDatePlaceholderText?: string;
    yearCount?: number;
}

export const DateRangePicker: React.FunctionComponent<DateRangePickerProps>;

export interface DialogProps {
    bodyAlignment?: alignments;
    buttonCancelText?: string;
    buttonClosePosition: 'LEFT' | 'RIGHT';
    buttonConfirmText: string;
    children: React.ReactNode;
    elevation?: elevations;
    footerText?: string;
    hasButtonClose?: boolean;
    hasOverlay?: boolean;
    header?: string;
    headerAlignment?: alignments;
    isVisible: boolean;
    onCancel?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onConfirm: (...args: any[]) => any;
    transitionDuration?: number;
    transitionEasing?: easings;
    width?: string;
}

interface Dialog<P> extends React.FunctionComponent<P> {
    bodyAlignments: alignmentsMap;
    buttonClosePositions: {
        [buttonClosePosition in DialogProps['buttonClosePosition']]: buttonClosePosition;
    }
    elevations: elevationsMap;
    headerAlignments: alignmentsMap;
    transitionEasings: easingsMap;
}

export const Dialog: Dialog<DialogProps>;

export interface DropdownMultiSelectProps {
    buttonCancelText?: string;
    buttonConfirmText: string;
    elevation?: elevations;
    errorMessage?: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen: boolean;
    isValid?: boolean;
    label?: string;
    maxHeight?: string;
    name: string;
    onCancel: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onConfirm: (...args: any[]) => any;
    optionAll?: React.ReactNode;
    options: React.ReactNode;
    placeholder?: string;
    value: string;
    variant?: dropdownVariants;
}

interface DropdownMultiSelect<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
    optionAllTexts: {
        INDETERMINATE: 'Indeterminate';
        OFF: 'Off';
        ON: 'On';
    }
    variants: dropdownVariantsMap;
}

export const DropdownMultiSelect: DropdownMultiSelect<DropdownMultiSelectProps>;

export interface HeaderProps {
    children?: React.ReactNode;
    elevation?: elevations;
    isInverted?: boolean;
    onBack?: (...args: any[]) => any;
    onToggleMenu?: (...args: any[]) => any;
    title: string;
}

interface Header<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
}

export const Header: Header<HeaderProps>;

export interface InputPasswordProps {
    errorMessage?: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    isVisibleDefault?: boolean;
    label: string;
    name: string;
    onChange: (...args: any[]) => any;
    value?: string;
    variant?: inputVariants;
}

interface InputPassword<P> extends React.FunctionComponent<P> {
    variants: inputVariantsMap;
}

export const InputPassword: InputPassword<InputPasswordProps>;

export interface ModalProps {
    children: React.ReactNode;
    isVisible: boolean;
    onBack?: (...args: any[]) => any;
    options?: React.ReactNode;
    title: string;
    transitionDuration?: number;
    transitionEasings?: easings;
}

interface Modal<P> extends React.FunctionComponent<P> {
    transitionEasings: easingsMap;
}

export const Modal: Modal<ModalProps>;

export interface PaginatorProps {
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
    }
    pageSizes?: number[] | string[];
    texts: {
        page: string;
        pageGoto: string;
        pageOf: string;
        resultsOf: string;
        rowsPerPage: string;
        show: string;
    }
    useResultsOfText?: boolean;
}

export const Paginator: React.FunctionComponent<PaginatorProps>;

export interface SingleDatePickerProps {
    date?: moment.Moment;
    daySize?: number;
    displayFormat?: string;
    hasYearSelector?: boolean;
    id: string;
    isDayHighlighted?: (...args: any[]) => any;
    isDisabled?: boolean;
    isFocused: (...args: any[]) => any;
    isOutsideRange?: (...args: any[]) => any;
    keepOpenOnDateSelect?: boolean;
    label: string;
    labelMonth?: string;
    labelYear?: string;
    numberOfMonths?: number;
    onClose?: (...args: any[]) => any;
    onDateChange: (...args: any[]) => any;
    onFocusChange: (...args: any[]) => any;
    orientation?: ReactDates.OrientationShape;
    placeholder?: string;
    yearCount?: number;
}

export const SingleDatePicker: React.FunctionComponent<SingleDatePickerProps>;

export interface TableProps {
    caption?: string;
    debug?: boolean;
    elevation?: elevations;
    footerComponent?: React.ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: {
        getTableBodyProps: (...args: any[]) => any;
        getTableProps: (...args: any[]) => any;
        headerGroups: any[];
        prepareRow: (...args: any[]) => any;
    }
    isFullWidth?: boolean;
    onClickRow?: (...args: any[]) => any;
    pagingComponent?: React.ReactNode;
    texts?: {
        toggleSortTooltip?: string;
    }
}

interface Table<P> extends React.FunctionComponent<P> {
    elevations: elevationsMap;
}

export const Table: Table<TableProps>;

export interface ToolbarProps {
    children?: React.ReactNode;
    isInverted?: boolean;
}

export const Toolbar: React.FunctionComponent<ToolbarProps>;
