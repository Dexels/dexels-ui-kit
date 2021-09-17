import { FileAlertType, FileTypes } from './types';
import { number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { FileUploader } from './FileUploader';
import { getAlertTranslation } from './utils/getTranslations';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFileSize = number('Max file size', 5);
    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFiles = number('Max files', 3);
    const bottomText = `${fileTypes} - Max ${maxFileSize}MB`;
    const [error, setErrors] = useState<ReactNode>(undefined);

    const onAlert = (type: FileAlertType, fileSize?: number) => {
        setErrors(getAlertTranslation(type, fileSize));
    };

    const onDrop = (files: File[]) => {
        console.log('[onDrop]', files);
    };

    return (
        <FileUploader
            bottomText={bottomText}
            buttonText={text('Button text', 'Choose a file')}
            errors={error}
            fileTypes={[fileTypes]}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onDrop={onDrop}
            topText={text('Button text', 'Drag here a file to upload or')}
        />
    );
};
