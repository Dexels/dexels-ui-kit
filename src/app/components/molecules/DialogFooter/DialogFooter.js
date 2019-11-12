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
    message,
    onCancel,
    onConfirm,
}) => (
    <StyledDialogFooter>
        {message && (
            <TextWrapper>
                {message}
            </TextWrapper>
        )}
        <ButtonBarWrapper>
            {buttonCancelText && onCancel && (
                <ButtonWrapper>
                    <Button
                        iconType={Button.iconTypes.CROSS}
                        onClick={onCancel}
                        size={Button.sizes.SMALL}
                        variant={Button.variants.TEXT_ONLY}
                    >
                        {buttonCancelText}
                    </Button>
                </ButtonWrapper>
            )}
            {buttonConfirmText && onConfirm && (
                <Button
                    autoFocus
                    iconType={Button.iconTypes.CHECK}
                    onClick={onConfirm}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.OUTLINE}
                >
                    {buttonConfirmText}
                </Button>
            )}
        </ButtonBarWrapper>
    </StyledDialogFooter>
);

DialogFooter.propTypes = {
    buttonCancelText: PropTypes.string,
    buttonConfirmText: PropTypes.string,
    message: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
};

DialogFooter.defaultProps = {
    buttonCancelText: '',
    buttonConfirmText: '',
    message: '',
    onCancel: null,
    onConfirm: null,
};

export default DialogFooter;
