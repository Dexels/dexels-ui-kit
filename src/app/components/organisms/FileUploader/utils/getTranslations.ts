import { FileAlertType } from '../types';

export const getAlertTranslation = (alert?: FileAlertType, fileSize?: number): string | undefined => {
    switch (alert) {
        case FileAlertType.SIZE:
            if (fileSize) {
                return `The file is too big (${(fileSize / 1000000).toFixed(2)} MB)`;
            }

            return 'The file is too big';

        case FileAlertType.TYPE:
            return 'The file is of a wrong format';

        case FileAlertType.NAME:
            return 'The name is too long';

        default:
            return undefined;
    }
};
