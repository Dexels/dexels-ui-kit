import React, { FunctionComponent } from 'react';
import { Size } from '../../../types';
import { StyledTextIcon } from './TextIcon.sc';

export interface TextIconProps {
    children?: never;
    className?: string;
    size?: Size;
    text: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TextIcon: FunctionComponent<TextIconProps & { [key: string]: any }> = ({
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
