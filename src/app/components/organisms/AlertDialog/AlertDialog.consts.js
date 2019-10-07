import { ALIGNMENTS, DIRECTIONS, ELEVATIONS } from '../../../utils/constants';
import {
    black,
    purple100,
    sl100,
    sl5,
    white,
} from '../../../styles/colors/colors';

export const ALERT_DIALOG_THEME = {
    bodyBackgroundColor: white,
    bodyColor: sl100,
    borderRadius: '8px',
    buttonCloseBackgroundColor: 'transparent',
    buttonCloseBackgroundColorHover: 'transparent',
    buttonCloseColor: black,
    buttonCloseColorHover: white,
    buttonCloseSize: '24px',
    footerBackgroundColor: sl5,
    headerBackgroundColor: purple100,
    headerColor: white,
};

export const ALERT_DIALOG_ALIGNMENTS = ALIGNMENTS;

export const ALERT_DIALOG_DIRECTIONS = DIRECTIONS;

export const ALERT_DIALOG_ELEVATIONS = ELEVATIONS;
