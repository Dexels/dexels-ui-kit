import {
    AlignmentsMap,
    DirectionsMap,
    DropdownVariantsMap,
    EasingsMap,
    ElevationsMap,
    InputVariantsMap,
    PlacementsMap,
    PositionsMap,
    SizesMap,
    StatusesMap,
} from '../types';
import mapArrayToObject from './mapArrayToObject';

export const ALIGNMENTS = mapArrayToObject([
    'CENTER',
    'LEFT',
    'RIGHT',
]) as AlignmentsMap;

export const DIRECTIONS = mapArrayToObject([
    'LTR',
    'RTL',
]) as DirectionsMap;

export const DROPDOWN_VARIANTS = mapArrayToObject([
    'COMPACT',
    'OUTLINE',
]) as DropdownVariantsMap;

export const EASINGS: EasingsMap = {
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
]) as ElevationsMap;

export const INPUT_VARIANTS = mapArrayToObject([
    'COMPACT',
    'OUTLINE',
]) as InputVariantsMap;

export const PLACEMENTS = mapArrayToObject([
    'BOTTOM',
    'LEFT',
    'RIGHT',
    'TOP',
], true) as PlacementsMap;

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
]) as PositionsMap;

export const SIZES = mapArrayToObject([
    'LARGE',
    'MEDIUM',
    'SMALL',
    'XLARGE',
]) as SizesMap;

export const STATUSES = mapArrayToObject([
    'ALERT',
    'DEFAULT',
    'DISABLED',
    'INVALID',
    'NONE',
    'VALID',
]) as StatusesMap;
