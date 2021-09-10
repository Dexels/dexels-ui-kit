import Button, { ButtonProps } from '../Button/Button';
import { ButtonBarWrapper, ButtonWrapper, StyledDialogFooter, Text } from './DialogFooter.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { Alignment } from '../../../types';
import { isEmpty } from '../../../utils/functions/validateFunctions';

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

export const DialogFooter: FunctionComponent<DialogFooterProps> = ({ buttons = [], className, text }) => {
    const buttonsLeft = buttons.filter((button) => button.alignment && button.alignment === Alignment.LEFT);
    const buttonsRight = buttons.filter((button) => !button.alignment || button.alignment === Alignment.RIGHT);

    return (
        <StyledDialogFooter className={className}>
            {/* This might need to be moved if there are buttons with alignment Left, but for now, this is ok */}
            {text && <Text>{text}</Text>}
            {!isEmpty(buttonsLeft) && (
                <ButtonBarWrapper alignment={Alignment.LEFT}>
                    {buttonsLeft.map((button, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <ButtonWrapper alignment={button.alignment} key={index}>
                            {/* eslint-disable-next-line react/no-array-index-key */}
                            <Button {...button}>{button.children}</Button>
                        </ButtonWrapper>
                    ))}
                </ButtonBarWrapper>
            )}
            {!isEmpty(buttonsRight) && (
                <ButtonBarWrapper alignment={Alignment.RIGHT}>
                    {buttonsRight.map((button, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <ButtonWrapper alignment={button.alignment} key={index}>
                            {/* eslint-disable-next-line react/no-array-index-key */}
                            <Button {...button}>{button.children}</Button>
                        </ButtonWrapper>
                    ))}
                </ButtonBarWrapper>
            )}
        </StyledDialogFooter>
    );
};

export default DialogFooter;
