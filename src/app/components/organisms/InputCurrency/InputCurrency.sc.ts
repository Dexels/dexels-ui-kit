import styled, { css, SimpleInterpolation } from 'styled-components';
import { InputVariant } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';

export const StyledInputCurrency = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

interface CurrencySymbolProps {
    isDisabled: boolean;
    variant: InputVariant;
}

export const CurrencySymbol = styled.div<CurrencySymbolProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    position: absolute;
    margin: 0;
    outline: none;
    border: 0;
    background-color: transparent;

    ${({ variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            top: 0;
            left: 0;
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            top: 13px;
            left: ${theme.spacing(1)};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}
`;
