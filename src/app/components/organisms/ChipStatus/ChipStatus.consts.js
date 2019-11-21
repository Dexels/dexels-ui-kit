import { DIRECTIONS } from '../../../utils/constants';
import { ICON_TYPES } from '../../atoms/Icon/Icon.consts';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const CHIP_STATUS_DIRECTIONS = DIRECTIONS;

export const CHIP_STATUS_ICON_TYPES = ICON_TYPES;

export const CHIP_STATUS_VARIANTS = mapArrayToObject(['DESELECTED', 'INDETERMINATE', 'SELECTED']);
