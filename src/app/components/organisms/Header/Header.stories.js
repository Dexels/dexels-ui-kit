import { select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export default { title: 'organisms/Header' };

const navigationIcons = [
    <ButtonIcon
        iconType={Icon.types.MENU}
        key={1}
        onClick={() => {}}
        variant={ButtonIcon.variants.HEADER}
    />,
    <ButtonIcon
        iconType={Icon.types.CHEVRON_LEFT}
        key={2}
        onClick={() => {}}
        variant={ButtonIcon.variants.HEADER}
    />,
];

const functionalButtons = [
    <Button
        iconType={Icon.types.INFO}
        key={1}
        onClick={() => {}}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE_HEADER}
    >
        {'label'}
    </Button>,
    <Button
        iconType={Icon.types.INFO}
        key={2}
        onClick={() => {}}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE_HEADER}
    >
        {'label'}
    </Button>,
];

export const Configurable = () => (
    <Header
        elevation={select('Elevation', Header.elevations, Header.defaultProps.elevation)}
        functionalButtons={functionalButtons}
        navigationIcons={navigationIcons}
        title={text('Header title', 'Wedstrijden')}
    >
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SEARCH} key={2}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.SETTINGS}
            key={4}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
        <ButtonIcon
            iconType={Icon.types.HELP}
            key={5}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />
    </Header>
);
