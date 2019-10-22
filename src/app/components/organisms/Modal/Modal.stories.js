import React, { useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Header from '../Header/Header';
import Icon from '../../atoms/Icon/Icon';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default { title: 'organisms/Modal' };

const ModalHeader = ({ functionalItems, navigationItems }) => (
    <Header
        elevation={Modal.elevations.LEVEL_8}
        functionalItems={functionalItems}
        navigationItems={navigationItems}
        title={'Wedstrijden'}
    />
);

ModalHeader.propTypes = {
    functionalItems: PropTypes.arrayOf(PropTypes.object),
    navigationItems: PropTypes.arrayOf(PropTypes.object),
};

ModalHeader.defaultProps = {
    functionalItems: [],
    navigationItems: [],
};

const ConfigurableModal = ({ functionalItems, navigationItems }) => (
    <Modal
        bodyAlignment={select('Body alignment', Modal.alignments, Modal.defaultProps.bodyAlignment)}
        elevation={select('Elevation', Modal.elevations, Modal.defaultProps.elevation)}
        header={<ModalHeader functionalItems={functionalItems} navigationItems={navigationItems} />}
    >
        {text('Body', 'Some body text')}
    </Modal>
);

ConfigurableModal.propTypes = {
    functionalItems: PropTypes.arrayOf(PropTypes.object),
    navigationItems: PropTypes.arrayOf(PropTypes.object),
};

ConfigurableModal.defaultProps = {
    functionalItems: [],
    navigationItems: [],
};

export const Configurable = () => {
    const navigationItems = [
        <ButtonIcon
            iconType={Icon.types.CHEVRON_LEFT}
            key={2}
            onClick={() => {
            }}
            variant={ButtonIcon.variants.HEADER}
        />,
    ];

    const functionalItems = [
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            key={2}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SETTINGS}
            key={4}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.HELP}
            key={5}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <Button
            iconType={Icon.types.INFO}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>,
        <Button
            iconType={Icon.types.INFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>,
    ];

    return (
        <ConfigurableModal
            functionalItems={functionalItems}
            navigationItems={navigationItems}
            onClose={action('OnClose click')}
        />
    );
};

export const ConfigurableAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    const navigationItems = [
        <ButtonIcon
            iconType={Icon.types.CHEVRON_LEFT}
            key={2}
            onClick={() => {
                action('onClose');
                setIsVisible(false);
            }}
            variant={ButtonIcon.variants.HEADER}
        />,
    ];

    const functionalItems = [
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            key={2}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.SETTINGS}
            key={4}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <ButtonIcon
            iconType={Icon.types.HELP}
            key={5}
            onClick={() => {}}
            variant={ButtonIcon.variants.HEADER}
        />,
        <Button
            iconType={Icon.types.INFO}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>,
        <Button
            iconType={Icon.types.INFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE_HEADER}
        >
            {'label'}
        </Button>,
    ];

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
                    navigationItems={navigationItems}
                />
            )}
        </>
    );
};
