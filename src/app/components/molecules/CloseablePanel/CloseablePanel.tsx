import { ButtonVariant, IconType } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../PanelHeader/PanelHeader';
import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import Button from '../Button/Button';

export interface CloseablePanelProps extends Omit<PanelHeaderProps, 'children' | 'options'> {
    children: ReactNode;
    iconClose?: IconType;
    iconOpen?: IconType;
    isOpenDefault?: boolean;
    onToggleIsOpen?: (isOpen: boolean) => void;
}

export const CloseablePanel: FunctionComponent<CloseablePanelProps> = ({
    children,
    hasCapitalizedTitle,
    iconClose = IconType.MINUS,
    iconOpen = IconType.PLUS,
    iconType,
    isDisabled = false,
    isLoading = false,
    isOpenDefault = true,
    onToggleIsOpen,
    title,
}) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    const setIsOpenCallback = useCallback(() => {
        setIsOpen(!isOpen);

        if (onToggleIsOpen) {
            onToggleIsOpen(!isOpen);
        }
    }, [isOpen, onToggleIsOpen]);

    return (
        <>
            <PanelHeader
                hasCapitalizedTitle={hasCapitalizedTitle}
                hasMarginBottom={isOpen}
                iconType={iconType}
                isDisabled={isDisabled}
                isLoading={isLoading}
                options={
                    <Button
                        iconType={isOpen ? iconClose : iconOpen}
                        onClick={setIsOpenCallback}
                        variant={ButtonVariant.TEXT_ONLY}
                    />
                }
                title={title}
            />
            {isOpen && children}
        </>
    );
};

export default CloseablePanel;
