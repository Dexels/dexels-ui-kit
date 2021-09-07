import {
    BottomText,
    FileName,
    FileNamesWrapper,
    FileUploaderContent,
    FileUploaderInfo,
    FileUploaderWrapper,
    HiddenInput,
    IconWrapper,
    ImageWrapper,
    StyledButton,
    TopText,
} from './FileUploader.sc';
import { ButtonVariant, IconType } from '../../../types';
import { FileAlertType, FileTypes, FileUploaderStatus } from './types';
import { getFileNames, getFileSizes, getFileTypes } from '../../../utils/functions/fileFunctions';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
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
    hasThumbNails?: boolean;
    maxFileSize: number;
    maxFiles: number;
    onAlert(type: FileAlertType, fileNames?: string[]): void;
    onDrop(files: File[]): void;
    statusData: FileUploaderStatusData;
}

export const FileUploader: FunctionComponent<FileUploaderProps> = ({
    className,
    fileTypes,
    fileNameLength = 100,
    hasThumbNails = false,
    maxFileSize,
    maxFiles,
    onAlert,
    onDrop,
    statusData,
}) => {
    const { status, message, buttonText, bottomText } = statusData;
    const fileFormats = useMemo(() => defineFileFormats(fileTypes), [fileTypes]);
    const [inDropZone, setInDropZone] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);
    const [inputValue, setInputValue] = useState('');

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
                const newFileNames = Array.from(files).map((file) => file.name);

                const allFiles = droppedFiles.concat(Array.from(files));
                const droppedFilesNames = getFileNames(allFiles);
                const droppedFilesTypes = getFileTypes(allFiles);
                const droppedFilesSizes = getFileSizes(allFiles);

                if (!isEmpty(allFiles)) {
                    if (maxFiles && maxFiles > 0 && allFiles.length > maxFiles) {
                        onAlert(FileAlertType.NUMBER);
                    } else if (droppedFilesTypes.some((type) => fileFormats && !fileFormats.includes(type))) {
                        onAlert(FileAlertType.TYPE, newFileNames);
                    } else if (
                        maxFileSize &&
                        !isEmpty(droppedFilesSizes.filter((size) => size / 1000000 > maxFileSize))
                    ) {
                        onAlert(FileAlertType.SIZE);
                    } else if (droppedFilesNames.some((name) => name.length > fileNameLength)) {
                        onAlert(FileAlertType.NAME, newFileNames);
                    } else {
                        onDrop(allFiles);
                        setDroppedFiles(allFiles);
                    }

                    if ('dataTransfer' in event && event.dataTransfer) {
                        event.dataTransfer.clearData();
                    }

                    setDragCounter(0);
                }
            }
        },
        [droppedFiles, fileFormats, fileNameLength, maxFiles, maxFileSize, onAlert, onDrop]
    );

    const onDeleteCallback = useCallback(
        (fileName: string) => {
            const newFiles = droppedFiles.filter((file) => file.name !== fileName);
            onDrop(newFiles);
            setDroppedFiles(newFiles);
        },
        [droppedFiles, onDrop]
    );

    const onClickCallback = useCallback(() => {
        setInputValue('');
    }, []);

    const button = useMemo(() => {
        if (status === FileUploaderStatus.LOADING || (status === FileUploaderStatus.SUCCESS && maxFiles === 1)) {
            return null;
        }

        return (
            <StyledButton iconType={IconType.FOLDERSEARCH} key={dragCounter} variant={ButtonVariant.FILLED}>
                {buttonText}
                <HiddenInput onChange={handleDrop} onClick={onClickCallback} type="file" value={inputValue} />
            </StyledButton>
        );
    }, [buttonText, handleDrop, maxFiles, status, inputValue]);

    const fileNames = useMemo(() => {
        if (isEmpty(droppedFiles)) {
            return null;
        }

        return droppedFiles.map((file) => (
            <FileName key={file.name}>
                {hasThumbNails && status !== FileUploaderStatus.LOADING ? (
                    <ImageWrapper>
                        <img alt="" src={URL.createObjectURL(file)} />
                    </ImageWrapper>
                ) : (
                    `${file.name} `
                )}
                <ButtonIcon iconType={IconType.ROUND_CROSS} onClick={() => onDeleteCallback(file.name)} />
            </FileName>
        ));
    }, [droppedFiles, hasThumbNails, status]);

    useEffect(() => {
        if (dragCounter === 0) {
            setInDropZone(false);
        }
    }, [dragCounter]);

    return (
        <FileUploaderWrapper
            className={className}
            isDragging={inDropZone}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <FileUploaderContent>
                <FileUploaderInfo isDragging={inDropZone}>
                    <>
                        {status === FileUploaderStatus.LOADING && <ProgressBar isIndeterminate />}

                        {(status !== FileUploaderStatus.SUCCESS || !hasThumbNails) && (
                            <IconWrapper
                                isInvalid={status === FileUploaderStatus.ALERT}
                                isSuccess={status === FileUploaderStatus.SUCCESS}
                            >
                                <IconCustomizable
                                    iconSize={IconCustomizableSize.SIZE36}
                                    iconType={getIconType(status)}
                                />
                            </IconWrapper>
                        )}

                        <TopText
                            isInvalid={status === FileUploaderStatus.ALERT}
                            isLoading={status === FileUploaderStatus.LOADING}
                            isSuccess={status === FileUploaderStatus.SUCCESS}
                        >
                            <FileNamesWrapper>{fileNames}</FileNamesWrapper>
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
