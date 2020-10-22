import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';
import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import Button from '../../molecules/Button/Button';
import { ButtonWrapper } from './EditablePanel.sc';
import { ConfirmDialog } from './types';
import { Dialog } from '../Dialog';

export interface EditablePanelProps extends Omit<PanelHeaderProps, 'children' | 'options'> {
    cancelConfirmDialog?: ConfirmDialog;
    children: ReactNode;
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    isDisabled?: boolean;
    isSaving?: boolean;
    onCancel: () => void;
    onEdit: () => void;
    onSave: () => void;
    saveConfirmDialog?: ConfirmDialog;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export const EditablePanel: FunctionComponent<EditablePanelProps> = ({
    cancelConfirmDialog,
    children,
    hasCapitalizedTitle,
    iconCancel = IconType.CROSS,
    iconEdit = IconType.PENCIL,
    iconSave = IconType.CHECK,
    iconType,
    isDisabled = false,
    isSaving = false,
    onCancel,
    onEdit,
    onSave,
    saveConfirmDialog,
    textCancel,
    textEdit,
    textSave,
    title,
}) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [isSaveConfirmDialogVisible, setIsSaveConfirmDialogVisible] = useState(false);
    const [isCancelConfirmDialogVisible, setIsCancelConfirmDialogVisible] = useState(false);

    const onCancelCallback = () => {
        if (cancelConfirmDialog) {
            setIsCancelConfirmDialogVisible(true);
        } else {
            setIsBeingEdited(false);
            onCancel();
        }
    };

    const onSaveCallback = () => {
        if (saveConfirmDialog) {
            setIsSaveConfirmDialogVisible(true);
        } else {
            setIsBeingEdited(false);
            onSave();
        }
    };

    const onCloseSaveConfirmDialogCallback = useCallback(() => {
        setIsSaveConfirmDialogVisible(false);
    }, []);

    const onConfirmSaveCallback = useCallback(() => {
        setIsBeingEdited(false);
        setIsSaveConfirmDialogVisible(false);
        onSave();
    }, []);

    const onCloseCancelConfirmDialogCallback = useCallback(() => {
        setIsCancelConfirmDialogVisible(false);
    }, []);

    const onConfirmCancelCallback = useCallback(() => {
        setIsBeingEdited(false);
        setIsCancelConfirmDialogVisible(false);
        onCancel();
    }, []);

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
                                isDisabled={isDisabled}
                                onClick={onCancelCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.TEXT_ONLY}
                            >
                                {textCancel}
                            </Button>
                            <Button
                                iconType={iconSave}
                                isDisabled={isDisabled}
                                isLoading={isSaving}
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
                            isDisabled={isDisabled}
                            isLoading={isSaving}
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

            {saveConfirmDialog ? (
                <Dialog
                    footerButtons={[
                        {
                            children: saveConfirmDialog.buttonCancelText,
                            iconType: IconType.CROSS,
                            onClick: onCloseSaveConfirmDialogCallback,
                            size: ButtonSize.SMALL,
                            variant: ButtonVariant.TEXT_ONLY,
                        },
                        {
                            children: saveConfirmDialog.buttonConfirmText,
                            iconType: IconType.CHECK,
                            onClick: onConfirmSaveCallback,
                            size: ButtonSize.SMALL,
                        },
                    ]}
                    iconType={saveConfirmDialog.iconType}
                    isVisible={isSaveConfirmDialogVisible}
                    status={saveConfirmDialog.status}
                    text={saveConfirmDialog.text}
                />
            ) : null}

            {cancelConfirmDialog ? (
                <Dialog
                    footerButtons={[
                        {
                            children: cancelConfirmDialog.buttonCancelText,
                            iconType: IconType.CROSS,
                            onClick: onCloseCancelConfirmDialogCallback,
                            size: ButtonSize.SMALL,
                            variant: ButtonVariant.TEXT_ONLY,
                        },
                        {
                            children: cancelConfirmDialog.buttonConfirmText,
                            iconType: IconType.CHECK,
                            onClick: onConfirmCancelCallback,
                            size: ButtonSize.SMALL,
                        },
                    ]}
                    iconType={cancelConfirmDialog.iconType}
                    isVisible={isCancelConfirmDialogVisible}
                    status={cancelConfirmDialog.status}
                    text={cancelConfirmDialog.text}
                />
            ) : null}
        </>
    );
};

export default EditablePanel;
