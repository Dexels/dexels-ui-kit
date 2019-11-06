import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export default { title: 'organisms/Header' };

export const Configurable = () => {
    const elevation = select('Elevation', Header.elevations, Header.defaultProps.elevation);
    const isInverted = boolean('Is inverted', Header.defaultProps.isInverted);
    const onBack = action('On back');
    const onToggleMenu = action('On toggle menu');
    const title = text('Header title', 'Wedstrijden');

    return (
        <Header
            elevation={elevation}
            isInverted={isInverted}
            onBack={onBack}
            onToggleMenu={onToggleMenu}
            title={title}
        >
            <ButtonIcon
                iconType={Icon.types.PLUS}
                onClick={action('On buttonicon PLUS')}
            />
            <ButtonIcon
                iconType={Icon.types.SEARCH}
                onClick={action('On buttonicon SEARCH')}
            />
            <ButtonIcon
                iconType={Icon.types.SHARE}
                onClick={action('On buttonicon SHARE')}
            />
            <ButtonIcon
                iconType={Icon.types.GEAR}
                onClick={action('On buttonicon GEAR')}
            />
            <ButtonIcon
                iconType={Icon.types.ROUNDHELP}
                onClick={action('On buttonicon ROUNDHELP')}
            />
            <Button
                iconType={Icon.types.ROUNDINFO}
                onClick={action('On button ROUNDINFO 1')}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
            <Button
                iconType={Icon.types.ROUNDINFO}
                onClick={action('On button ROUNDINFO 2')}
                size={Button.sizes.SMALL}
                variant={Button.variants.OUTLINE}
            >
                {'label'}
            </Button>
        </Header>
    );
};
