import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    options,
    title,
    onBack,
}) => (
    <StyledModal>
        {options && (
            <HeaderWrapper>
                <Header
                    isInverted
                    onBack={onBack}
                    title={title}
                >
                    {options}
                </Header>
            </HeaderWrapper>
        )}
        <Body>
            {children}
        </Body>
    </StyledModal>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
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
