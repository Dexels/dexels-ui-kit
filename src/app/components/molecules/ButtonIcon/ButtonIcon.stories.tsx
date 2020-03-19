import { boolean, select } from '@storybook/addon-knobs';
import { IconType, Size } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './ButtonIcon';

export default { title: 'molecules/ButtonIcon' };

export const Configurable: FunctionComponent = () => (
    <ButtonIcon
        iconType={select('Type', IconType, IconType.CHEVRONDOWN)}
        isDisabled={boolean('Is disabled', false)}
        isInverted={boolean('Is inverted', false)}
        onClick={action('On click')}
        size={select('Size', Size, Size.LARGE)}
    />
);
