import { boolean, number, select, text } from '@storybook/addon-knobs';
import { FileAlertType, FileTypes } from '../FileUploader/types';
import {
    getAlertTranslation,
    getDefaultTranslation,
    getLoadingTranslation,
    getUploadedTranslation,
} from '../FileUploader/utils/getTranslations';
import {
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileTypes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import FileUploadDialog from './FileUploadDialog';
import { FileUploaderStatusData } from '../FileUploader/FileUploader';
import { IconType } from '../../../types';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFileSize = number('Max file size', 5);
    const maxFiles = number('Max files', 3);

    const [statusData, setStatusData] = useState<FileUploaderStatusData>(getDefaultTranslation(fileTypes, maxFileSize));

    const onCloseCallback = useCallback(() => {
        setIsVisible(false);
    }, []);

    const onAlertCallback = useCallback(
        (type: FileAlertType, fileNames?: string[]) => {
            if (fileTypes && maxFiles && maxFileSize) {
                setStatusData(getAlertTranslation(type, fileTypes, maxFiles, maxFileSize, fileNames));
            }
        },
        [fileTypes, maxFiles, maxFileSize]
    );

    const onDropCallback = useCallback(
        (files: File[]) => {
            const totalSizeFiles = getTotalSizeFiles(getFileSizes(files));

            if (isEmpty(files)) {
                setStatusData(getDefaultTranslation(fileTypes, maxFileSize));
            } else {
                setStatusData(
                    getUploadedTranslation(getFileTypes(files), getFileFormats(getFileTypes(files)), totalSizeFiles)
                );
            }
        },
        [fileTypes, maxFileSize]
    );

    const onUploadCallback = useCallback((files: File[], name?: string, description?: string) => {
        // eslint-disable-next-line no-alert
        alert(`Start uploading with name: ${name || ''} and description ${description || ''}`);

        const droppedFileNames = getFileNames(files);
        const droppedFileFormats = getFileFormats(getFileTypes(files));
        const droppedTotalSize = getTotalSizeFiles(getFileSizes(files));

        if (droppedFileFormats && droppedTotalSize && droppedFileNames) {
            setStatusData(getLoadingTranslation(droppedFileNames));

            setTimeout(() => {
                setStatusData(getUploadedTranslation(droppedFileFormats, droppedFileNames, droppedTotalSize));
            }, 5000);
        }
    }, []);

    useEffect(() => {
        if (fileTypes && maxFileSize) {
            setStatusData(getDefaultTranslation(fileTypes, maxFileSize));
        }
    }, [maxFileSize, fileTypes]);

    return (
        <FileUploadDialog
            fileTypes={[fileTypes]}
            hasThumbNails={boolean('Has thumbnails', false)}
            iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
            iconSave={select('Icon Save', IconType, IconType.CHECK)}
            isVisible={isVisible}
            labelInputDescription="Add description (optional)"
            labelInputName="Add name (optional)"
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlertCallback}
            onClose={onCloseCallback}
            onDrop={onDropCallback}
            onUpload={onUploadCallback}
            statusData={statusData}
            textCancel={text('Text Cancel', 'Cancel')}
            textSave={text('Text Save', 'Save')}
            title="Upload files"
        />
    );
};
