import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from './types';
import {
    fileSizeToFixed,
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileTypes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import { FileUploader, FileUploaderData } from './FileUploader';
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

    const [data, setData] = React.useState<FileUploaderData>({
        bottomText: `${fileTypesRef.current} - Maximaal ${maxFileSizeRef.current}MB`,
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
                    maxFilesRef.current && maxFilesRef.current > 0
                        ? `Er ${maxFilesRef.current > 1 ? 'kunnen' : 'kan'} maximaal ${maxFilesRef.current} ${
                              maxFilesRef.current > 1 ? 'bestanden' : 'bestand'
                          } per keer ${maxFilesRef.current > 1 ? 'worden' : 'wordt'} geüpload`
                        : 'Kies het maximale aantal bestanden (meer dan null)'
                );

                break;

            case AlertType.SIZE:
                if (fileNames) {
                    changeData(
                        `${fileNames.join(', ')} ${fileNames.length > 1 ? 'zijn' : 'is'} te groot om te uploaden`
                    );
                }

                break;

            case AlertType.TYPE:
                if (fileNames) {
                    changeData(
                        `${fileNames.join(', ')} ${fileNames.length > 1 ? 'hebben' : 'heeft'} de verkeerde extensie`
                    );
                }

                break;

            default:
                break;
        }
    };

    const onDrop = async (files: FileList) => {
        const droppedFileNames = getFileNames(files);
        const droppedFileTypes = getFileTypes(files);
        const droppedFileFormats = getFileFormats(droppedFileTypes);
        const droppedFileSizes = getFileSizes(files);
        const filesTotalSize = getTotalSizeFiles(droppedFileSizes);

        const changeData = (progress: LoadingProgress) => {
            setData({
                ...data,
                bottomText: `${fileSizeToFixed((filesTotalSize / 100) * progress)} MB / ${fileSizeToFixed(
                    filesTotalSize
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
            bottomText: `${droppedFileFormats.join(', ')} ${
                droppedFileNames.length > 1 ? 'bestanden' : 'bestand'
            } - ${fileSizeToFixed(filesTotalSize)} MB`,
            message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'zijn' : 'is'} geüpload`,
            status: FileUploaderStatus.SUCCESS,
        });
    };

    React.useEffect(() => {
        if (fileTypesRef.current && maxFileSizeRef.current) {
            setData({
                bottomText: `${fileTypesRef.current} - Maximaal ${maxFileSizeRef.current}MB`,
                buttonText: 'Kies een bestand',
                message: 'Sleep hier een bestand om te uploaden of',
                progress: 0,
                status: FileUploaderStatus.DEFAULT,
            });
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
