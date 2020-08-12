import { FileAlertType, FileTypes, FileUploaderStatus } from '../types';
import { fileSizeToFixed } from '../../../../utils/functions/fileFunctions';
import { FileUploaderData } from '../FileUploader';

export const getDefaultTranslation = (fileTypes: FileTypes, maxFileSize: number): FileUploaderData => ({
    bottomText: `${fileTypes} - Maximaal ${maxFileSize}MB`,
    buttonText: 'Kies een bestand',
    message: 'Sleep hier een bestand om te uploaden of',
    status: FileUploaderStatus.DEFAULT,
});

export const getSelectedTranslation = (
    fileTypes: string[],
    fileNames: string[],
    filesTotalSize: number
): FileUploaderData => ({
    bottomText: `${Array.from(new Set(fileTypes)).join(', ')} ${
        fileNames.length > 1 ? 'bestanden' : 'bestand'
    } - ${fileSizeToFixed(filesTotalSize)} MB`,
    buttonText: 'Kies een bestand',
    message: `${fileNames ? fileNames.join(', ') : ''} ${
        fileNames && fileNames.length > 1 ? 'zijn' : 'is'
    } geselecteerd`,
    status: FileUploaderStatus.SUCCESS,
});

export const getAlertTranslation = (
    alert: FileAlertType,
    fileTypes: FileTypes,
    fileNames: string[],
    maxFiles: number,
    maxFileSize: number
): FileUploaderData => {
    let alertMessage = '';

    switch (alert) {
        case FileAlertType.NUMBER:
            alertMessage =
                maxFiles > 0
                    ? `Er ${maxFiles > 1 ? 'kunnen' : 'kan'} maximaal ${maxFiles} ${
                          maxFiles > 1 ? 'bestanden' : 'bestand'
                      } per keer ${maxFiles > 1 ? 'worden' : 'wordt'} geüpload`
                    : 'Kies het maximale aantal bestanden (meer dan null)';

            break;

        case FileAlertType.SIZE:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${
                    fileNames.length > 1 ? 'zijn' : 'is'
                } te groot om te uploaden`;
            }

            break;

        case FileAlertType.TYPE:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${
                    fileNames.length > 1 ? 'hebben' : 'heeft'
                } de verkeerde extensie`;
            }

            break;

        case FileAlertType.NAME:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${fileNames.length > 1 ? 'hebben' : 'heeft'} te lang naam`;
            }

            break;

        default:
            break;
    }

    return {
        bottomText: `${fileTypes} - Maximaal ${maxFileSize}MB`,
        buttonText: 'Kies een ander bestand',
        message: alertMessage,
        status: FileUploaderStatus.ALERT,
    };
};

export const getUploadedTranslation = (
    fileTypes: string[],
    fileNames: string[],
    filesTotalSize: number
): FileUploaderData => ({
    bottomText: `${Array.from(new Set(fileTypes)).join(', ')} ${
        fileNames.length > 1 ? 'bestanden' : 'bestand'
    } - ${fileSizeToFixed(filesTotalSize)} MB`,
    buttonText: 'Kies een bestand',
    message: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'zijn' : 'is'} geüpload`,
    status: FileUploaderStatus.SUCCESS,
});

export const getLoadingTranslation = (fileNames: string[]): FileUploaderData => ({
    bottomText: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'worden' : 'wordt'} geüpload`,
    buttonText: 'Kies een bestand',
    message: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'worden' : 'wordt'} geüpload`,
    status: FileUploaderStatus.LOADING,
});
