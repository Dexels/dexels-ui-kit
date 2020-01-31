import {
    Alignment,
    Easing,
    Elevation,
    IconType,
} from '../../../types';
import {
    Body,
    ButtonClose,
    Header,
    StyledDialog,
} from './Dialog.sc';
import { DialogButtonClosePosition } from './types';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import React from 'react';

export interface DialogProps {
    bodyAlignment?: Alignment;
    buttonCancelText?: React.ReactNode;
    buttonClosePosition?: DialogButtonClosePosition;
    buttonConfirmIconType?: IconType;
    buttonConfirmText: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    elevation?: Elevation;
    footerText?: React.ReactNode;
    hasButtonClose?: boolean;
    hasOverlay?: boolean;
    header?: React.ReactNode;
    headerAlignment?: Alignment;
    height?: string;
    isVisible: boolean;
    onCancel?: React.MouseEventHandler;
    onClose?: React.MouseEventHandler;
    onConfirm: React.MouseEventHandler;
    transitionDuration?: number;
    transitionEasing?: Easing;
    width?: string;
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
    bodyAlignment,
    buttonCancelText,
    buttonClosePosition,
    buttonConfirmIconType,
    buttonConfirmText,
    children,
    className,
    elevation,
    footerText,
    hasButtonClose,
    hasOverlay,
    header,
    headerAlignment,
    height,
    isVisible,
    onCancel,
    onClose,
    onConfirm,
    transitionDuration,
    transitionEasing,
    width,
}) => (
    <>
        {hasOverlay && (
            <Overlay isVisible={isVisible} />
        )}
        {hasButtonClose && hasOverlay && isVisible && (
            <ButtonClose onClick={onClose} position={buttonClosePosition}>
                <Icon type={IconType.CROSS} />
            </ButtonClose>
        )}
        <StyledDialog
            className={className}
            elevation={elevation}
            height={height}
            isVisible={isVisible}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
            width={width}
        >
            {header && (
                <Header alignment={headerAlignment}>
                    {header}
                </Header>
            )}
            <Body alignment={bodyAlignment} hasHeader={Boolean(header)}>
                {children}
            </Body>
            <DialogFooter
                buttonCancelText={buttonCancelText}
                buttonConfirmIconType={buttonConfirmIconType}
                buttonConfirmText={buttonConfirmText}
                onCancel={onCancel}
                onConfirm={onConfirm}
                text={footerText}
            />
        </StyledDialog>
    </>
);

Dialog.defaultProps = {
    bodyAlignment: Alignment.CENTER,
    buttonCancelText: null,
    buttonClosePosition: DialogButtonClosePosition.LEFT,
    buttonConfirmIconType: IconType.CHECK,
    className: '',
    elevation: Elevation.LEVEL_12,
    footerText: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: Alignment.CENTER,
    height: 'inherit',
    onCancel: null,
    onClose: null,
    transitionDuration: 500,
    transitionEasing: Easing.EASE,
    width: '300px',
};

export default Dialog;
