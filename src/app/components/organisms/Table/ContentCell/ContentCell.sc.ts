import styled, { css, SimpleInterpolation } from 'styled-components';

interface StyledContentCellProps {
    hasContentLimit: boolean;
    hasLineThrough: boolean;
    isBold: boolean;
    isCurrency: boolean;
    isDisabled: boolean;
    isImage: boolean;
}

export const StyledContentCell = styled.div<StyledContentCellProps>`
    ${({ theme }): string => theme.textStyling('body2')}

    ${({ hasContentLimit }): SimpleInterpolation =>
        hasContentLimit &&
        css`
            word-break: break-word;
            hyphens: auto;
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
