import {
    Body,
    ButtonClose,
    Header,
    StyledDialog,
} from './Dialog.sc';
import { DIALOG_ALIGNMENTS, DIALOG_DIRECTIONS, DIALOG_ELEVATIONS } from './Dialog.consts';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const Dialog = ({
    bodyAlignment,
    buttonCancelText,
    buttonClosePosition,
    buttonConfirmText,
    children,
    elevation,
    footerText,
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
                <Icon type={Icon.types.CROSS} />
            </ButtonClose>
        )}
        <StyledDialog elevation={elevation} width={width}>
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
                onCancel={onCancel}
                onConfirm={onConfirm}
                text={footerText}
            />
        </StyledDialog>
    </Overlay>
);

Dialog.alignments = DIALOG_ALIGNMENTS;
Dialog.directions = DIALOG_DIRECTIONS;
Dialog.elevations = DIALOG_ELEVATIONS;

Dialog.propTypes = {
    bodyAlignment: PropTypes.oneOf(Object.values(Dialog.alignments)),
    buttonCancelText: PropTypes.string, // This can not be required because the button is optional
    buttonClosePosition: PropTypes.oneOf(Object.values(Dialog.directions)),
    buttonConfirmText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Dialog.elevations)),
    footerText: PropTypes.string,
    hasButtonClose: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    header: PropTypes.string,
    headerAlignment: PropTypes.oneOf(Object.values(Dialog.alignments)),
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    width: PropTypes.string,
};

Dialog.defaultProps = {
    bodyAlignment: Dialog.alignments.CENTER,
    buttonCancelText: '',
    buttonClosePosition: Dialog.directions.LTR,
    elevation: Dialog.elevations.LEVEL_12,
    footerText: null,
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: Dialog.alignments.CENTER,
    onCancel: null,
    onClose: null,
    width: '300px',
};

export default Dialog;
