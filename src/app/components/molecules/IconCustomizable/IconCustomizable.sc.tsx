import styled, { css, SimpleInterpolation } from 'styled-components';
import { IconCustomizableProps } from './types';

export interface IconWrapperProps extends Pick<IconCustomizableProps, 'iconSize' | 'iconColor'> {}

export const IconWrapper = styled.div<IconWrapperProps>`
    ${({ iconColor }): SimpleInterpolation =>
        iconColor &&
        css`
            color: ${iconColor};
        `}

    font-size: ${({ iconSize }): string => `${iconSize}px`};
`;

export default IconWrapper;
