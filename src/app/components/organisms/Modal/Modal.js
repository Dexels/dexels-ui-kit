import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import Header from '../Header/Header';
import { MODAL_EASINGS } from './Modal.consts';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    className,
    isVisible,
    onBack,
    options,
    title,
    transitionDuration,
    transitionEasing,
}) => (
    <>
        {isVisible && (
            <Overlay isFullscreen={isVisible} isVisible={isVisible} />
        )}
        <StyledModal
            className={className}
            isVisible={isVisible}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
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

Modal.transitionEasings = MODAL_EASINGS;

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
    onBack: PropTypes.func,
    options: PropTypes.node,
    title: PropTypes.node.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Modal.transitionEasings)),
};

Modal.defaultProps = {
    className: '',
    onBack: null,
    options: null,
    transitionDuration: 500,
    transitionEasing: Modal.transitionEasings.EASE,
};

export default Modal;
