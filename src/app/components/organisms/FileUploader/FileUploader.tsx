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
import { FileAlertType, FileTypes } from './types';
import { getFileNames, getFileSizes, getFileTypes } from '../../../utils/functions/fileFunctions';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { defineFileFormats } from './utils/defineFileFormats';
import FileCard from './FileCard/FileCard';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface FileUploaderProps {
    bottomText: ReactNode;
    buttonText: ReactNode;
    className?: string;
    errors?: ReactNode;
    fileNameLength?: number;
    fileTypes: FileTypes[];
    isLoading?: boolean;
    labelInputDescription?: ReactNode;
    labelInputName?: ReactNode;
    maxFileSize: number;
    maxFiles: number;
    maxLengthDescription?: number;
    maxLengthName?: number;
    onAlert(type?: FileAlertType, fileSize?: number): void;
    onChangeDescription?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeName?: (event: ChangeEvent<HTMLInputElement>) => void;
    onDrop(files: File[]): void;
    topText: ReactNode;
    valueDescription?: string;
    valueName?: string;
}

export const FileUploader: FunctionComponent<FileUploaderProps> = ({
    bottomText,
    buttonText,
    className,
    errors,
    fileTypes,
    fileNameLength = 100,
    isLoading = false,
    labelInputDescription,
    labelInputName,
    maxFileSize,
    maxFiles,
    maxLengthDescription,
    maxLengthName,
    onAlert,
    onChangeName,
    onChangeDescription,
    onDrop,
    topText,
    valueDescription,
    valueName,
}) => {
    const fileFormats = useMemo(() => defineFileFormats(fileTypes), [fileTypes]);
    const [inDropZone, setInDropZone] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);
    const [inputValue, setInputValue] = useState('');
    const [isDropZoneVisible, setIsDropZoneVisible] = useState(true);
    const [isValidationRequired, setIsValidationRequired] = useState(false);

    const hasInputName = !isEmpty(labelInputName) && maxFiles === 1;
    const hasInputDescription = !isEmpty(labelInputDescription) && maxFiles === 1;

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
                onAlert();
            }

            setIsValidationRequired(false);
        }
    }, [isValidationRequired]);

    // Hide the dropzone when there are erros, the status is alert or already enough files are uploaded
    useEffect(() => {
        setIsDropZoneVisible(!errors && (maxFiles === undefined || maxFiles > droppedFiles.length));
    }, [errors, maxFiles, droppedFiles]);

    const button = useMemo(
        () => (
            <StyledButton iconType={IconType.FOLDERSEARCH} key={dragCounter} variant={ButtonVariant.FILLED}>
                {buttonText}
                <HiddenInput onChange={handleDrop} onClick={onClickCallback} type="file" value={inputValue} />
            </StyledButton>
        ),
        [buttonText, handleDrop, inputValue]
    );

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
                    labelInputDescription={hasInputDescription && !isInvalud ? labelInputDescription : undefined}
                    labelInputName={hasInputName && !isInvalud ? labelInputName : undefined}
                    maxLengthDescription={maxLengthDescription}
                    maxLengthName={maxLengthName}
                    onChangeDescription={onChangeDescription}
                    onChangeName={onChangeName}
                    onDelete={() => onDeleteCallback(index)}
                    valueDescription={valueDescription}
                    valueName={valueName}
                />
            );
        });
    }, [droppedFiles, labelInputDescription, labelInputName, maxFiles, onDeleteCallback]);

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
