import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from '../FileUploader/types';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import FileUploadDialog from './FileUploadDialog';
import { FileUploaderData } from '../FileUploader/FileUploader';
import { getTypeNames } from '../FileUploader/utils/getTypeNames';
import { number } from '@storybook/addon-knobs';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const maxFiles = number('Max files', 3);
    const maxFileSize = number('Max file size', 5);
    const fileTypes = FileTypes.IMAGE;
    const [isVisible, setIsVisible] = React.useState(true);
    const [droppedFileNames, setDroppedFileNames] = React.useState<string[]>();
    const [droppedFileTypes, setDroppedFileTypes] = React.useState<string[]>();
    const [droppedTotalSize, setDroppedTotalSize] = React.useState<number>();
    const [description, setDescription] = React.useState<string>();

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

    const onDrop = (files: FileList) => {
        setDroppedFileNames(Array.from(files).map((file) => file.name));
        setDroppedFileTypes(Array.from(files).map((file) => getTypeNames(file.type)));

        const fileSizes = Array.from(files).map((file) => file.size);
        setDroppedTotalSize(fileSizes.reduce((a, b) => a + b, 0) / 1000000);
    };

    const onUpload = async () => {
        // eslint-disable-next-line no-alert
        alert(`Start uploading with description: ${description}`);

        if (droppedFileTypes && droppedTotalSize && droppedFileNames) {
            const changeData = (progress: LoadingProgress) => {
                setData({
                    ...data,
                    bottomText: `${parseFloat(((droppedTotalSize / 100) * progress).toFixed(3))} MB / ${parseFloat(
                        droppedTotalSize.toFixed(3)
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
                bottomText: `${droppedFileTypes.join(', ')} ${
                    droppedFileNames.length > 1 ? 'bestanden' : 'bestand'
                } - ${parseFloat(droppedTotalSize.toFixed(3))} MB`,
                message: `${droppedFileNames.join(', ')} ${droppedFileNames.length > 1 ? 'zijn' : 'is'} geüpload`,
                status: FileUploaderStatus.SUCCESS,
            });
        }
    };

    const onChangeDescription = (value: string) => {
        setDescription(value);
    };

    React.useEffect(() => {
        if (droppedFileTypes && droppedTotalSize && droppedFileNames) {
            setData({
                ...data,
                bottomText: `${droppedFileTypes.join(', ')} ${
                    droppedFileNames.length > 1 ? 'bestanden' : 'bestand'
                } - ${parseFloat(droppedTotalSize.toFixed(3))} MB`,
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
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onChangeDescription={onChangeDescription}
            onDrop={onDrop}
            title="Bestand Uploaden"
        />
    );
};
