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
    buttonConfirmIconType,
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
                    iconType={buttonConfirmIconType}
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

DialogFooter.iconTypesButtonConfirm = Button.types;

DialogFooter.propTypes = {
    buttonCancelText: PropTypes.node,
    buttonConfirmIconType: PropTypes.oneOf(Object.values(DialogFooter.iconTypesButtonConfirm)),
    buttonConfirmText: PropTypes.node,
    className: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    text: PropTypes.node,
};

DialogFooter.defaultProps = {
    buttonCancelText: null,
    buttonConfirmIconType: DialogFooter.iconTypesButtonConfirm.CHECK,
    buttonConfirmText: null,
    className: '',
    onCancel: null,
    onConfirm: null,
    text: null,
};

export default DialogFooter;
