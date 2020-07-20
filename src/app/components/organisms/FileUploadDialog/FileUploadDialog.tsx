import { AlertType, FileTypes } from '../FileUploader/types';
import { DialogFooterProps, IconSize, IconType, Input, InputType, parseInputValue } from '../../../../lib';
import React, { FunctionComponent } from 'react';
import { StyledFileUploader, StyledTextWithOptionalIcon } from './FileUploadDialog.sc';
import { Dialog } from '../Dialog';
import { FileUploaderData } from '../FileUploader/FileUploader';

export interface FileUploadDialogProps {
    buttons: DialogFooterProps['buttons'];
    className?: string;
    data: FileUploaderData;
    description?: string;
    fileTypes: FileTypes;
    inputText: string;
    isVisible: boolean;
    maxFileSize?: number;
    maxFiles: number;
    onAlert(type: AlertType, fileNames?: string[]): void;
    onChangeDescription(value: string): void;
    onDrop(files: FileList): void;
    title: string;
}

export const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = ({
    buttons,
    className,
    data,
    onAlert,
    onDrop,
    onChangeDescription,
    maxFileSize = 5,
    maxFiles = 1,
    fileTypes,
    isVisible,
    title,
    inputText,
    description,
}) => (
    <Dialog className={className} footerButtons={buttons} isVisible={isVisible}>
        <StyledTextWithOptionalIcon iconSize={IconSize.XLARGE} iconType={IconType.FILEADD}>
            {title}
        </StyledTextWithOptionalIcon>
        <StyledFileUploader
            data={data}
            fileTypes={fileTypes}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
        />
        <Input
            label={inputText}
            name="description"
            onChange={({ currentTarget }): void => {
                onChangeDescription(parseInputValue(currentTarget));
            }}
            type={InputType.TEXT}
            value={description}
        />
    </Dialog>
);

export default FileUploadDialog;
