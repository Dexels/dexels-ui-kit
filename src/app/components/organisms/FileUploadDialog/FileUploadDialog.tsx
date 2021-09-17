import { ButtonSize, ButtonVariant, IconType, InputType } from '../../../types';
import { FileAlertType, FileTypes } from '../FileUploader/types';
import { FileUploaderWrapper, Spacer } from './FileUploadDialog.sc';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Dialog } from '../Dialog';
import { FileUploader } from '../FileUploader/FileUploader';
import Input from '../../molecules/Input/Input';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface FileUploadDialogProps {
    bottomText: ReactNode;
    buttonText: ReactNode;
    description?: string;
    errors?: ReactNode;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    iconCancel?: IconType;
    iconSave?: IconType;
    iconType?: IconType;
    isLoading?: boolean;
    isVisible: boolean;
    labelInputDescription?: ReactNode;
    labelInputName: ReactNode;
    maxFileSize?: number;
    maxFiles: number;
    maxLengthDescription?: number;
    maxLengthName?: number;
    name?: string;
    onAlert(type: FileAlertType, fileSize?: number): void;
    onClose: () => void;
    onDrop?: (files: File[]) => void;
    onUpload: (files: File[], name?: string, description?: string) => void;
    textCancel: string;
    textSave: string;
    title: ReactNode;
    topText: ReactNode;
}

export const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = ({
    bottomText,
    buttonText,
    description,
    errors,
    fileNameLength = 100,
    fileTypes,
    iconType = IconType.FILEADD,
    labelInputDescription,
    labelInputName,
    iconCancel = IconType.CROSS,
    iconSave = IconType.CHECK,
    isVisible,
    isLoading = false,
    maxFileSize = 5,
    maxFiles = 1,
    maxLengthDescription = 255,
    maxLengthName = 100,
    name,
    onAlert,
    onClose,
    onDrop,
    onUpload,
    textCancel,
    textSave,
    title,
    topText,
}) => {
    const [inputDescriptionValue, setInputDescriptionValue] = useState(description);
    const [inputNameValue, setInputNameValue] = useState(name);
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);
    const hasInputName = !isEmpty(labelInputName) && maxFiles === 1;
    const hasInputDescription = !isEmpty(labelInputDescription) && maxFiles === 1;
    const [isUploadAllowed, setIsUploadAllowed] = useState(false);

    const onDropCallback = useCallback(
        (files: File[]) => {
            setDroppedFiles(files);

            if (onDrop) {
                onDrop(files);
            }
        },
        [onDrop]
    );

    const onUploadCallback = useCallback(() => {
        if (onUpload && droppedFiles) {
            onUpload(droppedFiles, inputNameValue, inputDescriptionValue);
        }
    }, [droppedFiles, inputNameValue, inputDescriptionValue, onUpload]);

    useEffect(() => {
        setIsUploadAllowed(!isEmpty(droppedFiles));
    }, [droppedFiles]);

    return (
        <Dialog
            footerButtons={[
                {
                    children: textCancel,
                    iconType: iconCancel,
                    onClick: onClose,
                    size: ButtonSize.SMALL,
                    variant: ButtonVariant.TEXT_ONLY,
                },
                {
                    children: textSave,
                    iconType: iconSave,
                    isDisabled: !isUploadAllowed,
                    onClick: onUploadCallback,
                    size: ButtonSize.SMALL,
                },
            ]}
            iconType={iconType}
            isVisible={isVisible}
            onClose={onClose}
            title={title}
        >
            <FileUploaderWrapper>
                <FileUploader
                    bottomText={bottomText}
                    buttonText={buttonText}
                    errors={errors}
                    fileNameLength={fileNameLength}
                    fileTypes={fileTypes}
                    isLoading={isLoading}
                    maxFileSize={maxFileSize}
                    maxFiles={maxFiles}
                    onAlert={onAlert}
                    onDrop={onDropCallback}
                    topText={topText}
                />
            </FileUploaderWrapper>

            {hasInputName && (
                <Input
                    label={labelInputName}
                    maxLength={maxLengthName}
                    name="name"
                    onChange={({ currentTarget }): void => {
                        setInputNameValue(currentTarget.value);
                    }}
                    type={InputType.TEXT}
                    value={inputNameValue}
                />
            )}
            {hasInputName && hasInputDescription && <Spacer />}
            {hasInputDescription && (
                <Input
                    label={labelInputDescription}
                    maxLength={maxLengthDescription}
                    name="description"
                    onChange={({ currentTarget }): void => {
                        setInputDescriptionValue(currentTarget.value);
                    }}
                    type={InputType.TEXT}
                    value={inputDescriptionValue}
                />
            )}
        </Dialog>
    );
};

export default FileUploadDialog;
