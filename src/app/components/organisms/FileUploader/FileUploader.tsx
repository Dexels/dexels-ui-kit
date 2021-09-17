import {
    BottomText,
    FileCardsWrapper,
    FileUploaderContent,
    FileUploaderInfo,
    FileUploaderWrapper,
    HiddenInput,
    StyledButton,
    TopText,
} from './FileUploader.sc';
import { ButtonVariant, IconType } from '../../../types';
import { FileAlertType, FileTypes, FileUploaderStatus } from './types';
import { getFileNames, getFileSizes, getFileTypes } from '../../../utils/functions/fileFunctions';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { defineFileFormats } from './utils/defineFileFormats';
import FileCard from './FileCard/FileCard';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import { ProgressBar } from '../../molecules/ProgressBar/ProgressBar';

export interface FileUploaderProps {
    bottomText: ReactNode;
    buttonText: ReactNode;
    className?: string;
    errors?: ReactNode;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    isLoading?: boolean;
    maxFileSize: number;
    maxFiles: number;
    onAlert(type?: FileAlertType, fileSize?: number): void;
    onDrop(files: File[]): void;
    topText: ReactNode;
}

export const FileUploader: FunctionComponent<FileUploaderProps> = ({
    className,
    errors,
    fileTypes,
    fileNameLength = 100,
    isLoading = false,
    maxFileSize,
    maxFiles,
    onAlert,
    onDrop,
    topText,
    buttonText,
    bottomText,
}) => {
    const fileFormats = useMemo(() => defineFileFormats(fileTypes), [fileTypes]);
    const [inDropZone, setInDropZone] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);
    const [inputValue, setInputValue] = useState('');
    const [isDropZoneVisible, setIsDropZoneVisible] = useState(true);
    const [status, setStatus] = useState(FileUploaderStatus.DEFAULT);
    const [isValidationRequired, setIsValidationRequired] = useState(false);

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

    const validateDroppedFiles = useCallback(
        (files: File[]): FileAlertType | undefined => {
            const droppedFilesNames = getFileNames(files);
            const droppedFilesTypes = getFileTypes(files);
            const droppedFilesSizes = getFileSizes(files);

            if (!isEmpty(files)) {
                if (droppedFilesTypes.some((type) => fileFormats && !fileFormats.includes(type))) {
                    return FileAlertType.TYPE;
                }

                if (maxFileSize && !isEmpty(droppedFilesSizes.filter((size) => size / 1000000 > maxFileSize))) {
                    return FileAlertType.SIZE;
                }

                if (droppedFilesNames.some((name) => name.length > fileNameLength)) {
                    return FileAlertType.NAME;
                }
            }

            return undefined;
        },
        [fileFormats, maxFileSize, fileNameLength]
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

            const fileList = getFiles();

            if (fileList) {
                const files = Array.from(fileList);

                const newFileSize = files.map((file) => file.size)[0];

                const allFiles = droppedFiles.concat(files);

                if (!isEmpty(allFiles)) {
                    setDroppedFiles(allFiles);

                    const validationStatus = validateDroppedFiles(files);

                    if (validationStatus) {
                        setStatus(FileUploaderStatus.ALERT);
                        onAlert(validationStatus, newFileSize);
                    } else {
                        onDrop(allFiles);
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
        (fileIndex: number) => {
            const newFiles = droppedFiles.filter((_, index) => index !== fileIndex);
            onDrop(newFiles);
            setIsValidationRequired(true);
            setDroppedFiles(newFiles);
        },
        [droppedFiles, onDrop]
    );

    // Reset hidden button on click so that you can upload the same file again
    const onClickCallback = useCallback(() => {
        setInputValue('');
    }, []);

    // Validate droppedFiles after deleted file, only change the status if the invalid file is deleted
    useEffect(() => {
        if (isValidationRequired) {
            if (!validateDroppedFiles(droppedFiles)) {
                setStatus(FileUploaderStatus.DEFAULT);
                onAlert();
            }

            setIsValidationRequired(false);
        }
    }, [isValidationRequired]);

    // Hide the dropzone when there are erros, the status is alert or already enough files are uploaded
    useEffect(() => {
        setIsDropZoneVisible(
            !errors && status !== FileUploaderStatus.ALERT && (maxFiles === undefined || maxFiles > droppedFiles.length)
        );
    }, [errors, status, maxFiles, droppedFiles]);

    const button = useMemo(
        () => (
            <StyledButton iconType={IconType.FOLDERSEARCH} key={dragCounter} variant={ButtonVariant.FILLED}>
                {buttonText}
                <HiddenInput onChange={handleDrop} onClick={onClickCallback} type="file" value={inputValue} />
            </StyledButton>
        ),
        [buttonText, handleDrop, inputValue]
    );

    const optionalFileInput = useMemo(() => undefined, []);

    const fileCards = useMemo(() => {
        if (isEmpty(droppedFiles)) {
            return null;
        }

        return droppedFiles.map((file, index) => {
            const isInvalud = !isEmpty(errors) && index === droppedFiles.length - 1;

            return (
                <FileCard
                    error={isInvalud ? errors : undefined}
                    file={file}
                    isInvalid={isInvalud}
                    isLoading={isLoading}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${file.name}-${index}`}
                    onDelete={() => onDeleteCallback(index)}
                >
                    {optionalFileInput}
                </FileCard>
            );
        });
    }, [droppedFiles, onDeleteCallback]);

    useEffect(() => {
        if (dragCounter === 0) {
            setInDropZone(false);
        }
    }, [dragCounter]);

    return (
        <>
            {fileCards && <FileCardsWrapper>{fileCards}</FileCardsWrapper>}
            {isDropZoneVisible && (
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

                                <TopText>{topText}</TopText>
                                {button}
                                <BottomText>{bottomText}</BottomText>
                            </>
                        </FileUploaderInfo>
                    </FileUploaderContent>
                </FileUploaderWrapper>
            )}
        </>
    );
};

export default FileUploader;
