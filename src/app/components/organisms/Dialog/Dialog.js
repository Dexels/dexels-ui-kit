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
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const Dialog = ({
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
            <ButtonClose isVisible={isVisible} onClick={onClose} position={buttonClosePosition}>
                <Icon type={Icon.types.CROSS} />
            </ButtonClose>
        )}
        <StyledDialog
            className={className}
            elevation={elevation}
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
Dialog.elevations = DIALOG_ELEVATIONS;
Dialog.headerAlignments = DIALOG_HEADER_ALIGNMENTS;
Dialog.iconTypesButtonConfirm = Icon.types;
Dialog.transitionEasings = DIALOG_EASINGS;

Dialog.propTypes = {
    bodyAlignment: PropTypes.oneOf(Object.values(Dialog.bodyAlignments)),
    buttonCancelText: PropTypes.node,
    buttonClosePosition: PropTypes.oneOf(Object.values(Dialog.buttonClosePositions)),
    buttonConfirmIconType: PropTypes.oneOf(Object.values(Dialog.iconTypesButtonConfirm)),
    buttonConfirmText: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(Dialog.elevations)),
    footerText: PropTypes.node,
    hasButtonClose: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    header: PropTypes.node,
    headerAlignment: PropTypes.oneOf(Object.values(Dialog.headerAlignments)),
    isVisible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Dialog.transitionEasings)),
    width: PropTypes.string,
};

Dialog.defaultProps = {
    bodyAlignment: Dialog.bodyAlignments.CENTER,
    buttonCancelText: null,
    buttonClosePosition: Dialog.buttonClosePositions.LEFT,
    buttonConfirmIconType: Dialog.iconTypesButtonConfirm.CHECK,
    className: '',
    elevation: Dialog.elevations.LEVEL_12,
    footerText: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: Dialog.headerAlignments.CENTER,
    onCancel: null,
    onClose: null,
    transitionDuration: 500,
    transitionEasing: Dialog.transitionEasings.EASE,
    width: '300px',
};

export default Dialog;
