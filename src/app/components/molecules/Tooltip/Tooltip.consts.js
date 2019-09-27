import { ELEVATIONS, PLACEMENTS } from '../../../utils/constants';
import { sl100, sl25 } from '../../../styles/colors/colors';

export const TOOLTIP_ELEVATIONS = ELEVATIONS;

export const TOOLTIP_PLACEMENTS = PLACEMENTS;

export const TOOLTIP_THEME = {
    backgroundColor: sl100,
    borderRadius: '15px',
    colorPrimary: sl25,
    padding: '4px 8px 4px 8px',
    textStyles: {
        tooltip: {
            fontFamily: "'Roboto regular'",
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '18px',
        },
    },
};
