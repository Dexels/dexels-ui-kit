import { FileAlertType, FileTypes } from './types';
import { FileUploader, FileUploaderStatusData } from './FileUploader';
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
import React, { FunctionComponent, useEffect, useState } from 'react';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFileSize = number('Max file size', 5);
    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFiles = number('Max files', 3);

    const [statusData, setStatusData] = useState<FileUploaderStatusData>(getDefaultTranslation(fileTypes, maxFileSize));

    const onAlert = (type: FileAlertType, fileNames?: string[]) => {
        if (fileTypes && fileNames && maxFiles && maxFileSize) {
            setStatusData(getAlertTranslation(type, fileTypes, fileNames, maxFiles, maxFileSize));
        }
    };

    const onDrop = (files: FileList) => {
        const droppedFileNames = getFileNames(files);
        const droppedFileTypes = getFileTypes(files);
        const droppedFileFormats = getFileFormats(droppedFileTypes);
        const droppedFileSizes = getFileSizes(files);
        const filesTotalSize = getTotalSizeFiles(droppedFileSizes);

        setStatusData(getLoadingTranslation(droppedFileNames));

        setTimeout(() => {
            setStatusData(getUploadedTranslation(droppedFileFormats, droppedFileNames, filesTotalSize));
        }, 5000);
    };

    useEffect(() => {
        if (fileTypes && maxFileSize) {
            setStatusData(getDefaultTranslation(fileTypes, maxFileSize));
        }
    }, [maxFileSize, fileTypes]);

    return (
        <FileUploader
            fileTypes={[fileTypes]}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
            statusData={statusData}
        />
    );
};
