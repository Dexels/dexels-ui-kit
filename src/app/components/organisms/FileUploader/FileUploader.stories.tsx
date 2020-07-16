import { AlertType, FileTypes, LoadingProgress } from './types';
import { FileUploader, FileUploaderData } from './FileUploader';
import {
    getAlertTranslation,
    getDefaultTranslation,
    getLoadingTranslation,
    getUploadedTranslation,
} from './utils/getTranslations';
import {
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileTypes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import { number, select } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFileSizeRef = React.useRef<number>();
    maxFileSizeRef.current = number('Max file size', 5);
    const fileTypesRef = React.useRef<FileTypes>();
    fileTypesRef.current = select('Transition type', FileTypes, FileTypes.IMAGE);
    const maxFilesRef = React.useRef<number>();
    maxFilesRef.current = number('Max files', 3);

    const [data, setData] = React.useState<FileUploaderData>(
        getDefaultTranslation(fileTypesRef.current, maxFileSizeRef.current)
    );

    const onAlert = (type: AlertType, fileNames?: string[]) => {
        if (fileTypesRef.current && fileNames && maxFilesRef.current && maxFileSizeRef.current) {
            setData(
                getAlertTranslation(type, fileTypesRef.current, fileNames, maxFilesRef.current, maxFileSizeRef.current)
            );
        }
    };

    const onDrop = async (files: FileList) => {
        const droppedFileNames = getFileNames(files);
        const droppedFileTypes = getFileTypes(files);
        const droppedFileFormats = getFileFormats(droppedFileTypes);
        const droppedFileSizes = getFileSizes(files);
        const filesTotalSize = getTotalSizeFiles(droppedFileSizes);

        const changeData = (progress: LoadingProgress) => {
            setData(getLoadingTranslation(droppedFileNames, filesTotalSize, progress));
        };

        await new Promise((resolve) => {
            let progress: LoadingProgress = 0;
            changeData(progress);

            const timer = setInterval(() => {
                progress += 25;

                if (progress > 100) {
                    clearInterval(timer);
                    resolve();
                }

                changeData(progress as LoadingProgress);
            }, 1000);
        });

        setData(getUploadedTranslation(droppedFileFormats, droppedFileNames, filesTotalSize));
    };

    React.useEffect(() => {
        if (fileTypesRef.current && maxFileSizeRef.current) {
            setData(getDefaultTranslation(fileTypesRef.current, maxFileSizeRef.current));
        }
    }, [maxFileSizeRef.current, fileTypesRef.current]);

    return (
        <FileUploader
            data={data}
            fileTypes={fileTypesRef.current}
            maxFileSize={maxFileSizeRef.current}
            maxFiles={maxFilesRef.current}
            onAlert={onAlert}
            onDrop={onDrop}
        />
    );
};
