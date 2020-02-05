import { IconType } from '../../../types';
import React from 'react';

export interface IconProps {
    children?: never;
    className?: string;
    type: IconType;
}

export const Icon: React.FunctionComponent<IconProps> = ({ className, type }) => (
    <span className={`${className} ICON-${type}`} />
);

Icon.defaultProps = {
    className: '',
};

export default Icon;
