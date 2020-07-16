import { AlertType, FileTypes, FileUploaderStatus, LoadingProgress } from '../types';
import { fileSizeToFixed } from '../../../../utils/functions/fileFunctions';
import { FileUploaderData } from '../FileUploader';

export const getDefaultTranslation = (fileTypes: FileTypes, maxFileSize: number): FileUploaderData => ({
    bottomText: `${fileTypes} - Maximaal ${maxFileSize}MB`,
    buttonText: 'Kies een bestand',
    message: 'Sleep hier een bestand om te uploaden of',
    progress: 0,
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
    progress: 0,
    status: FileUploaderStatus.SUCCESS,
});

export const getAlertTranslation = (
    alert: AlertType,
    fileTypes: FileTypes,
    fileNames: string[],
    maxFiles: number,
    maxFileSize: number
): FileUploaderData => {
    let alertMessage = '';

    switch (alert) {
        case AlertType.NUMBER:
            alertMessage =
                maxFiles > 0
                    ? `Er ${maxFiles > 1 ? 'kunnen' : 'kan'} maximaal ${maxFiles} ${
                          maxFiles > 1 ? 'bestanden' : 'bestand'
                      } per keer ${maxFiles > 1 ? 'worden' : 'wordt'} geüpload`
                    : 'Kies het maximale aantal bestanden (meer dan null)';

            break;

        case AlertType.SIZE:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${
                    fileNames.length > 1 ? 'zijn' : 'is'
                } te groot om te uploaden`;
            }

            break;

        case AlertType.TYPE:
            if (fileNames) {
                alertMessage = `${fileNames.join(', ')} ${
                    fileNames.length > 1 ? 'hebben' : 'heeft'
                } de verkeerde extensie`;
            }

            break;

        default:
            break;
    }

    return {
        bottomText: `${fileTypes} - Maximaal ${maxFileSize}MB`,
        buttonText: 'Kies een ander bestand',
        message: alertMessage,
        progress: 0,
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
    progress: 0,
    status: FileUploaderStatus.SUCCESS,
});

export const getLoadingTranslation = (
    fileNames: string[],
    filesTotalSize: number,
    progress: LoadingProgress
): FileUploaderData => ({
    bottomText: `${fileSizeToFixed((filesTotalSize / 100) * progress)} MB / ${fileSizeToFixed(
        filesTotalSize
    )} MB geüpload`,
    buttonText: 'Kies een bestand',
    message: `${fileNames.join(', ')} ${fileNames.length > 1 ? 'worden' : 'wordt'} geüpload`,
    progress,
    status: FileUploaderStatus.LOADING,
});