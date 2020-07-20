import { AlertType, FileTypes, LoadingProgress } from '../FileUploader/types';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import {
    getAlertTranslation,
    getDefaultTranslation,
    getLoadingTranslation,
    getSelectedTranslation,
    getUploadedTranslation,
} from '../FileUploader/utils/getTranslations';
import {
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileTypes,
    getTotalSizeFiles,
} from '../../../utils/functions/fileFunctions';
import { number, select } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import FileUploadDialog from './FileUploadDialog';
import { FileUploaderData } from '../FileUploader/FileUploader';
import { simulateUploading } from '../FileUploader/utils/simulateUploading';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const maxFileSizeRef = React.useRef<number>();
    maxFileSizeRef.current = number('Max file size', 5);
    const maxFilesRef = React.useRef<number>();
    maxFilesRef.current = number('Max files', 3);
    const fileTypesRef = React.useRef<FileTypes>();
    fileTypesRef.current = select('Transition type', FileTypes, FileTypes.IMAGE);
    maxFilesRef.current = number('Max files', 3);
    const [isVisible, setIsVisible] = React.useState(true);
    const [droppedFileNames, setDroppedFileNames] = React.useState<string[]>();
    const [droppedFileFormats, setDroppedFileFormats] = React.useState<string[]>();
    const [droppedTotalSize, setDroppedTotalSize] = React.useState<number>();
    const [description, setDescription] = React.useState<string>();

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
                setData(getLoadingTranslation(droppedFileNames, droppedTotalSize, progress));
            };

            await simulateUploading(changeData);

            setData(getUploadedTranslation(droppedFileFormats, droppedFileNames, droppedTotalSize));
        }
    };

    const onChangeDescription = (value: string) => {
        setDescription(value);
    };

    React.useEffect(() => {
        if (fileTypesRef.current && maxFileSizeRef.current) {
            setData(getDefaultTranslation(fileTypesRef.current, maxFileSizeRef.current));
        }
    }, [maxFileSizeRef.current, fileTypesRef.current]);

    React.useEffect(() => {
        if (droppedFileFormats && droppedTotalSize && droppedFileNames) {
            setData(getSelectedTranslation(droppedFileFormats, droppedFileNames, droppedTotalSize));
        }
    }, [droppedTotalSize]);

    return (
        <FileUploadDialog
            buttons={[
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
            data={data}
            description={description}
            fileTypes={fileTypesRef.current}
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
