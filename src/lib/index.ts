/* eslint-disable sort-imports */
// The sort-imports ESLint rule is disabled in this file so we can group the import by folder
// Import the CSS
import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';

// Export common types
export * from '../app/types';

// Export atoms
export {
    Card,
    CardProps,
} from '../app/components/atoms/Card/Card';
export {
    ErrorMessage,
    ErrorMessageProps,
} from '../app/components/atoms/ErrorMessage/ErrorMessage';
export {
    Icon,
    IconProps,
} from '../app/components/atoms/Icon/Icon';
export {
    Label,
    LabelProps,
} from '../app/components/atoms/Label/Label';
export {
    StatusIndicator,
    StatusIndicatorProps,
} from '../app/components/atoms/StatusIndicator/StatusIndicator';

// Export molecules
export {
    Button,
    ButtonProps,
} from '../app/components/molecules/Button/Button';
export {
    ButtonIcon,
    ButtonIconProps,
} from '../app/components/molecules/ButtonIcon/ButtonIcon';
export {
    CardNoResults,
    CardNoResultsProps,
} from '../app/components/molecules/CardNoResults/CardNoResults';
export {
    CardStatus,
    CardStatusProps,
} from '../app/components/molecules/CardStatus/CardStatus';
export {
    Chip,
    ChipProps,
} from '../app/components/molecules/Chip/Chip';
export {
    DialogFooter,
    DialogFooterProps,
} from '../app/components/molecules/DialogFooter/DialogFooter';
export {
    Dropdown,
    DropdownProps,
    DropdownVariant,
} from '../app/components/molecules/Dropdown';
export {
    FormElementLabel,
    FormElementLabelProps,
} from '../app/components/molecules/FormElementLabel/FormElementLabel';
export {
    FullscreenLoader,
    FullscreenLoaderProps,
    FullscreenLoaderType,
} from '../app/components/molecules/FullscreenLoader';
export {
    Input,
    InputProps,
} from '../app/components/molecules/Input/Input';
export {
    Loader,
    LoaderProps,
} from '../app/components/molecules/Loader/Loader';
export {
    Overlay,
    OverlayProps,
} from '../app/components/molecules/Overlay/Overlay';
export {
    PanelStatus,
    PanelStatusProps,
} from '../app/components/molecules/PanelStatus/PanelStatus';
export {
    SelectionControl,
    SelectionControlProps,
    SelectionControlType,
} from '../app/components/molecules/SelectionControl';
export { Skeleton } from '../app/components/molecules/Skeleton/Skeleton';
export {
    TextIcon,
    TextIconProps,
} from '../app/components/molecules/TextIcon/TextIcon';
export {
    TextWithOptionalIcon,
    TextWithOptionalIconProps,
} from '../app/components/molecules/TextWithOptionalIcon/TextWithOptionalIcon';
export {
    Tooltip,
    TooltipProps,
} from '../app/components/molecules/Tooltip/Tooltip';

// Export organisms
export {
    ChipStatus,
    ChipStatusProps,
    ChipStatusVariant,
} from '../app/components/organisms/ChipStatus';
export {
    DateRangePicker,
    DateRangePickerProps,
} from '../app/components/organisms/DatePicker/DateRangePicker/DateRangePicker';
export {
    Dialog,
    DialogButtonClosePosition,
    DialogProps,
} from '../app/components/organisms/Dialog';
export {
    DropdownMultiSelect,
    DropdownMultiSelectProps,
    DropdownOptionAllTexts,
} from '../app/components/organisms/DropdownMultiSelect';
export {
    Header,
    HeaderProps,
} from '../app/components/organisms/Header/Header';
export {
    InputPassword,
    InputPasswordProps,
} from '../app/components/organisms/InputPassword/InputPassword';
export {
    Menu,
    MenuProps,
} from '../app/components/organisms/Menu/Menu';
export {
    Modal,
    ModalProps,
} from '../app/components/organisms/Modal/Modal';
export {
    Paginator,
    PaginatorProps,
    PaginatorTexts,
} from '../app/components/organisms/Table/Paginator/Paginator';
export {
    SingleDatePicker,
    SingleDatePickerProps,
} from '../app/components/organisms/DatePicker/SingleDatePicker/SingleDatePicker';
export {
    Table,
    TableProps,
} from '../app/components/organisms/Table/Table';
export {
    Tab,
    Tabs,
    TabsProps,
} from '../app/components/organisms/Tabs/Tabs';
export {
    Toolbar,
    ToolbarProps,
} from '../app/components/organisms/Toolbar/Toolbar';

// Export theming
export { themeBasic } from '../app/styles/theming/themes/basic';
export { themeDark } from '../app/styles/theming/themes/dark';
export { createDuiTheme } from '../app/styles/theming/createDuiTheme';

// Export mixins
export { getAlignment } from '../app/styles/mixins/getAlignment';
export { getElevation } from '../app/styles/mixins/getElevation';
export { getPosition } from '../app/styles/mixins/getPosition';
export { getStatusColor } from '../app/styles/mixins/getStatusColor';
export { getStatusIndicator } from '../app/styles/mixins/getStatusIndicator';
export {
    rippleEffect,
    rippleEffectInit,
    rippleEffectReset,
} from '../app/styles/mixins/rippleEffect';
export { setBoxSizing } from '../app/styles/mixins/setBoxSizing';
export { setCentered } from '../app/styles/mixins/setCentered';
export { setTruncate } from '../app/styles/mixins/setTruncate';

// Export functions
export { areAllOptionsSelected } from '../app/utils/functions/arrayObjectFunctions';
export { cloneArray } from '../app/utils/functions/arrayFunctions';
export { hexToRgb, invertColor } from '../app/utils/functions/colorFunctions';
