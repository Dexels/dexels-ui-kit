import { INPUT_VARIANTS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const INPUT_TYPES = mapArrayToObject([
    'EMAIL',
    'NUMBER',
    'PASSWORD',
    'TEL',
    'TEXT',
], true);

export { INPUT_VARIANTS };
