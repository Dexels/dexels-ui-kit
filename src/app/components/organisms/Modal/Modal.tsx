import { Body, HeaderWrapper, StyledModal } from './Modal.sc';
import { Easing, IconType, ModalSize } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Header from '../../molecules/Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';

export interface ModalProps {
    children?: ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: MouseEventHandler;
    options?: ReactNode;
    size?: ModalSize;
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
    size = ModalSize.XLARGE,
    title,
    transitionDuration = 500,
    transitionEasing = Easing.EASE,
}) => (
    <>
        <Overlay isVisible={isVisible} />
        <StyledModal
            className={className}
            isVisible={isVisible}
            size={size}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <HeaderWrapper>
                <Header
                    buttons={[
                        {
                            iconType: IconType.CHEVRONLEFT,
                            onClick: onBack,
                        },
                    ]}
                    isInverted
                    title={title}
                >
                    {options}
                </Header>
            </HeaderWrapper>
            <Body>{children}</Body>
        </StyledModal>
    </>
);

export default Modal;
