import { boolean } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';
import Toolbar from './Toolbar';

export default { title: 'organisms/Toolbar' };

export const Configurable = () => (
    <Toolbar
        isInverted={boolean('Is inverted', Toolbar.defaultProps.isInverted)}
    >
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
            variant={ButtonIcon.variants.DEFAULT}
        />
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            key={2}
            onClick={() => {}}
            variant={ButtonIcon.variants.DEFAULT}
        />
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
            variant={ButtonIcon.variants.DEFAULT}
        />
        <ButtonIcon
            iconType={Icon.types.SETTINGS}
            key={4}
            onClick={() => {}}
            variant={ButtonIcon.variants.DEFAULT}
        />
        <ButtonIcon
            iconType={Icon.types.HELP}
            key={5}
            onClick={() => {}}
            variant={ButtonIcon.variants.DEFAULT}
        />
        <Button
            iconType={Icon.types.INFO}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
        >
            {'label'}
        </Button>
        <Button
            iconType={Icon.types.INFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
        >
            {'label'}
        </Button>
    </Toolbar>
);
