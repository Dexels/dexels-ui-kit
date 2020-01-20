import { number, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import { Easings } from '../../../types';
import Icon from '../../atoms/Icon/Icon';
import Modal from './Modal';

export default { title: 'organisms/Modal' };

const functionalItems = [
    <ButtonIcon
        iconType={Icon.types.PLUS}
        key={1}
        onClick={action('On buttonicon PLUS')}
    />,
    <ButtonIcon
        iconType={Icon.types.SEARCH}
        key={2}
        onClick={action('On buttonicon SEARCH')}
    />,
    <ButtonIcon
        iconType={Icon.types.SHARE}
        key={3}
        onClick={action('On buttonicon SHARE')}
    />,
    <ButtonIcon
        iconType={Icon.types.GEAR}
        key={4}
        onClick={action('On buttonicon GEAR')}
    />,
    <ButtonIcon
        iconType={Icon.types.ROUNDHELP}
        key={5}
        onClick={action('On buttonicon ROUNDHELP')}
    />,
    <Button
        iconType={Icon.types.ROUNDINFO}
        key={6}
        onClick={action('On button ROUNDINFO 1')}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE}
    >
        {'label'}
    </Button>,
    <Button
        iconType={Icon.types.ROUNDINFO}
        key={7}
        onClick={action('On button ROUNDINFO 2')}
        size={Button.sizes.SMALL}
        variant={Button.variants.OUTLINE}
    >
        {'label'}
    </Button>,
];

export const Configurable = () => (
    <Modal
        isVisible
        onBack={action('On back')}
        options={functionalItems}
        title={text('Header title', 'Heading')}
    >
        {text('Body', 'Some body text')}
    </Modal>
);

export const ConfigurableModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    action('On back');
                    setIsVisible(true);
                }}
                variant={Button.variants.FILLED}
            >
                {isVisible ? 'MODAL IS SHOWING' : 'SHOW MODAL'}
            </Button>
            <Modal
                isVisible={isVisible}
                onBack={() => {
                    action('On back');
                    setIsVisible(false);
                }}
                options={functionalItems}
                title={text('Header title', 'Heading')}
                transitionDuration={number('Transition duration', Modal.defaultProps.transitionDuration)}
                transitionEasing={select<Easings>(
                    'Transition type',
                    Modal.transitionEasings,
                    Modal.defaultProps.transitionEasing,
                )}
            >
                {text('Body', 'Some body text')}
            </Modal>
        </>
    );
};
