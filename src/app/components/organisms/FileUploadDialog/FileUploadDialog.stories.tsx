import { ButtonVariant, IconType } from '../../../types';
import { FileAlertType, FileTypes } from '../FileUploader/types';
import { number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import Button from '../../molecules/Button/Button';
import FileUploadDialog from './FileUploadDialog';
import { getAlertTranslation } from '../FileUploader/utils/getTranslations';

export default { title: 'organisms/FileUploadDialog' };

export const Configurable: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const fileTypes = select('File type', FileTypes, FileTypes.IMAGE);
    const maxFileSize = number('Max file size', 5);
    const maxFiles = number('Max files', 1);
    const [error, setErrors] = useState<ReactNode>(undefined);
    const [isSaving, setIsSaving] = useState(false);

    const onCloseCallback = useCallback(() => {
        setIsVisible(false);
    }, []);

    const onAlertCallback = (type: FileAlertType, fileSize?: number) => {
        if (fileTypes && maxFiles && maxFileSize) {
            setErrors(getAlertTranslation(type, fileSize));
        }
    };

    const onDropCallback = useCallback((files: File[]) => {
        console.log('[onDropCallback]', files);
    }, []);

    const onUploadCallback = useCallback((files: File[], name?: string, description?: string) => {
        console.log('[onUploadCallback]', files, name, description);

        setIsSaving(true);

        setTimeout(() => {
            setIsVisible(false);
            setIsSaving(false);
        }, 5000);
    }, []);

    return (
        <>
            <Button
                onClick={(): void => {
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'Dialog is showing' : 'Show dialog'}
            </Button>
            <FileUploadDialog
                errors={error}
                fileTypes={[fileTypes]}
                fileUploaderData={{
                    bottomText: text('Bottom text', 'Something presentable can be put here'),
                    buttonText: text('Button text', 'Choose a file'),
                    topText: text('Button text', 'Drag here a file to upload or'),
                }}
                iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
                iconSave={select('Icon Save', IconType, IconType.CHECK)}
                isLoading={isSaving}
                isVisible={isVisible}
                labelInputDescription={text('Label input description', 'Add description (optional')}
                labelInputName={text('Label input name', 'Add name (optional)')}
                maxFileSize={maxFileSize}
                maxFiles={maxFiles}
                onAlert={onAlertCallback}
                onClose={onCloseCallback}
                onDrop={onDropCallback}
                onUpload={onUploadCallback}
                text={text('Text', 'Optional descriptions')}
                textCancel={text('Text Cancel', 'Cancel')}
                textSave={text('Text Save', 'Save')}
                title="Upload files"
            />
        </>
    );
};
