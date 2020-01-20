import {
    Alignments,
    AlignmentsMap,
    Easings,
    EasingsMap,
    Elevations,
    ElevationsMap,
    IconTypes,
    IconTypesMap,
} from '../../../types';
import {
    Body,
    ButtonClose,
    Header,
    StyledDialog,
} from './Dialog.sc';
import {
    DIALOG_BODY_ALIGNMENTS,
    DIALOG_BUTTON_CLOSE_POSITIONS,
    DIALOG_EASINGS,
    DIALOG_ELEVATIONS,
    DIALOG_HEADER_ALIGNMENTS,
} from './Dialog.consts';
import { DialogCloseButtonPositions, DialogCloseButtonPositionsMap } from './types';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import React from 'react';

export interface DialogProps {
    bodyAlignment?: Alignments;
    buttonCancelText?: React.ReactNode;
    buttonClosePosition?: DialogCloseButtonPositions;
    buttonConfirmIconType?: IconTypes;
    buttonConfirmText: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    footerText?: React.ReactNode;
    hasButtonClose?: boolean;
    hasOverlay?: boolean;
    header?: React.ReactNode;
    headerAlignment?: Alignments;
    height?: string;
    isVisible: boolean;
    onCancel?: React.MouseEventHandler;
    onClose?: React.MouseEventHandler;
    onConfirm: React.MouseEventHandler;
    transitionDuration?: number;
    transitionEasing?: Easings;
    width?: string;
}

interface DialogComponent extends React.FunctionComponent<DialogProps> {
    bodyAlignments: AlignmentsMap;
    buttonClosePositions: DialogCloseButtonPositionsMap;
    buttonConfirmIconTypes: IconTypesMap;
    elevations: ElevationsMap;
    headerAlignments: AlignmentsMap;
    transitionEasings: EasingsMap;
}

export const Dialog: DialogComponent = ({
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
                <Icon type={Icon.types.CROSS} />
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

Dialog.bodyAlignments = DIALOG_BODY_ALIGNMENTS;
Dialog.buttonClosePositions = DIALOG_BUTTON_CLOSE_POSITIONS;
Dialog.buttonConfirmIconTypes = Icon.types;
Dialog.elevations = DIALOG_ELEVATIONS;
Dialog.headerAlignments = DIALOG_HEADER_ALIGNMENTS;
Dialog.transitionEasings = DIALOG_EASINGS;

Dialog.defaultProps = {
    bodyAlignment: Dialog.bodyAlignments.CENTER,
    buttonCancelText: null,
    buttonClosePosition: Dialog.buttonClosePositions.LEFT,
    buttonConfirmIconType: Dialog.buttonConfirmIconTypes.CHECK,
    className: '',
    elevation: Dialog.elevations.LEVEL_12,
    footerText: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: Dialog.headerAlignments.CENTER,
    height: 'inherit',
    onCancel: null,
    onClose: null,
    transitionDuration: 500,
    transitionEasing: Dialog.transitionEasings.EASE as Easings,
    width: '300px',
};

export default Dialog;
