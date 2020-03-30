import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, Elevation, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';

export default { title: 'organisms/Header' };

export const Configurable: FunctionComponent = () => {
    const elevation = select('Elevation', Elevation, Elevation.LEVEL_1);
    const isInverted = boolean('Is inverted', false);
    const onBack = action('On back');
    const onToggleMenu = action('On toggle menu');
    const title = text('Header title', 'Wedstrijden');

    return (
        <Header
            buttons={[
                {
                    iconType: IconType.MENU,
                    onClick: onToggleMenu,
                },
                {
                    iconType: IconType.CHEVRONLEFT,
                    onClick: onBack,
                },
            ]}
            elevation={elevation}
            isInverted={isInverted}
            title={title}
        >
            <ButtonIcon iconType={IconType.PLUS} onClick={action('On buttonicon PLUS')} />
            <ButtonIcon iconType={IconType.SEARCH} onClick={action('On buttonicon SEARCH')} />
            <ButtonIcon iconType={IconType.SHARE} onClick={action('On buttonicon SHARE')} />
            <ButtonIcon iconType={IconType.GEAR} onClick={action('On buttonicon GEAR')} />
            <ButtonIcon iconType={IconType.ROUNDHELP} onClick={action('On buttonicon ROUNDHELP')} />
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
