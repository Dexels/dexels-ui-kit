import { ALERT_DIALOG_ALIGNMENTS, ALERT_DIALOG_ELEVATIONS } from './AlertDialog.consts';
import {
    Body,
    ButtonSpacer,
    CloseButton,
    Container,
    Footer,
    Header,
    StyledAlertDialog,
} from './AlertDialog.sc';
import Button from '../../molecules/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';

const AlertDialog = ({
    alignmentBody,
    alignmentFooter,
    alignmentHeader,
    body,
    buttonTextCancel,
    buttonTextOk,
    elevation,
    handleCancel,
    handleClose,
    handleOk,
    header,
    heightDialog,
    heightFooter,
    heightHeader,
    showCloseButton,
    widthDialog,
}) => (
    <Container>
        <StyledAlertDialog
            elevation={elevation}
            heightDialog={heightDialog}
            widthDialog={widthDialog}
        >
            { header
            && (
                <Header
                    alignmentHeader={alignmentHeader}
                    heightHeader={heightHeader}
                    showCloseButton={showCloseButton}
                >
                    {header}
                    <CloseButton>
                        <ButtonIcon
                            iconType={Icon.CLOSE}
                            onClick={handleClose}
                        />
                    </CloseButton>
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
                { buttonTextCancel !== undefined
                && buttonTextCancel !== ''
                && handleCancel
                && (
                    <>
                        <Button
                            autofocus
                            iconType={Button.iconTypes.CLOSE}
                            onClick={handleCancel}
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
                    onClick={handleOk}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.OUTLINE}
                >
                    {buttonTextOk}
                </Button>
            </Footer>
        </StyledAlertDialog>
    </Container>
);

AlertDialog.alignments = ALERT_DIALOG_ALIGNMENTS;
AlertDialog.elevations = ALERT_DIALOG_ELEVATIONS;

AlertDialog.propTypes = {
    alignmentBody: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    alignmentFooter: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    alignmentHeader: PropTypes.oneOf(Object.values(AlertDialog.alignments)),
    body: PropTypes.node.isRequired,
    buttonTextCancel: PropTypes.string,
    buttonTextOk: PropTypes.string.isRequired,
    elevation: PropTypes.oneOf(Object.values(AlertDialog.elevations)),
    handleCancel: PropTypes.func,
    handleClose: PropTypes.func,
    handleOk: PropTypes.func.isRequired,
    header: PropTypes.string,
    heightDialog: PropTypes.string,
    heightFooter: PropTypes.string,
    heightHeader: PropTypes.string,
    showCloseButton: PropTypes.bool,
    widthDialog: PropTypes.string,
};

AlertDialog.defaultProps = {
    alignmentBody: AlertDialog.alignments.CENTER,
    alignmentFooter: AlertDialog.alignments.RIGHT,
    alignmentHeader: AlertDialog.alignments.CENTER,
    buttonTextCancel: 'Cancel',
    elevation: AlertDialog.elevations.LEVEL_12,
    handleCancel: null,
    handleClose: null,
    header: null,
    heightDialog: '100%',
    heightFooter: '56px',
    heightHeader: '56px',
    showCloseButton: true,
    widthDialog: '300px',
};

export default AlertDialog;
