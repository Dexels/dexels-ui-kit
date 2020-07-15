import { FileTypes } from '../types';

export function defineFileFormats(fileFormats: FileTypes) {
    switch (fileFormats) {
        case FileTypes.DOCUMENT:
            return ['application/pdf', 'application/x-java-jnlp-file', 'text/html'];
            break;

        case FileTypes.IMAGE:
            return ['image/jpeg', 'image/png', 'image/gif'];
            break;

        default:
            return [''];
    }
}

export function getTypeNames(type: string) {
    const [typeName] = type.replace(/\/$/, '').split('/').splice(-1, 1);

    return typeName.toUpperCase();
}
