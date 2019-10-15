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
    buttonCancelText,
    buttonClosePosition,
    buttonConfirmText,
    children,
    elevation,
    footerMessage,
    hasButtonClose,
    hasOverlay,
    header,
    headerAlignment,
    onCancel,
    onClose,
    onConfirm,
    width,
}) => (
    <Overlay isFullscreen isVisible={hasOverlay}>
        {hasButtonClose && hasOverlay && (
            <ButtonClose onClick={onClose} position={buttonClosePosition}>
                <Icon type={Icon.types.CLOSE} />
            </ButtonClose>
        )}
        <StyledDialogAlert elevation={elevation} width={width}>
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
    bodyAlignment: PropTypes.oneOf(Object.values(DialogAlert.alignments)),
    buttonCancelText: PropTypes.string,
    buttonClosePosition: PropTypes.oneOf(Object.values(DialogAlert.directions)),
    buttonConfirmText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(DialogAlert.elevations)),
    footerMessage: PropTypes.string,
    hasButtonClose: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    header: PropTypes.string,
    headerAlignment: PropTypes.oneOf(Object.values(DialogAlert.alignments)),
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    width: PropTypes.string,
};

DialogAlert.defaultProps = {
    bodyAlignment: DialogAlert.alignments.CENTER,
    buttonCancelText: 'Cancel',
    buttonClosePosition: DialogAlert.directions.LTR,
    elevation: DialogAlert.elevations.LEVEL_12,
    footerMessage: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: DialogAlert.alignments.CENTER,
    onCancel: null,
    onClose: null,
    width: '300px',
};

export default DialogAlert;
