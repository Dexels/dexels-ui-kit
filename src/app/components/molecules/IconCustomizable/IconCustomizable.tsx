import React, { FunctionComponent } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { IconCustomizableProps } from './types';
import { IconWrapper } from './IconCustomizable.sc';

export const IconCustomizable: FunctionComponent<IconCustomizableProps> = ({ iconColor, iconSize, iconType }) => (
    <IconWrapper iconColor={iconColor} iconSize={iconSize}>
        <Icon type={iconType} />
    </IconWrapper>
);

export default IconCustomizable;
