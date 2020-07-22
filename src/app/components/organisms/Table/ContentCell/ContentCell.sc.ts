import styled, { css, SimpleInterpolation } from 'styled-components';
import { isEmpty } from '../../../../utils/functions/validateFunctions';

interface StyledContentCellProps {
    hasLineThrough: boolean;
    isBold: boolean;
    isCurrency: boolean;
    isDisabled: boolean;
    isImage: boolean;
    textColor: string;
    textLinesLimit: number;
}

export const StyledContentCell = styled.div<StyledContentCellProps>`
    ${({ theme }): string => theme.textStyling('body2')}
    color: ${({ theme }) => theme.colorTextBody.primary};

    ${({ textColor }): SimpleInterpolation =>
        !isEmpty(textColor) &&
        css`
            color: ${textColor};
        `}

    ${({ textLinesLimit }): SimpleInterpolation =>
        textLinesLimit &&
        css`
            /* stylelint-disable-next-line value-no-vendor-prefix */
            display: -webkit-box;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            hyphens: auto;
            -webkit-line-clamp: ${textLinesLimit};
            /* stylelint-disable-next-line property-no-vendor-prefix */
            -webkit-box-orient: vertical;
        `}

    ${({ hasLineThrough }): SimpleInterpolation =>
        hasLineThrough &&
        css`
            text-decoration: line-through;
        `}

    ${({ isCurrency }): SimpleInterpolation =>
        isCurrency &&
        css`
            text-align: end;
        `}

    ${({ isBold }): SimpleInterpolation =>
        isBold &&
        css`
            font-weight: 600;
        `}

    ${({ isDisabled, isImage, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};

            ${isImage &&
            css`
                opacity: 0.4;
            `}
        `}
`;

interface AmountWrapperProps {
    colorNegativeAmount: string;
    isNegativeCurrency: boolean;
}

export const AmountWrapper = styled.div<AmountWrapperProps>`
    ${({ colorNegativeAmount, isNegativeCurrency }): SimpleInterpolation =>
        isNegativeCurrency &&
        css`
            color: ${colorNegativeAmount};
        `}
`;

export const ImageWrapper = styled.div`
    flex: 0 0 auto;
    width: 24px;
    height: 24px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
