import { FileTypes } from '../types';

export function defineFileFormats(fileFormats: FileTypes) {
    switch (fileFormats) {
        case FileTypes.CSV:
            return ['application/text', 'text/csv', 'text/plain'];
            break;

        case FileTypes.EXCEL:
            return ['application/excel'];
            break;

        case FileTypes.IMAGE:
            return ['application/gif', 'image/bmp', 'image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            break;

        case FileTypes.PDF:
            return ['application/pdf', 'application/x-java-jnlp-file', 'text/html'];
            break;

        case FileTypes.TEXT:
            return ['application/text', 'text/html', 'text/plain'];
            break;

        case FileTypes.WORD:
            return ['application/msword'];
            break;

        default:
            return [''];
    }
}

export function getTypeNames(type: string) {
    const [typeName] = type.replace(/\/$/, '').split('/').splice(-1, 1);

    return typeName.toUpperCase();
}
