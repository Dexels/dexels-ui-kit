import { boolean, number, select, text } from '@storybook/addon-knobs';
import { FileAlertType, FileTypes } from './types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import { FileUploader } from './FileUploader';
import { getAlertTranslation } from './utils/getTranslations';

export default { title: 'organisms/FileUploader' };

export const Configurable: FunctionComponent = () => {
    const maxFileSize = number('Max file size', 5);
    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFiles = number('Max files', 3);
    const [error, setErrors] = useState<ReactNode>(undefined);
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');
    const [inputNameValue, setInputNameValue] = useState('');

    const onAlert = (type: FileAlertType, fileSize?: number) => {
        setErrors(getAlertTranslation(type, fileSize));
    };

    const onDrop = (files: File[]) => {
        console.log('[onDrop]', files);
    };

    const onChangeDescription = ({ currentTarget }: ChangeEvent<HTMLInputElement>): void => {
        setInputDescriptionValue(currentTarget.value);
    };

    const onChangeName = ({ currentTarget }: ChangeEvent<HTMLInputElement>): void => {
        setInputNameValue(currentTarget.value);
    };

    return (
        <FileUploader
            bottomText={text('Bottom text', 'Something presentable can be put here')}
            buttonText={text('Button text', 'Choose a file')}
            errors={error}
            fileTypes={[fileTypes]}
            isLoading={boolean('Is loading', false)}
            labelInputDescription={text('Label input description', 'Add description (optional)')}
            labelInputName={text('Label input name', 'Add name (optional)')}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            onAlert={onAlert}
            onChangeDescription={onChangeDescription}
            onChangeName={onChangeName}
            onDrop={onDrop}
            topText={text('Button text', 'Drag here a file to upload or')}
            valueDescription={inputDescriptionValue}
            valueName={inputNameValue}
        />
    );
};
