import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './ButtonIcon';
import React from 'react';

export default { title: 'molecules/ButtonIcon' };

export const Configurable = () => (
    <ButtonIcon
        iconType={select('Type', ButtonIcon.iconTypes, ButtonIcon.defaultProps.iconType)}
        isDisabled={boolean('Is disabled', ButtonIcon.defaultProps.isDisabled)}
        isInverted={boolean('Is inverted', ButtonIcon.defaultProps.isInverted)}
        onClick={action('On click')}
        size={select('Size', ButtonIcon.sizes, ButtonIcon.defaultProps.size)}
    />
);
