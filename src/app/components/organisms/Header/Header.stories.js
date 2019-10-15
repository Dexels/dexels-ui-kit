import { select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from './Header';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export default { title: 'organisms/Header' };

const leftSideIcons = [
    <ButtonIcon iconType={Icon.types.MENU} key={1} onClick={() => {}} />,
    <ButtonIcon iconType={Icon.types.CHEVRON_LEFT} key={2} onClick={() => {}} />,
];

const rightSideIcons = [
    <ButtonIcon iconType={Icon.types.PLUS} key={1} onClick={() => {}} />,
    <ButtonIcon iconType={Icon.types.SEARCH} key={2} onClick={() => {}} />,
    <ButtonIcon iconType={Icon.types.SHARE} key={3} onClick={() => {}} />,
    <ButtonIcon iconType={Icon.types.SETTINGS} key={4} onClick={() => {}} />,
    <ButtonIcon iconType={Icon.types.HELP} key={5} onClick={() => {}} />,
];

const rightSideButtons = [
    <Button
        iconType={Icon.types.INFO}
        key={1}
        onClick={() => {}}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE}
    >
        {'label'}
    </Button>,
    <Button
        iconType={Icon.types.INFO}
        key={2}
        onClick={() => {}}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE}
    >
        {'label'}
    </Button>,
];

export const Configurable = () => (
    <Header
        elevation={select('Elevation', Header.elevations, Header.defaultProps.elevation)}
        leftSideIcons={leftSideIcons}
        rightSideButtons={rightSideButtons}
        rightSideIcons={rightSideIcons}
        title={text('Header title', 'Wedstrijden')}
    />
);
