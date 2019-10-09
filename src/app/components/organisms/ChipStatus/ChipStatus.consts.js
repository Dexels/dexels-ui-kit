import { DIRECTIONS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const CHIP_STATUS_DIRECTIONS = DIRECTIONS;

export const CHIP_STATUS_VARIANTS = mapArrayToObject(['DESELECTED', 'INDETERMINATE', 'SELECTED']);
