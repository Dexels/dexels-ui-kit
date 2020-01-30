import { IconTypes, IconTypesMap } from '../../../types';
import { ICON_TYPES } from './Icon.consts';
import React from 'react';

export interface IconProps {
    children?: never;
    className?: string;
    type: IconTypes;
}

interface IconComponent extends React.FunctionComponent<IconProps> {
    types: IconTypesMap;
}

export const Icon: IconComponent = ({ className, type }) => (
    <span className={`${className} ICON-${type}`} />
);

Icon.types = ICON_TYPES;

Icon.defaultProps = {
    className: '',
};

export default Icon;
