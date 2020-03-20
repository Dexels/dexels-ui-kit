import React, { FunctionComponent } from 'react';
import { IconType } from '../../../types';

export interface IconProps {
    children?: never;
    className?: string;
    type: IconType;
}

export const Icon: FunctionComponent<IconProps> = ({ className, type }) => (
    <span className={`${className ? `${className} ` : ''}ICON-${type}`} />
);

export default Icon;
