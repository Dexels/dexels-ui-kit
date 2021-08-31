import {
    BottomText,
    FileUploaderContent,
    FileUploaderInfo,
    FileUploaderWrapper,
    HiddenInput,
    IconWrapper,
    StyledButton,
    TopText,
} from './FileUploader.sc';
import { ButtonVariant, IconType } from '../../../types';
import { FileAlertType, FileTypes, FileUploaderStatus } from './types';
import { getFileNames, getFileSizes, getFileTypes } from '../../../utils/functions/fileFunctions';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { defineFileFormats } from './utils/defineFileFormats';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import { ProgressBar } from '../../molecules/ProgressBar/ProgressBar';

export interface FileUploaderStatusData {
    bottomText: ReactNode;
    buttonText: ReactNode;
    message: ReactNode;
    status: FileUploaderStatus;
}
export interface FileUploaderProps {
    className?: string;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    maxFileSize: number;
    maxFiles: number;
    onAlert(type: FileAlertType, fileNames?: string[]): void;
    onDrop(files: FileList): void;
    statusData: FileUploaderStatusData;
}

export const FileUploader: FunctionComponent<FileUploaderProps> = ({
    className,
    onAlert,
    onDrop,
    maxFileSize,
    maxFiles,
    fileTypes,
    fileNameLength = 100,
    statusData,
}) => {
    const { status, message, buttonText, bottomText } = statusData;
    const fileFormats = useMemo(() => defineFileFormats(fileTypes), [fileTypes]);
    const [inDropZone, setInDropZone] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const getIconType = (statusType: FileUploaderStatus): IconType => {
        switch (statusType) {
            case FileUploaderStatus.ALERT:
                return IconType.DANGER;

            case FileUploaderStatus.LOADING:
                return IconType.CHANGE;

            default:
                return IconType.FILEGENERIC;
        }
    };

    const handleDrag = useCallback((event: React.DragEvent) => {
        event.preventDefault();
    }, []);

    const handleDragIn = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            setDragCounter(dragCounter + 1);

            if (event.dataTransfer && event.dataTransfer.items && event.dataTransfer.items.length > 0) {
                setInDropZone(true);
            }
        },
        [dragCounter]
    );

    const handleDragOut = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            setDragCounter(dragCounter - 1);
        },
        [dragCounter]
    );

    const handleDrop = useCallback(
        (event: React.DragEvent | ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setInDropZone(false);

            const getFiles = () => {
                if ('dataTransfer' in event && event.dataTransfer) {
                    const { files } = event.dataTransfer;

                    return files;
                }

                if (event.target) {
                    const { files } = event.target as HTMLInputElement;

                    return files;
                }

                return null;
            };

            const files = getFiles();

            if (files) {
                const filesNames = getFileNames(files);
                const droppedFilesTypes = getFileTypes(files);
                const filesSizes = getFileSizes(files);

                if (!isEmpty(files)) {
                    if (!maxFiles || maxFiles <= 0 || files.length > maxFiles) {
                        onAlert(FileAlertType.NUMBER);
                    } else if (
                        droppedFilesTypes.filter((type) => fileFormats && fileFormats.includes(type)).length === 0
                    ) {
                        onAlert(FileAlertType.TYPE, filesNames);
                    } else if (!maxFileSize || !isEmpty(filesSizes.filter((size) => size / 1000000 > maxFileSize))) {
                        onAlert(FileAlertType.SIZE, filesNames);
                    } else if (!isEmpty(filesNames.filter((name) => name.length > fileNameLength))) {
                        onAlert(FileAlertType.NAME, filesNames);
                    } else {
                        onDrop(files);
                    }

                    if ('dataTransfer' in event && event.dataTransfer) {
                        event.dataTransfer.clearData();
                    }

                    setDragCounter(0);
                }
            }
        },
        [fileFormats, fileNameLength, maxFiles, maxFileSize, onAlert, onDrop]
    );

    useEffect(() => {
        if (dragCounter === 0) {
            setInDropZone(false);
        }
    }, [dragCounter]);

    const button = useMemo(() => {
        if (status === FileUploaderStatus.LOADING || (status === FileUploaderStatus.SUCCESS && maxFiles === 1)) {
            return null;
        }

        return (
            <StyledButton iconType={IconType.FOLDERSEARCH} variant={ButtonVariant.FILLED}>
                {buttonText}
                <HiddenInput onChange={handleDrop} type="file" />
            </StyledButton>
        );
    }, [maxFiles, status]);

    return (
        <FileUploaderWrapper
            className={className}
            isDragging={inDropZone}
            key="FileUploaderWrapper1"
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <FileUploaderContent key="FileUploaderContent">
                <FileUploaderInfo isDragging={inDropZone} key="FileUploaderInfo">
                    <>
                        {status === FileUploaderStatus.LOADING && <ProgressBar isIndeterminate />}

                        <IconWrapper
                            isInvalid={status === FileUploaderStatus.ALERT}
                            isSuccess={status === FileUploaderStatus.SUCCESS}
                        >
                            <IconCustomizable iconSize={IconCustomizableSize.SIZE36} iconType={getIconType(status)} />
                        </IconWrapper>

                        <TopText
                            isInvalid={status === FileUploaderStatus.ALERT}
                            isLoading={status === FileUploaderStatus.LOADING}
                            isSuccess={status === FileUploaderStatus.SUCCESS}
                        >
                            {message}
                        </TopText>
                        {button}
                        <BottomText>{bottomText}</BottomText>
                    </>
                </FileUploaderInfo>
            </FileUploaderContent>
        </FileUploaderWrapper>
    );
};

export default FileUploader;
