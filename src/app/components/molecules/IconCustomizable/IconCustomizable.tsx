import { IconWrapper, StyledIcon } from './IconCustomizable.sc';
import React, { FunctionComponent } from 'react';
import { IconCustomizableProps } from './types';

export const IconCustomizable: FunctionComponent<IconCustomizableProps> = ({
    iconColor,
    iconSize,
    iconType,
    className,
}) => (
    <IconWrapper className={className} iconColor={iconColor} iconSize={iconSize}>
        <StyledIcon type={iconType} />
    </IconWrapper>
);

export default IconCustomizable;
