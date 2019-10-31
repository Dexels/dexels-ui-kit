import mapArrayToObject from './mapArrayToObject';

export const ALIGNMENTS = mapArrayToObject([
    'LEFT',
    'CENTER',
    'RIGHT',
]);

export const DIRECTIONS = mapArrayToObject([
    'LTR',
    'RTL',
]);

export const EASINGS = mapArrayToObject([
    'EASE',
    'EASE_IN',
    'EASE_IN_OUT',
    'EASE_OUT',
    'LINEAR',
    'NONE',
]);

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

export const INPUT_VARIANTS = mapArrayToObject([
    'COMPACT',
    'OUTLINE',
]);

export const POSITIONS = mapArrayToObject([
    'BOTTOM_CENTER',
    'BOTTOM_LEFT',
    'BOTTOM_RIGHT',
    'MIDDLE_CENTER',
    'MIDDLE_LEFT',
    'MIDDLE_RIGHT',
    'TOP_CENTER',
    'TOP_LEFT',
    'TOP_RIGHT',
]);

export const PLACEMENTS = mapArrayToObject([
    'BOTTOM',
    'LEFT',
    'RIGHT',
    'TOP',
]);

export const SIZES = mapArrayToObject([
    'L',
    'M',
    'S',
    'XL',
]);

export const STATUSES = mapArrayToObject([
    'ALERT',
    'DEFAULT',
    'DISABLED',
    'INVALID',
    'NONE',
    'VALID',
]);
