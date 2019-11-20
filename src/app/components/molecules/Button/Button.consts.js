import { DIRECTIONS, EASINGS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const BUTTON_DIRECTIONS = DIRECTIONS;

export const BUTTON_EASINGS = EASINGS;

export const BUTTON_SIZES = mapArrayToObject([
    'LARGE',
    'MEDIUM',
    'SMALL',
]);

export const BUTTON_VARIANTS = mapArrayToObject(['FILLED', 'OUTLINE', 'TEXT_ONLY']);
