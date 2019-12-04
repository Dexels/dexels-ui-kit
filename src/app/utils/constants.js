import mapArrayToObject from './mapArrayToObject';

export const ALIGNMENTS = mapArrayToObject([
    'CENTER',
    'LEFT',
    'RIGHT',
]);

export const DIRECTIONS = mapArrayToObject([
    'LTR',
    'RTL',
]);

export const DROPDOWN_VARIANTS = mapArrayToObject([
    'COMPACT',
    'OUTLINE',
]);

export const EASINGS = {
    EASE: 'ease',
    EASE_IN: 'ease-in',
    EASE_IN_OUT: 'ease-in-out',
    EASE_OUT: 'ease-out',
    LINEAR: 'linear',
    NONE: 'none',
};

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

export const PLACEMENTS = mapArrayToObject([
    'BOTTOM',
    'LEFT',
    'RIGHT',
    'TOP',
], true);

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

export const SIZES = mapArrayToObject([
    'LARGE',
    'MEDIUM',
    'SMALL',
    'XLARGE',
]);

export const STATUSES = mapArrayToObject([
    'ALERT',
    'DEFAULT',
    'DISABLED',
    'INVALID',
    'NONE',
    'VALID',
]);
