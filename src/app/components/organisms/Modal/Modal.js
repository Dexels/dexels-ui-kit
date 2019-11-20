import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import Header from '../Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    isVisible,
    options,
    title,
    onBack,
}) => (
    <>
        {isVisible && (
            <Overlay isFullscreen={isVisible} isVisible={isVisible} />
        )}
        <StyledModal isVisible={isVisible}>
            <HeaderWrapper>
                <Header isInverted onBack={onBack} title={title}>
                    {options}
                </Header>
            </HeaderWrapper>
            <Body>
                {children}
            </Body>
        </StyledModal>
    </>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onBack: PropTypes.func,
    options: PropTypes.node,
    title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
    onBack: null,
    options: null,
};

export default Modal;
