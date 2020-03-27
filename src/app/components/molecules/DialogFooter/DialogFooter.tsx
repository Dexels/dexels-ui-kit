import { ButtonBarWrapper, ButtonWrapper, StyledDialogFooter, Text } from './DialogFooter.sc';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Button from '../Button/Button';

export interface DialogFooterProps {
    buttonCancelText?: ReactNode;
    buttonConfirmIconType?: IconType;
    buttonConfirmText?: ReactNode;
    children?: never;
    className?: string;
    onCancel?: MouseEventHandler;
    onConfirm?: MouseEventHandler;
    text?: ReactNode;
}

export const DialogFooter: FunctionComponent<DialogFooterProps> = ({
    buttonCancelText,
    buttonConfirmIconType = IconType.CHECK,
    buttonConfirmText,
    className,
    onCancel,
    onConfirm,
    text,
}) => (
    <StyledDialogFooter className={className}>
        {text && <Text>{text}</Text>}
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

export default DialogFooter;
