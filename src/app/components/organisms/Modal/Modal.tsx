import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import { Easing } from '../../../types';
import Header from '../Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';
import React from 'react';

export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: React.MouseEventHandler;
    options?: React.ReactNode;
    title: React.ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
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
        <Overlay isVisible={isVisible} />
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

Modal.defaultProps = {
    className: '',
    onBack: null,
    options: null,
    transitionDuration: 500,
    transitionEasing: Easing.EASE,
};

export default Modal;
