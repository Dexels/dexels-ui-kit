import { DIRECTIONS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const STATUSCHIP_DIRECTIONS = DIRECTIONS;

export const STATUSCHIP_VARIANTS = mapArrayToObject(['DESELECTED', 'HANDLE_ALL', 'INDETERMINATE', 'SELECTED']);
