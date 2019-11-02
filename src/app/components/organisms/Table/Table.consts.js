import { ELEVATIONS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const TABLE_ELEVATIONS = ELEVATIONS;

export const TABLE_PAGE_SIZES = mapArrayToObject([
    5,
    10,
    20,
    50,
]);
