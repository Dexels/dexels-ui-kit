import { FileAlertType, FileTypes, FileUploaderStatus } from '../FileUploader/types';
import { IconType, InputType } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import { Dialog } from '../Dialog';
import { DialogFooterProps } from '../../molecules/DialogFooter/DialogFooter';
import { FileUploaderData } from '../FileUploader/FileUploader';
import Input from '../../molecules/Input/Input';
import { StyledFileUploader } from './FileUploadDialog.sc';

export interface FileUploadDialogProps {
    buttons: DialogFooterProps['buttons'];
    className?: string;
    data: FileUploaderData;
    description?: string;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    iconType?: IconType;
    inputText: ReactNode;
    isVisible: boolean;
    maxFileSize?: number;
    maxFiles: number;
    maxLengthDescription?: number;
    onAlert(type: FileAlertType, fileNames?: string[]): void;
    onChangeDescription?(value: string): void;
    onClose(): void;
    onDrop(files: FileList): void;
    title: ReactNode;
}

export const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = ({
    buttons,
    className,
    data,
    description,
    fileNameLength = 100,
    fileTypes,
    inputText,
    isVisible,
    maxFileSize = 5,
    maxFiles = 1,
    maxLengthDescription = 255,
    onAlert,
    onChangeDescription,
    onClose,
    onDrop,
    title,
    iconType = IconType.FILEADD,
}) => (
    <Dialog
        className={className}
        footerButtons={buttons}
        iconType={iconType}
        isVisible={isVisible}
        onClose={onClose}
        title={title}
    >
        <StyledFileUploader
            data={data}
            fileNameLength={fileNameLength}
            fileTypes={fileTypes}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
        />
        {onChangeDescription && (
            <Input
                isDisabled={data.status === FileUploaderStatus.LOADING}
                label={inputText}
                maxLength={maxLengthDescription}
                name="description"
                onChange={({ currentTarget }): void => {
                    onChangeDescription(currentTarget.value);
                }}
                type={InputType.TEXT}
                value={description}
            />
        )}
    </Dialog>
);

export default FileUploadDialog;
