import {
    ButtonBarWrapper,
    ButtonWrapper,
    StyledDialogFooter,
    Text,
} from './DialogFooter.sc';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

const DialogFooter = ({
    buttonCancelText,
    buttonConfirmText,
    onCancel,
    onConfirm,
    text,
}) => (
    <StyledDialogFooter>
        {text && (
            <Text>
                {text}
            </Text>
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
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    text: PropTypes.string,
};

DialogFooter.defaultProps = {
    buttonCancelText: '',
    buttonConfirmText: '',
    onCancel: null,
    onConfirm: null,
    text: '',
};

export default DialogFooter;
