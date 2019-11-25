/* eslint-disable sort-imports */
// The sort-imports ESLint rule is disabled in this file so we can group the import by folder
// Import the CSS
import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';

// Import all components
// Atoms
import Card from '../app/components/atoms/Card/Card';
import ErrorMessage from '../app/components/atoms/ErrorMessage/ErrorMessage';
import Icon from '../app/components/atoms/Icon/Icon';
import Label from '../app/components/atoms/Label/Label';
import StatusIndicator from '../app/components/atoms/StatusIndicator/StatusIndicator';

// Molecules
import Button from '../app/components/molecules/Button/Button';
import ButtonIcon from '../app/components/molecules/ButtonIcon/ButtonIcon';
import CardNoResults from '../app/components/molecules/CardNoResults/CardNoResults';
import CardStatus from '../app/components/molecules/CardStatus/CardStatus';
import Chip from '../app/components/molecules/Chip/Chip';
import DialogFooter from '../app/components/molecules/DialogFooter/DialogFooter';
import Dropdown from '../app/components/molecules/Dropdown/Dropdown';
import FormElementLabel from '../app/components/molecules/FormElementLabel/FormElementLabel';
import Input from '../app/components/molecules/Input/Input';
import Overlay from '../app/components/molecules/Overlay/Overlay';
import SelectionControl from '../app/components/molecules/SelectionControl/SelectionControl';
import TextIcon from '../app/components/molecules/TextIcon/TextIcon';
import TextWithOptionalIcon from '../app/components/molecules/TextWithOptionalIcon/TextWithOptionalIcon';
import Tooltip from '../app/components/molecules/Tooltip/Tooltip';

// Organisms
import ChipStatus from '../app/components/organisms/ChipStatus/ChipStatus';
import ContainerContent from '../app/components/organisms/ContainerContent/ContainerContent';
import DateRangePicker from '../app/components/organisms/DatePicker/DateRangePicker/DateRangePicker';
import Dialog from '../app/components/organisms/Dialog/Dialog';
import DropdownMultiSelect from '../app/components/organisms/DropdownMultiSelect/DropdownMultiSelect';
import Header from '../app/components/organisms/Header/Header';
import InputPassword from '../app/components/organisms/InputPassword/InputPassword';
import Modal from '../app/components/organisms/Modal/Modal';
import SingleDatePicker from '../app/components/organisms/DatePicker/SingleDatePicker/SingleDatePicker';
import Table from '../app/components/organisms/Table/Table';
import Tabs from '../app/components/organisms/Tabs/Tabs';
import Toolbar from '../app/components/organisms/Toolbar/Toolbar';

// Theming
import { themeBasic } from '../app/styles/theming/themes/basic';
import { themeDark } from '../app/styles/theming/themes/dark';
import { themePropTypes } from '../app/styles/theming/themes/themePropTypes';
import createDuiTheme from '../app/styles/theming/createDuiTheme';

export {
    // Export atoms
    Card,
    ErrorMessage,
    Icon,
    Label,
    StatusIndicator,
    // Export molecules
    Button,
    ButtonIcon,
    CardNoResults,
    CardStatus,
    Chip,
    DialogFooter,
    Dropdown,
    FormElementLabel,
    Input,
    Overlay,
    SelectionControl,
    TextIcon,
    TextWithOptionalIcon,
    Tooltip,
    // Export organisms
    ChipStatus,
    ContainerContent,
    DateRangePicker,
    Dialog,
    DropdownMultiSelect,
    Header,
    InputPassword,
    Modal,
    SingleDatePicker,
    Table,
    Tabs,
    Toolbar,
    // Export theming
    themeBasic,
    themeDark,
    themePropTypes,
    createDuiTheme,
};
