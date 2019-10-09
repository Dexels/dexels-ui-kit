import {
    Body,
    ButtonClose,
    Header,
    StyledDialogAlert,
} from './DialogAlert.sc';
import { DIALOG_ALERT_ALIGNMENTS, DIALOG_ALERT_DIRECTIONS, DIALOG_ALERT_ELEVATIONS } from './DialogAlert.consts';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const DialogAlert = ({
    bodyAlignment,
    body,
    buttonCancelText,
    buttonClosePosition,
    buttonConfirmText,
    dialogHeight,
    dialogWidth,
    elevation,
    footerMessage,
    hasButtonClose,
    hasOverlay,
    header,
    headerAlignment,
    headerHeight,
    onCancel,
    onClose,
    onConfirm,
}) => (
    <Overlay isFullscreen isVisible={hasOverlay}>
        {hasButtonClose && hasOverlay && (
            <ButtonClose buttonClosePosition={buttonClosePosition} onClick={onClose}>
                <Icon type={Icon.types.CLOSE} />
            </ButtonClose>
        )}
        <StyledDialogAlert dialogHeight={dialogHeight} dialogWidth={dialogWidth} elevation={elevation}>
            {header && (
                <Header headerAlignment={headerAlignment} headerHeight={headerHeight}>
                    {header}
                </Header>
            )}
            <Body bodyAlignment={bodyAlignment} hasHeader={header}>
                {body}
            </Body>
            <DialogFooter
                buttonCancelText={buttonCancelText}
                buttonConfirmText={buttonConfirmText}
                message={footerMessage}
                onCancel={onCancel}
                onConfirm={onConfirm}
            />
        </StyledDialogAlert>
    </Overlay>
);

DialogAlert.alignments = DIALOG_ALERT_ALIGNMENTS;
DialogAlert.directions = DIALOG_ALERT_DIRECTIONS;
DialogAlert.elevations = DIALOG_ALERT_ELEVATIONS;

DialogAlert.propTypes = {
    body: PropTypes.node.isRequired,
    bodyAlignment: PropTypes.oneOf(Object.values(DialogAlert.alignments)),
    buttonCancelText: PropTypes.string,
    buttonClosePosition: PropTypes.oneOf(Object.values(DialogAlert.directions)),
    buttonConfirmText: PropTypes.string.isRequired,
    dialogHeight: PropTypes.string,
    dialogWidth: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(DialogAlert.elevations)),
    footerMessage: PropTypes.string,
    hasButtonClose: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    header: PropTypes.string,
    headerAlignment: PropTypes.oneOf(Object.values(DialogAlert.alignments)),
    headerHeight: PropTypes.string,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
};

DialogAlert.defaultProps = {
    bodyAlignment: DialogAlert.alignments.CENTER,
    buttonCancelText: 'Cancel',
    buttonClosePosition: DialogAlert.directions.LTR,
    dialogHeight: '200px',
    dialogWidth: '300px',
    elevation: DialogAlert.elevations.LEVEL_12,
    footerMessage: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: DialogAlert.alignments.CENTER,
    headerHeight: '56px',
    onCancel: null,
    onClose: null,
};

export default DialogAlert;
