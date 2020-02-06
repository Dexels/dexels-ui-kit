import {
    ButtonBarWrapper,
    ButtonWrapper,
    StyledDialogFooter,
    Text,
} from './DialogFooter.sc';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import Button from '../Button/Button';
import React from 'react';

export interface DialogFooterProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmIconType?: IconType;
    buttonConfirmText?: React.ReactNode;
    className?: string;
    onCancel?: React.MouseEventHandler;
    onConfirm?: React.MouseEventHandler;
    text?: React.ReactNode;
}

export const DialogFooter: React.FunctionComponent<DialogFooterProps> = ({
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
                        iconType={IconType.CROSS}
                        onClick={onCancel}
                        size={ButtonSize.SMALL}
                        variant={ButtonVariant.TEXT_ONLY}
                    >
                        {buttonCancelText}
                    </Button>
                </ButtonWrapper>
            )}
            {buttonConfirmText && onConfirm && (
                <Button
                    iconType={buttonConfirmIconType}
                    onClick={onConfirm}
                    size={ButtonSize.SMALL}
                    variant={ButtonVariant.OUTLINE}
                >
                    {buttonConfirmText}
                </Button>
            )}
        </ButtonBarWrapper>
    </StyledDialogFooter>
);

DialogFooter.defaultProps = {
    buttonCancelText: null,
    buttonConfirmIconType: IconType.CHECK,
    buttonConfirmText: null,
    className: '',
    onCancel: null,
    onConfirm: null,
    text: null,
};

export default DialogFooter;
