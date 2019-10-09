import {
    ButtonBarWrapper,
    ButtonWrapper,
    StyledDialogFooter,
    TextWrapper,
} from './DialogFooter.sc';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

const DialogFooter = ({
    buttonCancelText,
    buttonConfirmText,
    hasButtonCancel,
    message,
    onCancel,
    onConfirm,
}) => (
    <StyledDialogFooter>
        <TextWrapper>
            {message}
        </TextWrapper>
        <ButtonBarWrapper>
            {hasButtonCancel && onCancel && (
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
        </ButtonBarWrapper>
    </StyledDialogFooter>
);

DialogFooter.propTypes = {
    buttonCancelText: PropTypes.string,
    buttonConfirmText: PropTypes.string.isRequired,
    hasButtonCancel: PropTypes.bool,
    message: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
};

DialogFooter.defaultProps = {
    buttonCancelText: 'Cancel',
    hasButtonCancel: true,
    message: null,
    onCancel: null,
};

export default DialogFooter;
