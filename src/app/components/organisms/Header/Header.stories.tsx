import { boolean, select, text } from '@storybook/addon-knobs';
import {
    ButtonSize,
    ButtonVariant,
    Elevation,
    IconType,
} from '../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';
import React from 'react';

export default { title: 'organisms/Header' };

export const Configurable = () => {
    const elevation = select('Elevation', Elevation, Header.defaultProps.elevation);
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
                iconType={IconType.PLUS}
                onClick={action('On buttonicon PLUS')}
            />
            <ButtonIcon
                iconType={IconType.SEARCH}
                onClick={action('On buttonicon SEARCH')}
            />
            <ButtonIcon
                iconType={IconType.SHARE}
                onClick={action('On buttonicon SHARE')}
            />
            <ButtonIcon
                iconType={IconType.GEAR}
                onClick={action('On buttonicon GEAR')}
            />
            <ButtonIcon
                iconType={IconType.ROUNDHELP}
                onClick={action('On buttonicon ROUNDHELP')}
            />
            <Button
                iconType={IconType.ROUNDINFO}
                onClick={action('On button ROUNDINFO 1')}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.OUTLINE}
            >
                {'label'}
            </Button>
            <Button
                iconType={IconType.ROUNDINFO}
                onClick={action('On button ROUNDINFO 2')}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.OUTLINE}
            >
                {'label'}
            </Button>
        </Header>
    );
};