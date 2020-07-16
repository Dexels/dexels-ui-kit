import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from '../FileUploader/types';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import {
    fileSizeToFixed,
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileTypes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import React, { FunctionComponent } from 'react';
import FileUploadDialog from './FileUploadDialog';
import { FileUploaderData } from '../FileUploader/FileUploader';
import { number } from '@storybook/addon-knobs';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const maxFileSizeRef = React.useRef<number>();
    maxFileSizeRef.current = number('Max file size', 5);
    const fileTypes = FileTypes.IMAGE;
    const maxFilesRef = React.useRef<number>();
    maxFilesRef.current = number('Max files', 3);
    const [isVisible, setIsVisible] = React.useState(true);
    const [droppedFileNames, setDroppedFileNames] = React.useState<string[]>();
    const [droppedFileFormats, setDroppedFileFormats] = React.useState<string[]>();
    const [droppedTotalSize, setDroppedTotalSize] = React.useState<number>();
    const [description, setDescription] = React.useState<string>();

    const [data, setData] = React.useState<FileUploaderData>({
        bottomText: `${fileTypes} - Maximaal ${maxFileSizeRef.current}MB`,
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

    const onDrop = (files: FileList) => {
        setDroppedFileNames(getFileNames(files));
        const droppedFileTypes = getFileTypes(files);
        setDroppedFileFormats(getFileFormats(droppedFileTypes));
        const droppedFileSizes = getFileSizes(files);
        setDroppedTotalSize(getTotalSizeFiles(droppedFileSizes));
    };

    const onUpload = async () => {
        if (description) {
            // eslint-disable-next-line no-alert
            alert(`Start uploading with description: ${description}`);
        }

        if (droppedFileFormats && droppedTotalSize && droppedFileNames) {
            const changeData = (progress: LoadingProgress) => {
                setData({
                    ...data,
                    bottomText: `${fileSizeToFixed((droppedTotalSize / 100) * progress)} MB / ${fileSizeToFixed(
                        droppedTotalSize
                    )} MB geüpload`,
                    message: `${droppedFileNames.join(', ')} ${
                        droppedFileNames.length > 1 ? 'worden' : 'wordt'
                    } geüpload`,
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
                } - ${fileSizeToFixed(droppedTotalSize)} MB`,
                message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'zijn' : 'is'} geüpload`,
                status: FileUploaderStatus.SUCCESS,
            });
        }
    };

    const onChangeDescription = (value: string) => {
        setDescription(value);
    };

    React.useEffect(() => {
        if (droppedFileFormats && droppedTotalSize && droppedFileNames) {
            setData({
                ...data,
                bottomText: `${droppedFileFormats.join(', ')} ${
                    droppedFileNames.length > 1 ? 'bestanden' : 'bestand'
                } - ${fileSizeToFixed(droppedTotalSize)} MB`,
                message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'zijn' : 'is'} geselecteerd`,
                status: FileUploaderStatus.SUCCESS,
            });
        }
    }, [droppedTotalSize]);

    return (
        <FileUploadDialog
            data={data}
            description={description}
            fileTypes={fileTypes}
            footerButtons={[
                {
                    children: 'Sluit',
                    iconType: IconType.CROSS,
                    onClick: (): void => {
                        setIsVisible(false);
                    },
                    size: ButtonSize.SMALL,
                    variant: ButtonVariant.TEXT_ONLY,
                },
                {
                    children: 'Voeg bestand toe',
                    iconType: IconType.CHECK,
                    onClick: () => onUpload(),
                    size: ButtonSize.SMALL,
                },
            ]}
            inputText="Voeg een omschrijving toe (optioneel)"
            isVisible={isVisible}
            maxFileSize={maxFileSizeRef.current}
            maxFiles={maxFilesRef.current}
            onAlert={onAlert}
            onChangeDescription={onChangeDescription}
            onDrop={onDrop}
            title="Bestand Uploaden"
        />
    );
};
