export function getTypeName(type: string): string {
    const [typeName] = type.replace(/\/$/, '').split('/').splice(-1, 1);

    return typeName.toUpperCase();
}

export const getFileFormats = (types: string[]): string[] => Array.from(types).map((type) => getTypeName(type));

export const getFileNames = (files: FileList): string[] => Array.from(files).map((file) => file.name);
export const getFileSizes = (files: FileList): number[] => Array.from(files).map((file) => file.size);
export const getFileTypes = (files: FileList): string[] => Array.from(files).map((file) => file.type);

export const getTotalSizeFiles = (fileSizes: number[]): number => fileSizes.reduce((a, b) => a + b, 0) / 1000000;

export const fileSizeToFixed = (size: number): number => {
    if (size < 1) {
        return parseFloat(size.toFixed(3));
    }

    return parseFloat(size.toFixed(2));
};
