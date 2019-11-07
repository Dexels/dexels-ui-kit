import {
    DIRECTIONS,
    EASINGS,
    SIZES,
} from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const BUTTON_DIRECTIONS = DIRECTIONS;

export const BUTTON_EASINGS = EASINGS;

export const BUTTON_SIZES = {
    ...SIZES,
};

delete BUTTON_SIZES.XLARGE;

export const BUTTON_VARIANTS = mapArrayToObject(['FILLED', 'OUTLINE', 'TEXT_ONLY']);
