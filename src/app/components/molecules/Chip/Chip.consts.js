import { DIRECTIONS, EASINGS, SIZES } from '../../../utils/constants';

export const CHIP_DIRECTIONS = DIRECTIONS;

export const CHIP_EASINGS = EASINGS;

export const CHIP_ICON_SIZES = {
    ...SIZES,
};

delete CHIP_ICON_SIZES.XLARGE;
