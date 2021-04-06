import { FileTypes } from '../types';

export function defineFileFormat(fileFormat: FileTypes): string[] {
    console.log(fileFormat);

    switch (fileFormat) {
        case FileTypes.ARCHIVE:
            return ['application/zip', 'application/x-rar-compressed'];
            break;

        case FileTypes.AUDIO:
            return ['audio/mpeg', 'audio/unknown'];
            break;

        case FileTypes.CSV:
            return ['application/text', 'text/csv', 'text/plain'];
            break;

        case FileTypes.EXCEL:
            return [
                'application/excel',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            ];
            break;

        case FileTypes.HTML:
            return ['text/html'];
            break;

        case FileTypes.IMAGE:
            return ['application/gif', 'image/bmp', 'image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/tiff'];
            break;

        case FileTypes.PDF:
            return ['application/pdf', 'application/x-java-jnlp-file', 'text/html'];
            break;

        case FileTypes.POWERPOINT:
            return [
                'application/powerpoint',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.pr',
                'vnd.oasis.opendocument.spreadsheet',
            ];
            break;

        case FileTypes.TEXT:
            return ['application/text', 'text/rtf', 'text/plain'];
            break;

        case FileTypes.VCF:
            return ['text/x-vcard'];
            break;

        case FileTypes.WORD:
            return [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'vnd.oasis.opendocument.text',
            ];
            break;

        case FileTypes.XML:
            return ['text/xml'];
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
