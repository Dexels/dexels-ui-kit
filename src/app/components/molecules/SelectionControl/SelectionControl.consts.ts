import { DIRECTIONS, EASINGS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';
import { SelectionControlTypesMap } from './types';

export const SELECTION_CONTROL_DIRECTIONS = DIRECTIONS;

export const SELECTION_CONTROL_EASINGS = EASINGS;

export const SELECTION_CONTROL_TYPES = mapArrayToObject([
    'CHECKBOX',
    'RADIO',
], true) as SelectionControlTypesMap;
