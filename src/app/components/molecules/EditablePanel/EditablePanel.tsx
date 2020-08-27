import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../PanelHeader/PanelHeader';
import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import Button from '../Button/Button';
import ButtonWrapper from './EditablePanel.sc';

export interface EditablePanelProps extends Omit<PanelHeaderProps, 'children' | 'options'> {
    children: ReactNode;
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    onCancel: () => void;
    onEdit: () => void;
    onSave: () => void;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export const EditablePanel: FunctionComponent<EditablePanelProps> = ({
    children,
    hasCapitalizedTitle,
    iconCancel = IconType.CROSS,
    iconEdit = IconType.PENCIL,
    iconSave = IconType.CHECK,
    iconType,
    onCancel,
    onEdit,
    onSave,
    textCancel,
    textEdit,
    textSave,
    title,
}) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    const onCancelCallback = useCallback(() => {
        setIsBeingEdited(false);
        onCancel();
    }, [isBeingEdited, onCancel]);

    const onSaveCallback = useCallback(() => {
        setIsBeingEdited(false);
        onSave();
    }, [isBeingEdited, onSave]);

    const setIsBeingEditedCallback = useCallback(() => {
        setIsBeingEdited(!isBeingEdited);
        onEdit();
    }, [isBeingEdited, onEdit]);

    return (
        <>
            <PanelHeader
                hasCapitalizedTitle={hasCapitalizedTitle}
                hasMarginBottom
                iconType={iconType}
                options={
                    isBeingEdited ? (
                        <ButtonWrapper>
                            <Button
                                iconType={iconCancel}
                                onClick={onCancelCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.TEXT_ONLY}
                            >
                                {textCancel}
                            </Button>
                            <Button
                                iconType={iconSave}
                                onClick={onSaveCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.OUTLINE}
                            >
                                {textSave}
                            </Button>
                        </ButtonWrapper>
                    ) : (
                        <Button
                            iconType={iconEdit}
                            onClick={setIsBeingEditedCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.TEXT_ONLY}
                        >
                            {textEdit}
                        </Button>
                    )
                }
                title={title}
            />
            {children}
        </>
    );
};

export default EditablePanel;
