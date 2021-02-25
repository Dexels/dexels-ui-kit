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

export const toBase64 = (file: File): Promise<string> =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const base64ToBlob = (base64: string): Blob => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return new Blob([bytes], { type: 'application/pdf' });
};

export const blobToObjectUrl = (input: string): string => URL.createObjectURL(base64ToBlob(input));

export interface OpenBinaryProps {
    base64Data: string;
    height?: number;
    isEncoded?: boolean; // If the input is already in the desired base64 format, then don't apply atob function
    mimeType?: string;
    title?: string;
    width?: number;
}

export const openBinary = (openBinaryProps: OpenBinaryProps): void => {
    const { base64Data } = openBinaryProps;
    const height = openBinaryProps.height || window.innerHeight / 1.2;
    const isEncoded = openBinaryProps.isEncoded || false;
    const mimeType = openBinaryProps.mimeType || 'application/pdf';
    const title = openBinaryProps.title || '';
    const width = openBinaryProps.width || window.innerWidth / 2;
    const windowParameters = `left=0,top=0,width=${width},height=${height},toolbar=0,scrollbars=0,status=0,dir=ltr`;
    const winRef = window.open('', '_blank', windowParameters);
    const footer = '</body></html>';
    const head = `<html><head><title>${title || ''}</title></head><body>`;

    const content = `<iframe src="data:${mimeType};base64,${encodeURI(
        isEncoded ? atob(base64Data) : base64Data
    )}" width="100%" height="100%"></iframe>`;

    try {
        if (!winRef || winRef.closed) {
            ((winRef as unknown) as Window).open('', '_blank', windowParameters);
        } else {
            winRef.focus();
        }

        ((winRef as unknown) as Window).document.open();
        ((winRef as unknown) as Window).document.write(`${head}${content}${footer}`);
        ((winRef as unknown) as Window).focus();
    } catch {
        // Nothing yet
    } finally {
        // Nothing yet
    }
};

export const openUrl = (url: string, title?: string): void => {
    window.open(url, '_blank', title);
};
