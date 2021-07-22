import styled, { css, SimpleInterpolation } from 'styled-components';
import { Icon } from '../../atoms/Icon/Icon';
import { IconCustomizableProps } from './types';

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

export const StyledIcon = styled(Icon)`
    display: block;
`;
