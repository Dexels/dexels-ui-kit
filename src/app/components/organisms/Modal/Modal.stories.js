import React, { useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
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

const ConfigurableModal = () => (
    <Modal
        elevation={select('Elevation', Modal.elevations, Modal.defaultProps.elevation)}
        headerContents={functionalItems}
        headerTitle={text('Header title', 'Heading')}
        onBack={action('On back')}
        onToggleMenu={action('On toggle menu')}
    >
        {text('Body', 'Some body text')}
    </Modal>
);

export const Configurable = () => (
    <ConfigurableModal functionalItems={functionalItems} onClose={action('OnClose click')} />
);

export const ConfigurableAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setIsVisible(true);
                }}
                variant={Button.variants.FILLED}
            >
                {isVisible ? 'MODAL IS SHOWING' : 'SHOW MODAL'}
            </Button>
            {isVisible && (
                <ConfigurableModal
                    functionalItems={functionalItems}
                />
            )}
        </>
    );
};
