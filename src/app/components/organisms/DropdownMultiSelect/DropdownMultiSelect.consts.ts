import { DROPDOWN_VARIANTS, ELEVATIONS } from '../../../utils/constants';
import { DropdownOptionAllTextsMap } from './types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const DROPDOWN_MULTISELECT_ELEVATIONS = ELEVATIONS;

export const DROPDOWN_MULTISELECT_VARIANTS = DROPDOWN_VARIANTS;

export const DROPDOWN_OPTION_ALL_TEXTS = mapArrayToObject([
    'INDETERMINATE',
    'OFF',
    'ON',
], true) as DropdownOptionAllTextsMap;
