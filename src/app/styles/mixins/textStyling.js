import { css } from 'styled-components';
import mapArrayToObject from '../../utils/mapArrayToObject';

export const TEXT_STYLING_SIZES = mapArrayToObject([
    'BODY1',
    'BODY2',
    'BODY3',
    'BUTTON_LARGE',
    'BUTTON_SMALL',
    'CAPTION',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
]);

// This function will return text styling based on the size you pass to it
// The default size will be BODY1
const textStyling = (size) => {
    if (!Object.values(TEXT_STYLING_SIZES).includes(size)) {
        throw new Error('The text size you\'ve specified is not a supported size.');
    }

    switch (size) {
        case TEXT_STYLING_SIZES.BODY2:
            return (css`
                line-height: 18px;
                font-size: 14px;
            `);

        case TEXT_STYLING_SIZES.BODY3:
            return (css`
                line-height: 18px;
                font-size: 14px;
                font-weight: 300;
            `);

        case TEXT_STYLING_SIZES.BUTTON_SMALL:
            return (css`
                line-height: 16px;
                font-size: 14px;
                font-weight: 500;
            `);

        case TEXT_STYLING_SIZES.BUTTON_LARGE:
            return (css`
                line-height: 20px;
                font-size: 16px;
                font-weight: 500;
            `);

        case TEXT_STYLING_SIZES.CAPTION:
            return (css`
                line-height: 16px;
                font-size: 12px;
                font-weight: 300;
            `);

        case TEXT_STYLING_SIZES.H1:
            return (css`
                line-height: 30px;
                font-size: 24px;
                font-weight: 500;
            `);

        case TEXT_STYLING_SIZES.H2:
            return (css`
                line-height: 28px;
                font-size: 20px;
                font-weight: 500;
            `);

        case TEXT_STYLING_SIZES.H3:
            return (css`
                line-height: 24px;
                font-size: 16px;
                font-weight: 600;
            `);

        case TEXT_STYLING_SIZES.H4:
            return (css`
                line-height: 22px;
                font-size: 14px;
                font-weight: 600;
            `);

        default:
            return (css`
                line-height: 24px;
                font-size: 16px;
            `);
    }
};

export default textStyling;
