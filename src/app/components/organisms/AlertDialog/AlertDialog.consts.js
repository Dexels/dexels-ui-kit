import { ALIGNMENTS, DIRECTIONS, ELEVATIONS } from '../../../utils/constants';
import {
    black,
    purple100,
    sl100,
    sl5,
    white,
} from '../../../styles/colors/colors';

export const ALERT_DIALOG_THEME = {
    backgroundColorBody: white,
    backgroundColorFooter: sl5,
    backgroundColorHeader: purple100,
    borderRadius: '8px',
    closeButtonBackgroundColor: 'transparent',
    closeButtonBackgroundColorHover: 'transparent',
    closeButtonColor: black,
    closeButtonColorHover: white,
    closeButtonSize: '18px',
    colorBody: sl100,
    colorHeader: white,
};

export const ALERT_DIALOG_ALIGNMENTS = ALIGNMENTS;

export const ALERT_DIALOG_DIRECTIONS = DIRECTIONS;

export const ALERT_DIALOG_ELEVATIONS = ELEVATIONS;
