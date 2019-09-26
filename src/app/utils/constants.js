import mapArrayToObject from './mapArrayToObject';

export const DIRECTIONS = mapArrayToObject(['LTR', 'RTL']);

/* When adding an option (or removing), check the elevations file for adding/removing css values */
export const ELEVATIONS = mapArrayToObject([
    'LEVEL_0',
    'LEVEL_1',
    'LEVEL_2',
    'LEVEL_3',
    'LEVEL_4',
    'LEVEL_6',
    'LEVEL_8',
    'LEVEL_12',
    'LEVEL_16',
    'LEVEL_24',
]);

export const POSITIONS = mapArrayToObject([
    'TOP_LEFT',
    'TOP_CENTER',
    'TOP_RIGHT',
    'MIDDLE_LEFT',
    'MIDDLE_CENTER',
    'MIDDLE_RIGHT',
    'BOTTOM_LEFT',
    'BOTTOM_CENTER',
    'BOTTOM_RIGHT',
]);

export const SIZES = mapArrayToObject(['LARGE', 'SMALL']);
