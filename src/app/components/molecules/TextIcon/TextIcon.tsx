import React, { FunctionComponent } from 'react';
import { Size } from '../../../types';
import { StyledTextIcon } from './TextIcon.sc';

export interface TextIconProps {
    className?: string;
    size?: Size;
    text: string;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const TextIcon: FunctionComponent<TextIconProps> = ({
    className,
    size = Size.LARGE,
    text,
    ...rest
}) => (
    <StyledTextIcon className={className} size={size} {...rest}>
        {text}
    </StyledTextIcon>
);

export default TextIcon;
