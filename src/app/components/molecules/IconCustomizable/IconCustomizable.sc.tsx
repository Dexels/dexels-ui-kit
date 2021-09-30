import styled, { css, keyframes, SimpleInterpolation } from 'styled-components';
import { Icon } from '../../atoms/Icon/Icon';
import { IconCustomizableProps } from './types';

const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

export interface IconWrapperProps extends Pick<IconCustomizableProps, 'iconSize' | 'iconColor' | 'isDisabled'> {}

export const IconWrapper = styled.div<IconWrapperProps>`
    display: block;
    ${({ iconColor }): SimpleInterpolation =>
        iconColor &&
        css`
            color: ${iconColor};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    font-size: ${({ iconSize }): string => `${iconSize}px`};
`;

export interface StyledIconProps extends Pick<IconCustomizableProps, 'iconSize' | 'isRotating'> {}

export const StyledIcon = styled(Icon)<StyledIconProps>`
    display: block;

    ${({ iconSize, isRotating }): SimpleInterpolation =>
        isRotating &&
        css`
            animation: ${loaderAnimation} 2s infinite linear;
            width: ${iconSize}px;
        `}
`;
