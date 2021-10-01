import { IconWrapper, StyledIcon } from './IconCustomizable.sc';
import React, { FunctionComponent } from 'react';
import { IconCustomizableProps } from './types';

export const IconCustomizable: FunctionComponent<IconCustomizableProps> = ({
    iconColor,
    iconSize,
    iconType,
    isDisabled = false,
    isRotating = false,
    className,
}) => (
    <IconWrapper className={className} iconColor={iconColor} iconSize={iconSize} isDisabled={isDisabled}>
        <StyledIcon iconSize={iconSize} isRotating={isRotating} type={iconType} />
    </IconWrapper>
);

export default IconCustomizable;
