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
    const hasMenuOption = boolean('Has menu option', Header.defaultProps.hasMenuOption);
    const hasNavigateBackOption = boolean('Has navigate back option', Header.defaultProps.hasNavigateBackOption);
    const isInverted = boolean('Is inverted', Header.defaultProps.isInverted);
    const menuAction = action('On click');
    const navigateBackAction = action('On click');
    const title = text('Header title', 'Wedstrijden');

    return (
        <Header
            elevation={elevation}
            hasMenuOption={hasMenuOption}
            hasNavigateBackOption={hasNavigateBackOption}
            isInverted={isInverted}
            menuAction={menuAction}
            navigateBackAction={navigateBackAction}
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
