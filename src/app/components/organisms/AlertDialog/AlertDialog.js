import { ALERT_DIALOG_ALIGNMENTS, ALERT_DIALOG_DIRECTIONS, ALERT_DIALOG_ELEVATIONS } from './AlertDialog.consts';
import {
    Body,
    ButtonClose,
    ButtonWrapper,
    Footer,
    Header,
    StyledAlertDialog,
} from './AlertDialog.sc';
import Button from '../../molecules/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import Overlay from '../../molecules/Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const AlertDialog = ({
    bodyAlignment,
    body,
    buttonCancelText,
    buttonClosePosition,
    buttonConfirmText,
    dialogHeight,
    dialogWidth,
    elevation,
    footerAlignment,
    footerHeight,
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
        <StyledAlertDialog dialogHeight={dialogHeight} dialogWidth={dialogWidth} elevation={elevation}>
            {header && (
                <Header headerAlignment={headerAlignment} headerHeight={headerHeight}>
                    {header}
                </Header>
            )}
            <Body bodyAlignment={bodyAlignment} hasHeader={header}>
                {body}
            </Body>
            <Footer footerAlignment={footerAlignment} footerHeight={footerHeight}>
                {buttonCancelText && onCancel && (
                    <ButtonWrapper>
                        <Button
                            iconType={Button.iconTypes.CLOSE}
                            onClick={onCancel}
                            size={Button.sizes.SMALL}
                            variant={Button.variants.TEXT_ONLY}
                        >
                            {buttonCancelText}
                        </Button>
                    </ButtonWrapper>
                )}
                <Button
                    autoFocus
                    iconType={Button.iconTypes.CHECK}
                    onClick={onConfirm}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.OUTLINE}
                >
                    {buttonConfirmText}
                </Button>
            </Footer>
        </StyledAlertDialog>
    </Overlay>
);

AlertDialog.alignments = ALERT_DIALOG_ALIGNMENTS;
AlertDialog.directions = ALERT_DIALOG_DIRECTIONS;
AlertDialog.elevations = ALERT_DIALOG_ELEVATIONS;

AlertDialog.propTypes = {
    body: PropTypes.node.isRequired,
    bodyAlignment: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    buttonCancelText: PropTypes.string,
    buttonClosePosition: PropTypes.oneOf(Object.values(AlertDialog.directions)),
    buttonConfirmText: PropTypes.string.isRequired,
    dialogHeight: PropTypes.string,
    dialogWidth: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(AlertDialog.elevations)),
    footerAlignment: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    footerHeight: PropTypes.string,
    hasButtonClose: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    header: PropTypes.string,
    headerAlignment: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    headerHeight: PropTypes.string,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
};

AlertDialog.defaultProps = {
    bodyAlignment: AlertDialog.alignments.CENTER,
    buttonCancelText: 'Cancel',
    buttonClosePosition: AlertDialog.directions.LTR,
    dialogHeight: '200px',
    dialogWidth: '300px',
    elevation: AlertDialog.elevations.LEVEL_12,
    footerAlignment: AlertDialog.alignments.RIGHT,
    footerHeight: '56px',
    hasButtonClose: true,
    hasOverlay: true,
    header: null,
    headerAlignment: AlertDialog.alignments.CENTER,
    headerHeight: '56px',
    onCancel: null,
    onClose: null,
};

export default AlertDialog;
