import { Sizes, SizesMap } from '../../../types';
import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';
import { TEXT_ICON_SIZES } from './TextIcon.consts';

export interface TextIconProps {
    className?: string;
    size?: Sizes;
    text: string;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface TextIconComponent extends React.FunctionComponent<TextIconProps> {
    sizes: SizesMap;
}

export const TextIcon: TextIconComponent = ({
    className,
    size,
    text,
    ...rest
}) => (
    <StyledTextIcon className={className} size={size} {...rest}>
        {text}
    </StyledTextIcon>
);

TextIcon.sizes = TEXT_ICON_SIZES;

TextIcon.defaultProps = {
    className: '',
    size: TextIcon.sizes.LARGE,
};

export default TextIcon;
