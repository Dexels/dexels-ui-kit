import { Body, HeaderWrapper, StyledModal } from './Modal.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { Easing } from '../../../types';
import Header from '../Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';

export interface ModalProps {
    children?: ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: MouseEventHandler;
    options?: ReactNode;
    title: ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const Modal: FunctionComponent<ModalProps> = ({
    children,
    className,
    isVisible = false,
    onBack,
    options,
    title,
    transitionDuration = 500,
    transitionEasing = Easing.EASE,
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
            <Body>{children}</Body>
        </StyledModal>
    </>
);

export default Modal;
