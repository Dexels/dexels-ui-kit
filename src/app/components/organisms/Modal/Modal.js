import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';

const Modal = ({
    children,
    options,
    title,
    onBack,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const cleanUp = () => {
        setIsVisible(false);

        setTimeout(() => {
            onBack();
        }, 500);
    };

    return (
        <Overlay isFullscreen={isVisible} isVisible={isVisible}>
            <StyledModal isVisible={isVisible}>
                <HeaderWrapper>
                    <Header isInverted onBack={cleanUp} title={title}>
                        {options}
                    </Header>
                </HeaderWrapper>
                <Body>
                    {children}
                </Body>
            </StyledModal>
        </Overlay>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onBack: PropTypes.func,
    options: PropTypes.node,
    title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
    onBack: null,
    options: null,
};

export default Modal;
