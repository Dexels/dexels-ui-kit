import { FileTypes } from '../types';

export function defineFileFormat(fileFormat: FileTypes): string[] {
    switch (fileFormat) {
        case FileTypes.CSV:
            return ['application/text', 'text/csv', 'text/plain'];
            break;

        case FileTypes.EXCEL:
            return ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            break;

        case FileTypes.IMAGE:
            return ['application/gif', 'image/bmp', 'image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            break;

        case FileTypes.PDF:
            return ['application/pdf', 'application/x-java-jnlp-file', 'text/html'];
            break;

        case FileTypes.POWERPOINT:
            return ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.pr'];
            break;

        case FileTypes.TEXT:
            return ['application/text', 'text/html', 'text/plain'];
            break;

        case FileTypes.WORD:
            return ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingm'];
            break;

        default:
            return [''];
    }
}

export function defineFileFormats(fileTypes: FileTypes[]): string[] {
    const fileFormats: string[] = [];

    fileTypes.forEach((type) => {
        const format = defineFileFormat(type);

        format.forEach((p) => {
            fileFormats.push(p);
        });
    });

    return fileFormats;
}
