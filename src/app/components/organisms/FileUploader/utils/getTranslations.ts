import { FileAlertType, FileTypes, FileUploaderStatus } from '../types';
import { fileSizeToFixed } from '../../../../utils/functions/fileFunctions';
import { FileUploaderStatusData } from '../FileUploader';

export const getDefaultTranslation = (fileTypes: FileTypes, maxFileSize: number): FileUploaderStatusData => ({
    bottomText: `${fileTypes} - Max ${maxFileSize}MB`,
    buttonText: 'Choose a file',
    message: 'Drag here a file to upload or',
    status: FileUploaderStatus.DEFAULT,
});

export const getSelectedTranslation = (
    fileTypes: string[],
    fileNames: string[],
    filesTotalSize: number
): FileUploaderStatusData => ({
    bottomText: `${Array.from(new Set(fileTypes)).join(', ')} ${
        fileNames.length > 1 ? 'files' : 'file'
    } - ${fileSizeToFixed(filesTotalSize)} MB`,
    buttonText: 'Choose a file',
    message: `${fileNames && fileNames.length > 1 ? 'are' : 'is'} selected`,
    status: FileUploaderStatus.SUCCESS,
});

export const getAlertTranslation = (
    alert: FileAlertType,
    fileTypes: FileTypes,
    maxFiles: number,
    maxFileSize: number,
    fileNames?: string[]
): FileUploaderStatusData => {
    let alertMessage = '';

    switch (alert) {
        case FileAlertType.NUMBER:
            alertMessage =
                maxFiles > 0
                    ? `you can only upload max ${maxFiles} ${maxFiles > 1 ? 'files' : 'file'}`
                    : 'Choose a file';

            break;

        case FileAlertType.SIZE:
            alertMessage = `you can only upload max ${maxFileSize}MB`;

            break;

        case FileAlertType.TYPE:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${fileNames.length > 1 ? 'have' : 'has'} the wrong format`;
            }

            break;

        case FileAlertType.NAME:
            if (fileNames) {
                alertMessage = `the name of ${fileNames.join(', ')} is too long`;
            }

            break;

        default:
            break;
    }

    return {
        bottomText: `${fileTypes} - Max ${maxFileSize}MB`,
        buttonText: 'Choose a file',
        message: alertMessage,
        status: FileUploaderStatus.ALERT,
    };
};

export const getUploadedTranslation = (
    fileTypes: string[],
    fileNames: string[],
    filesTotalSize: number
): FileUploaderStatusData => ({
    bottomText: `${Array.from(new Set(fileTypes)).join(', ')} ${
        fileNames.length > 1 ? 'files' : 'file'
    } - ${fileSizeToFixed(filesTotalSize)} MB`,
    buttonText: 'Choose a file',
    message: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'are' : 'is'} uploaded`,
    status: FileUploaderStatus.SUCCESS,
});

export const getLoadingTranslation = (fileNames: string[]): FileUploaderStatusData => ({
    bottomText: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'are' : 'is'} being uploaded`,
    buttonText: 'Choose a file',
    message: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'are' : 'is'} being uploaded`,
    status: FileUploaderStatus.LOADING,
});
