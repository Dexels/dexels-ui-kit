import React from 'react';
import { Size } from '../../../types';
import { StyledTextIcon } from './TextIcon.sc';

export interface TextIconProps {
    className?: string;
    size?: Size;
    text: string;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

export const TextIcon: React.FunctionComponent<TextIconProps> = ({
    className,
    size,
    text,
    ...rest
}) => (
    <StyledTextIcon className={className} size={size} {...rest}>
        {text}
    </StyledTextIcon>
);

TextIcon.defaultProps = {
    className: '',
    size: Size.LARGE,
};

export default TextIcon;
