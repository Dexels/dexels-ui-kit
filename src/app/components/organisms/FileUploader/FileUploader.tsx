import {
    AlertIcon,
    AlertText,
    BottomText,
    FileUploaderContent,
    FileUploaderInfo,
    FileUploaderWrapper,
    HiddenInput,
    LoadingBar,
    StatusText,
    StyledButton,
    SuccessIcon,
    TopText,
} from './FileUploader.sc';
import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from './types';
import { ButtonVariant, IconType } from '../../../types';
import { getFileNames, getFileSizes, getFileTypes } from '../../../utils/functions/fileFunctions';
import React, { ChangeEvent, FunctionComponent } from 'react';
import { defineFileFormats } from './utils/defineFileFormats';

export interface FileUploaderData {
    bottomText: string;
    buttonText: string;
    message: string;
    progress: LoadingProgress;
    status: FileUploaderStatus;
}
export interface FileUploaderProps {
    className?: string;
    data: FileUploaderData;
    fileTypes: FileTypes;
    maxFileSize: number;
    maxFiles: number;
    onAlert(type: AlertType, fileNames?: string[]): void;
    onDrop(files: FileList): void;
}

export const FileUploader: FunctionComponent<FileUploaderProps> = ({
    className,
    data,
    onAlert,
    onDrop,
    maxFileSize,
    maxFiles,
    fileTypes,
}) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragCounter, setDragCounter] = React.useState(0);
    const dropRef = React.useRef<HTMLDivElement | null>(null);
    const { status, message, buttonText, bottomText, progress } = data;
    const fileFormatsRef = React.useRef<string[]>();
    fileFormatsRef.current = defineFileFormats(fileTypes);
    const maxFilesRef = React.useRef<number>();
    maxFilesRef.current = maxFiles;
    const maxFileSizeRef = React.useRef<number>();
    maxFileSizeRef.current = maxFileSize;

    enum listenerAction {
        add = 'add',
        remove = 'remove',
    }

    function handleDrag(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    function handleDragIn(event: DragEvent) {
        handleDrag(event);
        setDragCounter(dragCounter + 1);

        if (event.dataTransfer && event.dataTransfer.items && event.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    }

    function handleDragOut(event: DragEvent) {
        handleDrag(event);
        setDragCounter(dragCounter - 1);

        if (dropRef.current && !dropRef.current.contains(event.relatedTarget as Node) && dragCounter <= 0) {
            setIsDragging(false);
        }
    }

    function handleDrop(event: DragEvent | ChangeEvent<HTMLInputElement>) {
        const getFiles = () => {
            if ('dataTransfer' in event && event.dataTransfer) {
                handleDrag(event);
                setIsDragging(false);
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

            if (files && files.length > 0) {
                if (!maxFilesRef.current || maxFilesRef.current <= 0 || files.length > maxFiles) {
                    onAlert(AlertType.NUMBER);
                } else if (
                    droppedFilesTypes.filter((type) => fileFormatsRef.current && fileFormatsRef.current.includes(type))
                        .length === 0
                ) {
                    onAlert(AlertType.TYPE, filesNames);
                } else if (
                    !maxFileSizeRef.current ||
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    filesSizes.filter((size) => size / 1000000 > maxFileSizeRef.current!).length > 0
                ) {
                    onAlert(AlertType.SIZE, filesNames);
                } else {
                    // eslint-disable-next-line no-use-before-define
                    manageListeners(listenerAction.remove);
                    onDrop(files);
                }

                if ('dataTransfer' in event && event.dataTransfer) {
                    event.dataTransfer.clearData();
                }

                setDragCounter(0);
            }
        }
    }

    function manageListeners(action: listenerAction) {
        const dropDiv = dropRef.current;

        if (dropDiv) {
            if (action === listenerAction.add) {
                dropDiv.addEventListener('dragenter', handleDragIn, true);
                dropDiv.addEventListener('dragleave', handleDragOut, true);
                dropDiv.addEventListener('dragover', handleDrag, true);
                dropDiv.addEventListener('drop', handleDrop, true);
            } else {
                dropDiv.removeEventListener('dragenter', handleDragIn, true);
                dropDiv.removeEventListener('dragleave', handleDragOut, true);
                dropDiv.removeEventListener('dragover', handleDrag, true);
                dropDiv.removeEventListener('drop', handleDrop, true);
            }
        }
    }

    React.useEffect(() => {
        setDragCounter(0);
        manageListeners(listenerAction.add);

        return function cleanup() {
            manageListeners(listenerAction.remove);
        };
    }, []);

    const button = (
        <StyledButton iconType={IconType.FOLDERSEARCH} variant={ButtonVariant.FILLED}>
            {buttonText}
            <HiddenInput onChange={(event) => handleDrop(event)} type="file" />
        </StyledButton>
    );

    return (
        <FileUploaderWrapper className={className} isDragging={isDragging} ref={dropRef}>
            <FileUploaderContent>
                {status === FileUploaderStatus.DEFAULT && (
                    <FileUploaderInfo>
                        <TopText>{message}</TopText>
                        {button}
                        <BottomText>{bottomText}</BottomText>
                    </FileUploaderInfo>
                )}
                {status === FileUploaderStatus.SUCCESS && (
                    <FileUploaderInfo>
                        <SuccessIcon type={IconType.FILEGENERIC} />
                        <StatusText>{message}</StatusText>
                        <BottomText>{bottomText}</BottomText>
                    </FileUploaderInfo>
                )}
                {status === FileUploaderStatus.ALERT && (
                    <FileUploaderInfo>
                        <AlertIcon type={IconType.STATUSERROR} />
                        <AlertText>{message}</AlertText>
                        {button}
                        <BottomText>{bottomText}</BottomText>
                    </FileUploaderInfo>
                )}
                {status === FileUploaderStatus.LOADING && (
                    <FileUploaderInfo>
                        <LoadingBar progress={progress} />
                        <StatusText>{message}</StatusText>
                        <BottomText>{bottomText}</BottomText>
                    </FileUploaderInfo>
                )}
            </FileUploaderContent>
        </FileUploaderWrapper>
    );
};

export default FileUploader;
