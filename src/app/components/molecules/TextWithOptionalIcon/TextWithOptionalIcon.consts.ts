import { DIRECTIONS, SIZES } from '../../../utils/constants';

export const TEXT_WITH_OPTIONAL_ICON_DIRECTIONS = DIRECTIONS;

export const TEXT_WITH_OPTIONAL_ICON_SIZES = {
    ...SIZES,
};

delete TEXT_WITH_OPTIONAL_ICON_SIZES.XLARGE;
