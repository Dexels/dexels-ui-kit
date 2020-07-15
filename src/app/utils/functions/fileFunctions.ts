export const exceedsMaxFiles = (fileCount: number, maxFileCount: number) => fileCount > maxFileCount;
export const exceedsMaxFileSizes = (fileSize: number, maxFileSize: number) => fileSize > maxFileSize;

export const getDroppedFileTypes = (files: FileList): string[] => {
    Array.from(files).map((file) => {
        const [type] = file.type.replace(/\/$/, '').split('/').splice(-1, 1);

        return type.toUpperCase();
    });

    return [''];
};

export const getFileNames = (files: FileList) => Array.from(files).map((file) => file.name);
export const getFileSizes = (files: FileList) => Array.from(files).map((file) => file.size);
export const getFileTypes = (files: FileList): string[] => Array.from(files).map((file) => file.type);

export const getTotalSizeFiles = (fileSizes: number[]) => fileSizes.reduce((a, b) => a + b, 0) / 1000000;
