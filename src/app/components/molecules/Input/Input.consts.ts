import { INPUT_VARIANTS } from '../../../utils/constants';
import { InputTypesMap } from './types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const INPUT_TYPES = mapArrayToObject([
    'EMAIL',
    'NUMBER',
    'PASSWORD',
    'TEL',
    'TEXT',
], true) as InputTypesMap;

export { INPUT_VARIANTS };
