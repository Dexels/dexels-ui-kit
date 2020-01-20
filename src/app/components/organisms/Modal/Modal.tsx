import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import { Easings, EasingsMap } from '../../../types';
import Header from '../Header/Header';
import { MODAL_EASINGS } from './Modal.consts';
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
    transitionEasing?: Easings;
}

interface ModalComponent extends React.FunctionComponent<ModalProps> {
    transitionEasings: EasingsMap;
}

export const Modal: ModalComponent = ({
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

Modal.transitionEasings = MODAL_EASINGS;

Modal.defaultProps = {
    className: '',
    onBack: null,
    options: null,
    transitionDuration: 500,
    transitionEasing: Modal.transitionEasings.EASE as Easings,
};

export default Modal;
