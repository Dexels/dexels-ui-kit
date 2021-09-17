import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import { FileAlertType, FileTypes } from '../FileUploader/types';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Dialog } from '../Dialog';
import { FileUploader } from '../FileUploader/FileUploader';
import { FileUploaderWrapper } from './FileUploadDialog.sc';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface FileUploaderTextData {
    bottomText: ReactNode;
    buttonText: ReactNode;
    topText: ReactNode;
}

export interface FileUploadDialogProps {
    description?: string;
    errors?: ReactNode;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    fileUploaderData: FileUploaderTextData;
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
    text?: ReactNode;
    textCancel: string;
    textSave: string;
    title: ReactNode;
}

export const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = ({
    fileUploaderData,
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
    maxLengthDescription,
    maxLengthName,
    name,
    onAlert,
    onClose,
    onDrop,
    onUpload,
    textCancel,
    textSave,
    title,
    text,
}) => {
    const { buttonText, bottomText, topText } = fileUploaderData;
    const [inputDescriptionValue, setInputDescriptionValue] = useState(description);
    const [inputNameValue, setInputNameValue] = useState(name);
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);

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
        setIsUploadAllowed(!isEmpty(droppedFiles) && !errors);
    }, [droppedFiles, errors]);

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
            text={text}
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
                    labelInputDescription={labelInputDescription}
                    labelInputName={labelInputName}
                    maxFileSize={maxFileSize}
                    maxFiles={maxFiles}
                    maxLengthDescription={maxLengthDescription}
                    maxLengthName={maxLengthName}
                    onAlert={onAlert}
                    onChangeDescription={({ currentTarget }): void => {
                        setInputDescriptionValue(currentTarget.value);
                    }}
                    onChangeName={({ currentTarget }): void => {
                        setInputNameValue(currentTarget.value);
                    }}
                    onDrop={onDropCallback}
                    topText={topText}
                />
            </FileUploaderWrapper>
        </Dialog>
    );
};

export default FileUploadDialog;
