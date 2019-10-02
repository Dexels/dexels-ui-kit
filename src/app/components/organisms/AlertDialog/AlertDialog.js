import { ALERT_DIALOG_ALIGNMENTS, ALERT_DIALOG_DIRECTIONS, ALERT_DIALOG_ELEVATIONS } from './AlertDialog.consts';
import {
    Body,
    ButtonSpacer,
    CloseButton,
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
    alignmentBody,
    alignmentFooter,
    alignmentHeader,
    body,
    buttonTextCancel,
    buttonTextOk,
    direction,
    elevation,
    header,
    heightDialog,
    heightFooter,
    heightHeader,
    onCancel,
    onClose,
    onConfirm,
    showCloseButton,
    widthDialog,
}) => (
    <Overlay
        fullScreen
        isVisible
    >
        {showCloseButton && (
            <CloseButton
                direction={direction}
                onClick={onClose}
            >
                <Icon type={Icon.types.CLOSE} />
            </CloseButton>
        )}
        <StyledAlertDialog
            elevation={elevation}
            heightDialog={heightDialog}
            widthDialog={widthDialog}
        >
            {header && (
                <Header
                    alignmentHeader={alignmentHeader}
                    heightHeader={heightHeader}
                >
                    {header}
                </Header>
            )}
            <Body
                alignmentBody={alignmentBody}
                hasHeader={header !== undefined && header !== ''}
            >
                {body}
            </Body>
            <Footer
                alignmentFooter={alignmentFooter}
                heightFooter={heightFooter}
            >
                {buttonTextCancel !== undefined && buttonTextCancel !== '' && onCancel && (
                    <>
                        <Button
                            autoFocus
                            iconType={Button.iconTypes.CLOSE}
                            onClick={onCancel}
                            size={Button.sizes.SMALL}
                            variant={Button.variants.TEXT_ONLY}
                        >
                            {buttonTextCancel}
                        </Button>
                        <ButtonSpacer />
                    </>
                )}
                <Button
                    iconType={Button.iconTypes.CHECK}
                    onClick={onConfirm}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.OUTLINE}
                >
                    {buttonTextOk}
                </Button>
            </Footer>
        </StyledAlertDialog>
    </Overlay>
);

AlertDialog.alignments = ALERT_DIALOG_ALIGNMENTS;
AlertDialog.directions = ALERT_DIALOG_DIRECTIONS;
AlertDialog.elevations = ALERT_DIALOG_ELEVATIONS;

AlertDialog.propTypes = {
    alignmentBody: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    alignmentFooter: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    alignmentHeader: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    body: PropTypes.node.isRequired,
    buttonTextCancel: PropTypes.string,
    buttonTextOk: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(Object.values(AlertDialog.directions)),
    elevation: PropTypes.oneOf(Object.values(AlertDialog.elevations)),
    header: PropTypes.string,
    heightDialog: PropTypes.string,
    heightFooter: PropTypes.string,
    heightHeader: PropTypes.string,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    showCloseButton: PropTypes.bool,
    widthDialog: PropTypes.string,
};

AlertDialog.defaultProps = {
    alignmentBody: AlertDialog.alignments.CENTER,
    alignmentFooter: AlertDialog.alignments.RIGHT,
    alignmentHeader: AlertDialog.alignments.CENTER,
    buttonTextCancel: 'Cancel',
    direction: AlertDialog.directions.LTR,
    elevation: AlertDialog.elevations.LEVEL_12,
    header: null,
    heightDialog: '200px',
    heightFooter: '56px',
    heightHeader: '56px',
    onCancel: null,
    onClose: null,
    showCloseButton: true,
    widthDialog: '300px',
};

export default AlertDialog;
