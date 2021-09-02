import { boolean, number, select } from '@storybook/addon-knobs';
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
import React, { FunctionComponent, useEffect, useState } from 'react';
import { isEmpty } from '../../../../lib';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFileSize = number('Max file size', 5);
    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFiles = number('Max files', 3);

    const [statusData, setStatusData] = useState<FileUploaderStatusData>(getDefaultTranslation(fileTypes, maxFileSize));

    const onAlert = (type: FileAlertType, fileNames?: string[]) => {
        if (fileTypes && maxFiles && maxFileSize) {
            setStatusData(getAlertTranslation(type, fileTypes, maxFiles, maxFileSize, fileNames));
        }
    };

    const onDrop = (files: File[]) => {
        const droppedFileNames = getFileNames(files);
        const droppedFileTypes = getFileTypes(files);
        const droppedFileFormats = getFileFormats(droppedFileTypes);
        const droppedFileSizes = getFileSizes(files);
        const filesTotalSize = getTotalSizeFiles(droppedFileSizes);

        setStatusData(getLoadingTranslation(droppedFileNames));

        if (!isEmpty(files)) {
            setTimeout(() => {
                setStatusData(getUploadedTranslation(droppedFileFormats, droppedFileNames, filesTotalSize));
            }, 5000);
        } else {
            setStatusData(getDefaultTranslation(fileTypes, maxFileSize));
        }
    };

    useEffect(() => {
        if (fileTypes && maxFileSize) {
            setStatusData(getDefaultTranslation(fileTypes, maxFileSize));
        }
    }, [maxFileSize, fileTypes]);

    return (
        <FileUploader
            fileTypes={[fileTypes]}
            hasThumbNails={boolean('Has thumbnails', false)}
            isDeleteFileAllowed={boolean('Is delete file allowed', false)}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
            statusData={statusData}
        />
    );
};
