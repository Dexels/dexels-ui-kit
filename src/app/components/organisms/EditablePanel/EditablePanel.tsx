import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../molecules/Button/Button';
import { ButtonWrapper } from './EditablePanel.sc';
import { ConfirmDialog } from './types';
import { Dialog } from '../Dialog';

export interface EditablePanelProps extends Omit<PanelHeaderProps, 'children' | 'options'> {
    cancelConfirmDialog?: ConfirmDialog;
    children: ReactNode;
    hasButtons?: boolean; // Will be derived from onSave action in parent component
    hasError?: boolean;
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    isDisabled?: boolean;
    isEditing?: boolean;
    isSaving?: boolean;
    keepEditMode?: boolean;
    onCancel: () => void;
    onEdit: () => void;
    onSave: () => void;
    saveConfirmDialog?: ConfirmDialog;
    status?: Status;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export const EditablePanel: FunctionComponent<EditablePanelProps> = ({
    cancelConfirmDialog,
    children,
    hasButtons = true,
    hasCapitalizedTitle,
    hasError = false,
    iconCancel = IconType.CROSS,
    iconEdit = IconType.PENCIL,
    iconSave = IconType.CHECK,
    iconType,
    isDisabled = false,
    isEditing = false,
    isSaving = false,
    keepEditMode = false,
    onCancel,
    onEdit,
    onSave,
    saveConfirmDialog,
    status,
    textCancel,
    textEdit,
    textSave,
    title,
}) => {
    const [isBeingEdited, setIsBeingEdited] = useState(isEditing);
    const [isSaveConfirmDialogVisible, setIsSaveConfirmDialogVisible] = useState(false);
    const [isCancelConfirmDialogVisible, setIsCancelConfirmDialogVisible] = useState(false);

    const savedCallback = useRef<() => void>();
    const canceledCallback = useRef<() => void>();

    useEffect(() => {
        setIsBeingEdited(isEditing);
    }, [isEditing]);

    // After every render, save the latest callback into a ref.
    useEffect(() => {
        savedCallback.current = onSave;
        canceledCallback.current = onCancel;
    });

    const onCancelCallback = () => {
        if (cancelConfirmDialog) {
            setIsCancelConfirmDialogVisible(true);
        } else {
            setIsBeingEdited(false);

            if (canceledCallback.current) {
                canceledCallback.current();
            }
        }
    };

    const onSaveCallback = () => {
        if (saveConfirmDialog) {
            setIsSaveConfirmDialogVisible(true);
        } else {
            if (!keepEditMode) {
                setIsBeingEdited(!hasError);
            }

            if (savedCallback.current) {
                savedCallback.current();
            }
        }
    };

    const onCloseSaveConfirmDialogCallback = useCallback(() => {
        setIsSaveConfirmDialogVisible(false);
    }, []);

    const onConfirmSaveCallback = useCallback(() => {
        setIsBeingEdited(!hasError);
        setIsSaveConfirmDialogVisible(false);

        if (savedCallback.current) {
            savedCallback.current();
        }
    }, [savedCallback.current]);

    const onCloseCancelConfirmDialogCallback = useCallback(() => {
        setIsCancelConfirmDialogVisible(false);
    }, []);

    const onConfirmCancelCallback = useCallback(() => {
        setIsBeingEdited(false);
        setIsCancelConfirmDialogVisible(false);

        if (canceledCallback.current) {
            canceledCallback.current();
        }
    }, [canceledCallback.current]);

    const setIsBeingEditedCallback = useCallback(() => {
        setIsBeingEdited(!isBeingEdited);
        onEdit();
    }, [isBeingEdited, onEdit]);

    return (
        <>
            <PanelHeader
                hasCapitalizedTitle={hasCapitalizedTitle}
                hasMarginBottom
                hasTitleStatusAppearance
                iconType={iconType}
                isDisabled={isDisabled}
                options={
                    // eslint-disable-next-line no-nested-ternary
                    !hasButtons ? undefined : isBeingEdited ? (
                        <ButtonWrapper>
                            <Button
                                iconType={iconCancel}
                                isDisabled={isSaving}
                                onClick={onCancelCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.TEXT_ONLY}
                            >
                                {textCancel}
                            </Button>
                            <Button
                                iconType={iconSave}
                                isDisabled={isDisabled || hasError}
                                isLoading={isSaving}
                                onClick={!hasError ? onSaveCallback : undefined}
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
                status={status}
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
