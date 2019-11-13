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
    isDisplaying,
    options,
    title,
    onBack,
}) => (
    <Overlay isFullscreen={isDisplaying} isVisible={isDisplaying}>
        <StyledModal isDisplaying={isDisplaying}>
            {options && (
                <HeaderWrapper>
                    <Header isInverted onBack={onBack} title={title}>
                        {options}
                    </Header>
                </HeaderWrapper>
            )}
            <Body>
                {children}
            </Body>
        </StyledModal>
    </Overlay>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isDisplaying: PropTypes.bool.isRequired,
    onBack: PropTypes.func,
    options: PropTypes.node,
    title: PropTypes.string,
};

Modal.defaultProps = {
    onBack: null,
    options: null,
    title: '',
};

export default Modal;
