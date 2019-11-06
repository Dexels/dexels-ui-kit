import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import Header from '../Header/Header';
import MODAL_ELEVATIONS from './Modal.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    elevation,
    headerContents,
    headerTitle,
    onBack,
    onToggleMenu,
}) => (
    <StyledModal elevation={elevation}>
        {headerContents && (
            <HeaderWrapper>
                <Header
                    elevation={elevation.LEVEL_12}
                    isInverted
                    onBack={onBack}
                    onToggleMenu={onToggleMenu}
                    title={headerTitle}
                >
                    {headerContents}
                </Header>
            </HeaderWrapper>
        )}
        <Body>
            {children}
        </Body>
    </StyledModal>
);

Modal.elevations = MODAL_ELEVATIONS;

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Modal.elevations)),
    headerContents: PropTypes.node,
    headerTitle: PropTypes.string,
    onBack: PropTypes.func,
    onToggleMenu: PropTypes.func,
};

Modal.defaultProps = {
    elevation: Modal.elevations.LEVEL_12,
    headerContents: null,
    headerTitle: '',
    onBack: null,
    onToggleMenu: null,
};

export default Modal;
