import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../../types';
import getElevation from '../../../../styles/mixins/getElevation';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledFileCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${({ theme }): string => theme.spacing(2)};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.shades.seven};
    padding: ${({ theme }): string => theme.spacing(2)};
    min-height: 80px;
`;

StyledFileCard.defaultProps = {
    theme: themeBasic,
};

export const ImageWrapper = styled.div`
    ${getElevation(Elevation.LEVEL_1)}
    flex: 0 0 auto;
    border-radius: ${({ theme }): string => theme.spacing(1)};
    width: ${({ theme }): string => theme.spacing(7)};
    height: ${({ theme }): string => theme.spacing(7)};

    img {
        display: block;
        border-radius: ${({ theme }): string => theme.spacing(1)};
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
interface IconWrapperProps {
    isInvalid?: boolean;
    isLoading: boolean;
}
export const IconWrapper = styled.div<IconWrapperProps>`
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isLoading, theme }): SimpleInterpolation =>
        isLoading &&
        css`
            margin: ${theme.spacing(0, 1, 0, 0)};
        `}

    ${({ isLoading, theme }): SimpleInterpolation =>
        !isLoading &&
        css`
            margin: ${theme.spacing(0, 0, 1.25)};
        `}

    ${({ isInvalid, theme }): SimpleInterpolation =>
        isInvalid &&
        css`
            color: ${theme.colorInvalid};
        `}
`;
export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: flex-start;
    padding-left: ${({ theme }): string => theme.spacing(2)};
`;
export interface TitleProps {
    isInvalid: boolean;
}

export const Title = styled.div<TitleProps>`
    ${({ theme }): string => theme.textStyling('buttonLarge')}
    color: ${({ theme }): string => theme.colorText.primary};
    font-weight: 600;

    ${({ isInvalid, theme }): SimpleInterpolation =>
        isInvalid &&
        css`
            color: ${theme.colorInvalid};
        `}
`;
export const Subtitle = styled.div`
    ${({ theme }): string => theme.textStyling('body2')}
    color: ${({ theme }): string => theme.shades.one};
`;

export const ButtonWrapper = styled.div`
    justify-content: flex-end;

    button {
        color: ${({ theme }): string => theme.colorInvalid};
    }
`;

export const InputWrapper = styled.div`
    flex-basis: 100%;
    padding-top: ${({ theme }): string => theme.spacing(2)};
`;
