import { ButtonSize, ButtonVariant, Easing, IconType, ModalSize } from '../../../types';
import { number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Modal from './Modal';

export default { title: 'organisms/Modal' };

const functionalItems = [
    <ButtonIcon iconType={IconType.PLUS} key={1} onClick={action('On buttonicon PLUS')} />,
    <ButtonIcon iconType={IconType.SEARCH} key={2} onClick={action('On buttonicon SEARCH')} />,
    <ButtonIcon iconType={IconType.SHARE} key={3} onClick={action('On buttonicon SHARE')} />,
    <ButtonIcon iconType={IconType.GEAR} key={4} onClick={action('On buttonicon GEAR')} />,
    <ButtonIcon iconType={IconType.ROUNDHELP} key={5} onClick={action('On buttonicon ROUNDHELP')} />,
    <Button iconType={IconType.ROUNDINFO} key={6} onClick={action('On button ROUNDINFO 1')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
    <Button iconType={IconType.ROUNDINFO} key={7} onClick={action('On button ROUNDINFO 2')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
];

export const Configurable: FunctionComponent = () => (
    <Modal isVisible onBack={action('On back')} options={functionalItems} title={text('Header title', 'Heading')}>
        {text('Body', 'Some body text')}
    </Modal>
);

export const ConfigurableModal: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={(): void => {
                    action('On back');
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'MODAL IS SHOWING' : 'SHOW MODAL'}
            </Button>
            <Modal
                isVisible={isVisible}
                onBack={(): void => {
                    action('On back');
                    setIsVisible(false);
                }}
                onBackIconType={select('OnBack icon type', IconType, undefined)}
                options={functionalItems}
                size={select('Size', ModalSize, ModalSize.XLARGE)}
                title={text('Header title', 'Heading')}
                transitionDuration={number('Transition duration', 500)}
                transitionEasing={select('Transition type', Easing, Easing.EASE)}
            >
                {text('Body', 'Some body text')}
            </Modal>
        </>
    );
};
