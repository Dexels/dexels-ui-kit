/* eslint-disable typescript-sort-keys/string-enum */
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Elevation } from '../../types';

export const getElevation = (level = Elevation.LEVEL_1): FlattenSimpleInterpolation => {
    switch (level) {
        case Elevation.LEVEL_0:
            return css`
                box-shadow: unset;
            `;

        case Elevation.LEVEL_1:
            return css`
                box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
                    0 1px 3px 0 rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_2:
            return css`
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
                    0 1px 5px 0 rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_3:
            return css`
                box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12),
                    0 1px 8px 0 rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_4:
            return css`
                box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_6:
            return css`
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_8:
            return css`
                box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_12:
            return css`
                box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12),
                    0 7px 8px -4px rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_16:
            return css`
                box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
                    0 8px 10px -5px rgba(0, 0, 0, 0.2);
            `;

        case Elevation.LEVEL_24:
            return css`
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.2);
            `;

        default:
            return css`
                box-shadow: none;
            `;
    }
};

export default getElevation;
