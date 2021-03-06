import Button, { ButtonProps } from '../Button/Button';
import { ButtonBarWrapper, ButtonWrapper, StyledDialogFooter, Text } from './DialogFooter.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { Alignment } from '../../../types';

export interface DialogFooterButtonProps extends ButtonProps {
    alignment?: Alignment;
}

export interface DialogFooterProps {
    alignLeft?: boolean;
    buttons?: DialogFooterButtonProps[];
    children?: never;
    className?: string;
    text?: ReactNode;
}

export const DialogFooter: FunctionComponent<DialogFooterProps> = ({ buttons = [], className, text }) => (
    <StyledDialogFooter className={className}>
        {/* This might need to be moved if there are buttons with alignment Left, but for now, this is ok */}
        {text && <Text>{text}</Text>}
        <ButtonBarWrapper>
            {buttons.map((button, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ButtonWrapper alignment={button.alignment} key={index}>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    <Button {...button}>{button.children}</Button>
                </ButtonWrapper>
            ))}
        </ButtonBarWrapper>
    </StyledDialogFooter>
);

export default DialogFooter;
