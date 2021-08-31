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
import { number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import FileUploadDialog from './FileUploadDialog';
import { FileUploaderStatusData } from '../FileUploader/FileUploader';
import { IconType } from '../../../types';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFileSize = number('Max file size', 5);
    const maxFiles = number('Max files', 1);

    const [statusData, setStatusData] = useState<FileUploaderStatusData>(getDefaultTranslation(fileTypes, maxFileSize));

    const onCloseCallback = useCallback(() => {
        setIsVisible(false);
    }, []);

    const onAlertCallback = useCallback(
        (type: FileAlertType, fileNames?: string[]) => {
            if (fileTypes && fileNames && maxFiles && maxFileSize) {
                setStatusData(getAlertTranslation(type, fileTypes, fileNames, maxFiles, maxFileSize));
            }
        },
        [fileTypes, maxFiles, maxFileSize]
    );

    const onDropCallback = useCallback((files: FileList) => {
        const fileNames = getFileNames(files);
        const totalSizeFiles = getTotalSizeFiles(getFileSizes(files));

        console.log('[onDropCallback files:]', fileNames);
        console.log('[onDropCallback total size:]', totalSizeFiles);

        setStatusData(getUploadedTranslation(getFileTypes(files), getFileFormats(getFileTypes(files)), totalSizeFiles));
    }, []);

    const onUploadCallback = useCallback((files: FileList, name?: string, description?: string) => {
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
