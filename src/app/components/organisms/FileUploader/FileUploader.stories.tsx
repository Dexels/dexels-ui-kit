import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from './types';
import { FileUploader, FileUploaderData } from './FileUploader';
import {
    getDroppedFileTypes,
    getFileNames,
    getFileSizes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import React, { FunctionComponent } from 'react';
import { number } from '@storybook/addon-knobs';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFiles = number('Max files', 3);
    const maxFileSize = number('Max file size', 5);
    const fileTypes = FileTypes.IMAGE;

    const [data, setData] = React.useState<FileUploaderData>({
        bottomText: `${fileTypes} - Maximaal ${maxFileSize}MB`,
        buttonText: 'Kies een bestand',
        message: 'Sleep hier een bestand om te uploaden of',
        progress: 0,
        status: FileUploaderStatus.DEFAULT,
    });

    const onAlert = (type: AlertType, fileNames?: string[]) => {
        const changeData = (message: string) => {
            setData({
                ...data,
                buttonText: 'Kies een ander bestand',
                message,
                status: FileUploaderStatus.ALERT,
            });
        };

        switch (type) {
            case AlertType.NUMBER:
                changeData(
                    `Er ${maxFiles > 1 ? 'kunnen' : 'kan'} maximaal ${maxFiles} ${
                        maxFiles > 1 ? 'bestanden' : 'bestand'
                    } per keer ${maxFiles > 1 ? 'worden' : 'wordt'} geüpload`
                );

                break;

            case AlertType.SIZE:
                changeData(
                    `${fileNames && fileNames.join(', ')} ${
                        fileNames && fileNames.length > 1 ? 'zijn' : 'is'
                    } te groot om te uploaden`
                );

                break;

            case AlertType.TYPE:
                changeData(
                    `${fileNames && fileNames.join(', ')} ${
                        fileNames && fileNames.length > 1 ? 'hebben' : 'heeft'
                    } de verkeerde extensie`
                );

                break;

            default:
                break;
        }
    };

    const onDrop = async (files: FileList) => {
        const droppedFileNames = getFileNames(files);
        const droppedFileSizes = getFileSizes(files);
        const droppedFileTypes = getDroppedFileTypes(files);
        const filesTotalSize = getTotalSizeFiles(droppedFileSizes);

        const changeData = (progress: LoadingProgress) => {
            setData({
                ...data,
                bottomText: `${parseFloat(((filesTotalSize / 100) * progress).toFixed(2))} MB / ${parseFloat(
                    filesTotalSize.toFixed(2)
                )} MB geüpload`,
                message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'worden' : 'wordt'} geüpload`,
                progress,
                status: FileUploaderStatus.LOADING,
            });
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

        setData({
            ...data,
            bottomText: `${droppedFileTypes.join(', ')} ${
                droppedFileNames.length > 1 ? 'bestanden' : 'bestand'
            } - ${parseFloat(filesTotalSize.toFixed(2))} MB`,
            message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'zijn' : 'is'} geüpload`,
            status: FileUploaderStatus.SUCCESS,
        });
    };

    return (
        <FileUploader
            data={data}
            fileTypes={fileTypes}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
        />
    );
};
