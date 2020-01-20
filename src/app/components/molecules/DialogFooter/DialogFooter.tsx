import {
    ButtonBarWrapper,
    ButtonWrapper,
    StyledDialogFooter,
    Text,
} from './DialogFooter.sc';
import { IconTypes, IconTypesMap } from '../../../types';
import Button from '../Button/Button';
import React from 'react';

export interface DialogFooterProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmIconType?: IconTypes;
    buttonConfirmText?: React.ReactNode;
    className?: string;
    onCancel?: React.MouseEventHandler;
    onConfirm?: React.MouseEventHandler;
    text?: React.ReactNode;
}

interface DialogFooterComponent extends React.FunctionComponent<DialogFooterProps> {
    buttonConfirmIconTypes: IconTypesMap;
}

export const DialogFooter: DialogFooterComponent = ({
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

DialogFooter.buttonConfirmIconTypes = Button.iconTypes;

DialogFooter.defaultProps = {
    buttonCancelText: null,
    buttonConfirmIconType: DialogFooter.buttonConfirmIconTypes.CHECK,
    buttonConfirmText: null,
    className: '',
    onCancel: null,
    onConfirm: null,
    text: null,
};

export default DialogFooter;
