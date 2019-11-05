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
        </Header>
    );
};
