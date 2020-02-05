import { boolean, select } from '@storybook/addon-knobs';
import { IconType, Size } from '../../../types';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './ButtonIcon';
import React from 'react';

export default { title: 'molecules/ButtonIcon' };

export const Configurable = () => (
    <ButtonIcon
        iconType={select('Type', IconType, IconType.CHEVRONDOWN)}
        isDisabled={boolean('Is disabled', ButtonIcon.defaultProps.isDisabled)}
        isInverted={boolean('Is inverted', ButtonIcon.defaultProps.isInverted)}
        onClick={action('On click')}
        size={select('Size', Size, ButtonIcon.defaultProps.size)}
    />
);
