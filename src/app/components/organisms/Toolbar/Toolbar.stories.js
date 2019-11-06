import { boolean } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';
import Toolbar from './Toolbar';

export default { title: 'organisms/Toolbar' };

export const Configurable = () => {
    const isInverted = boolean('Is inverted', Toolbar.defaultProps.isInverted);

    return (
        <Toolbar isInverted={isInverted}>
            <ButtonIcon
                iconType={Icon.types.PLUS}
                key={1}
                onClick={() => {}}
            />
            <ButtonIcon
                iconType={Icon.types.SEARCH}
                key={2}
                onClick={() => {}}
            />
            <ButtonIcon
                iconType={Icon.types.SHARE}
                key={3}
                onClick={() => {}}
            />
            <ButtonIcon
                iconType={Icon.types.GEAR}
                key={4}
                onClick={() => {}}
            />
            <ButtonIcon
                iconType={Icon.types.ROUNDHELP}
                key={5}
                onClick={() => {}}
            />
            <Button
                iconType={Icon.types.ROUNDINFO}
                key={6}
                onClick={() => {}}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
            <Button
                iconType={Icon.types.ROUNDINFO}
                key={7}
                onClick={() => {}}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
        </Toolbar>
    );
};
