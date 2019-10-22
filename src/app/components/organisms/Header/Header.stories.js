import { boolean, select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export default { title: 'organisms/Header' };

export const Configurable = () => (
    <Header
        elevation={select('Elevation', Header.elevations, Header.defaultProps.elevation)}
        hasMenuOption={boolean('Has menu option', Header.defaultProps.hasMenuOption)}
        hasNavigateBackOption={boolean('Has navigate back option', Header.defaultProps.hasNavigateBackOption)}
        isInverted={boolean('Is inverted', Header.defaultProps.isInverted)}
        title={text('Header title', 'Wedstrijden')}
    >
        <ButtonIcon
            iconType={Icon.types.PLUS}
            isInverted={Header.isInverted}
            key={1}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            isInverted={Header.isInverted}
            key={2}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SHARE}
            isInverted={Header.isInverted}
            key={3}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SETTINGS}
            isInverted={Header.isInverted}
            key={4}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.HELP}
            isInverted={Header.isInverted}
            key={5}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <Button
            iconType={Icon.types.INFO}
            isInverted={Header.isInverted}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>
        <Button
            iconType={Icon.types.INFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>
    </Header>
);
