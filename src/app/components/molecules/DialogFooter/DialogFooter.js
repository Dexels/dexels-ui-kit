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
    className,
    onCancel,
    onConfirm,
    text,
}) => (
    <StyledDialogFooter className={className}>
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
    buttonCancelText: PropTypes.node,
    buttonConfirmText: PropTypes.node,
    className: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    text: PropTypes.node,
};

DialogFooter.defaultProps = {
    buttonCancelText: null,
    buttonConfirmText: null,
    className: '',
    onCancel: null,
    onConfirm: null,
    text: null,
};

export default DialogFooter;
