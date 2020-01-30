import { action } from '@storybook/addon-actions';
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
                onClick={action('On buttonicon PLUS')}
            />
            <ButtonIcon
                iconType={Icon.types.SEARCH}
                key={2}
                onClick={action('On buttonicon SEARCH')}
            />
            <ButtonIcon
                iconType={Icon.types.SHARE}
                key={3}
                onClick={action('On buttonicon SHARE')}
            />
            <ButtonIcon
                iconType={Icon.types.GEAR}
                key={4}
                onClick={action('On buttonicon GEAR')}
            />
            <ButtonIcon
                iconType={Icon.types.ROUNDHELP}
                key={5}
                onClick={action('On buttonicon ROUNDHELP')}
            />
            <Button
                iconType={Icon.types.ROUNDINFO}
                key={6}
                onClick={action('On buttonicon ROUNDINFO')}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
            <Button
                iconType={Icon.types.ROUNDINFO}
                key={7}
                onClick={action('On buttonicon ROUNDINFO')}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
        </Toolbar>
    );
};
