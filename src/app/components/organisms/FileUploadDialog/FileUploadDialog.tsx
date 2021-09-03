import { ButtonSize, ButtonVariant, IconType, InputType } from '../../../types';
import { FileAlertType, FileTypes, FileUploaderStatus } from '../FileUploader/types';
import { FileUploader, FileUploaderStatusData } from '../FileUploader/FileUploader';
import { FileUploaderWrapper, Spacer } from './FileUploadDialog.sc';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Dialog } from '../Dialog';
import Input from '../../molecules/Input/Input';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface FileUploadDialogProps {
    description?: string;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    hasThumbNails?: boolean;
    iconCancel?: IconType;
    iconSave?: IconType;
    iconType?: IconType;
    isVisible: boolean;
    labelInputDescription?: ReactNode;
    labelInputName: ReactNode;
    maxFileSize?: number;
    maxFiles: number;
    maxLengthDescription?: number;
    maxLengthName?: number;
    name?: string;
    onAlert: (type: FileAlertType, fileNames?: string[]) => void;
    onChangeDescription?: (value: string) => void;
    onChangeName?: (value: string) => void;
    onClose: () => void;
    onDrop?: (files: File[]) => void;
    onUpload: (files: File[], name?: string, description?: string) => void;
    statusData: FileUploaderStatusData;
    textCancel: string;
    textSave: string;
    title: ReactNode;
}

export const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = ({
    description,
    fileNameLength = 100,
    fileTypes,
    hasThumbNails = false,
    labelInputDescription,
    labelInputName,
    iconCancel = IconType.CROSS,
    iconSave = IconType.CHECK,
    isVisible,
    maxFileSize = 5,
    maxFiles = 1,
    maxLengthDescription = 255,
    maxLengthName = 100,
    name,
    onAlert,
    onClose,
    onDrop,
    onUpload,
    statusData,
    textCancel,
    textSave,
    title,
    iconType = IconType.FILEADD,
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
                    fileNameLength={fileNameLength}
                    fileTypes={fileTypes}
                    hasThumbNails={hasThumbNails}
                    maxFileSize={maxFileSize}
                    maxFiles={maxFiles}
                    onAlert={onAlert}
                    onDrop={onDropCallback}
                    statusData={statusData}
                />
            </FileUploaderWrapper>

            {hasInputName && (
                <Input
                    isDisabled={statusData.status === FileUploaderStatus.LOADING}
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
                    isDisabled={statusData.status === FileUploaderStatus.LOADING}
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
