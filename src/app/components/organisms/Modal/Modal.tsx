import { Body, HeaderWrapper, StyledHeader, StyledModal, StyledModalOverlay } from './Modal.sc';
import { Easing, IconType, ModalSize } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

export interface ModalProps {
    children?: ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: MouseEventHandler;
    onBackIconType?: IconType;
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
    onBackIconType,
    options,
    size = ModalSize.XLARGE,
    title,
    transitionDuration = 500,
    transitionEasing = Easing.EASE,
}) => (
    <>
        <StyledModalOverlay isVisible={isVisible} />
        <StyledModal
            className={className}
            isVisible={isVisible}
            size={size}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <HeaderWrapper>
                <StyledHeader
                    buttons={
                        onBack
                            ? [
                                  {
                                      iconType: onBackIconType || IconType.CROSS,
                                      onClick: onBack,
                                  },
                              ]
                            : []
                    }
                    isInverted
                    title={title}
                >
                    {options}
                </StyledHeader>
            </HeaderWrapper>
            <Body>{children}</Body>
        </StyledModal>
    </>
);

export default Modal;
