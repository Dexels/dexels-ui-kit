import { FileTypes } from '../types';
import { IconType } from '../../../../types';

export function defineFileFormat(fileFormat: FileTypes): string[] {
    switch (fileFormat) {
        case FileTypes.ARCHIVE:
            return ['zip', 'application/zip', 'rar', 'application/x-rar-compressed'];
            break;

        case FileTypes.AUDIO:
            return ['mp3', 'audio/mpeg', 'audio/unknown'];
            break;

        case FileTypes.CSV:
            return ['csv', 'text/csv'];
            break;

        case FileTypes.EXCEL:
            return [
                'ods',
                'xls',
                'xlsx',
                'xlsm',
                'xlt',
                'application/excel',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.oasis.opendocument.spreadsheet',
            ];
            break;

        case FileTypes.HTML:
            return ['html', 'text/html'];
            break;

        case FileTypes.IMAGE:
            return [
                'bpm',
                'image/bmp',
                'gif',
                'application/gif',
                'image/gif',
                'jpg',
                'jpeg',
                'image/jpeg',
                'image/jpg',
                'png',
                'image/png',
                'tiff',
                'image/tiff',
            ];
            break;

        case FileTypes.PDF:
            return ['pdf', 'application/pdf'];
            break;

        case FileTypes.POWERPOINT:
            return [
                'ppt',
                'pptx',
                'ppsx',
                'application/powerpoint',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.pr',
            ];
            break;

        case FileTypes.TEXT:
            return ['txt', 'application/text', 'rtf', 'text/rtf', 'text/plain'];
            break;

        case FileTypes.VCF:
            return ['vcf', 'text/x-vcard'];
            break;

        case FileTypes.WORD:
            return [
                'doc',
                'docx',
                'odt',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.oasis.opendocument.text',
            ];
            break;

        case FileTypes.XML:
            return ['xml', 'text/xml'];
            break;

        case FileTypes.OTHER:
            return ['jnlp', 'application/x-java-jnlp-file'];
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

export const getFileTypeIconType = (fileType: string): IconType => {
    switch (fileType) {
        case defineFileFormats([FileTypes.PDF, FileTypes.ARCHIVE, FileTypes.TEXT, FileTypes.WORD]).find(
            (type) => type === fileType
        ):
            return IconType.FILEDOCUMENT;

        case defineFileFormats([FileTypes.AUDIO]).find((type) => type === fileType):
            return IconType.FILEAUDIO;

        case defineFileFormats([FileTypes.CSV, FileTypes.EXCEL]).find((type) => type === fileType):
            return IconType.FILETABLE;

        default:
            return IconType.FILEDOCUMENT;
    }
};
