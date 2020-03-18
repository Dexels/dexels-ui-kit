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
    bodyAlignment = Alignment.CENTER,
    buttonCancelText,
    buttonClosePosition = DialogButtonClosePosition.LEFT,
    buttonConfirmIconType,
    buttonConfirmText,
    children,
    className,
    elevation = Elevation.LEVEL_12,
    footerText,
    hasButtonClose = true,
    hasOverlay = true,
    header,
    headerAlignment = Alignment.CENTER,
    height = 'inherit',
    isVisible,
    onCancel,
    onClose,
    onConfirm,
    transitionDuration = 500,
    transitionEasing = Easing.EASE,
    width = '300px',
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

export default Dialog;
