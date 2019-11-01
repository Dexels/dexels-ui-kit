import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default { title: 'organisms/Modal' };

const ConfigurableModal = ({ functionalItems }) => (
    <Modal
        bodyAlignment={select('Body alignment', Modal.alignments, Modal.defaultProps.bodyAlignment)}
        elevation={select('Elevation', Modal.elevations, Modal.defaultProps.elevation)}
        hasMenuOption={boolean('Has menu option', Modal.defaultProps.hasMenuOption)}
        hasNavigateBackOption={boolean('Has navigate back option', Modal.defaultProps.hasNavigateBackOption)}
        headerContents={functionalItems}
        headerTitle={text('Header title', 'Heading')}
        menuAction={action('On click')}
        navigateBackAction={action('On click')}
    >
        {text('Body', 'Some body text')}
    </Modal>
);

ConfigurableModal.propTypes = {
    functionalItems: PropTypes.arrayOf(PropTypes.object),
};

ConfigurableModal.defaultProps = {
    functionalItems: [],
};

export const Configurable = () => {
    const functionalItems = [
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            key={2}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.GEAR}
            key={4}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.ROUNDHELP}
            key={5}
            onClick={() => {}}
        />,
        <Button
            iconType={Icon.types.ROUNDINFO}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
        >
            {'label'}
        </Button>,
        <Button
            iconType={Icon.types.ROUNDINFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
        >
            {'label'}
        </Button>,
    ];

    return (
        <ConfigurableModal
            functionalItems={functionalItems}
            onClose={action('OnClose click')}
        />
    );
};

export const ConfigurableAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    const functionalItems = [
        <ButtonIcon
            iconType={Icon.types.PLUS}
            key={1}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.SEARCH}
            key={2}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.SHARE}
            key={3}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.GEAR}
            key={4}
            onClick={() => {}}
        />,
        <ButtonIcon
            iconType={Icon.types.ROUNDHELP}
            key={5}
            onClick={() => {}}
        />,
        <Button
            iconType={Icon.types.ROUNDINFO}
            key={6}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
        >
            {'label'}
        </Button>,
        <Button
            iconType={Icon.types.ROUNDINFO}
            key={7}
            onClick={() => {}}
            size={Button.sizes.SMALL}
            variant={Button.variants.OUTLINE}
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
                />
            )}
        </>
    );
};
