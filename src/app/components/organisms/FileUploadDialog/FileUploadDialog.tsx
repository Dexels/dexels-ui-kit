import { AlertType, FileTypes } from '../FileUploader/types';
import { IconSize, IconType, InputType } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyledFileUploader, StyledTextWithOptionalIcon } from './FileUploadDialog.sc';
import { Dialog } from '../Dialog';
import { DialogFooterProps } from '../../molecules/DialogFooter/DialogFooter';
import { FileUploaderData } from '../FileUploader/FileUploader';
import Input from '../../molecules/Input/Input';
import parseInputValue from '../../../utils/functions/parseInputValue';

export interface FileUploadDialogProps {
    buttons: DialogFooterProps['buttons'];
    className?: string;
    data: FileUploaderData;
    description?: string;
    fileTypes: FileTypes;
    inputText: ReactNode;
    isVisible: boolean;
    maxFileSize?: number;
    maxFiles: number;
    onAlert(type: AlertType, fileNames?: string[]): void;
    onChangeDescription(value: string): void;
    onClose(): void;
    onDrop(files: FileList): void;
    title: ReactNode;
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
    onClose,
}) => (
    <Dialog className={className} footerButtons={buttons} isVisible={isVisible} onClose={onClose}>
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
            isDisabled={data.status === 'loading'}
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
