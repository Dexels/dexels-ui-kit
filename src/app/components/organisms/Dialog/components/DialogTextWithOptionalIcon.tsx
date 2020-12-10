import { IconSize, IconType } from '../../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyledTextWithOptionalIcon } from './DialogTextWithOptionalIcon.sc';

export interface DialogTextWithOptionalIconProps {
    iconType?: IconType;
    title: ReactNode;
}

export const DialogTextWithOptionalIcon: FunctionComponent<DialogTextWithOptionalIconProps> = ({ iconType, title }) => (
    <StyledTextWithOptionalIcon iconSize={IconSize.XLARGE} iconType={iconType}>
        {title}
    </StyledTextWithOptionalIcon>
);

export default DialogTextWithOptionalIcon;
