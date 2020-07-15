export enum FileUploaderStatus {
    ALERT = 'alert',
    DEFAULT = 'default',
    LOADING = 'loading',
    SUCCESS = 'success',
}

export enum AlertType {
    NUMBER = 'numberError',
    SIZE = 'sizeError',
    TYPE = 'typeError',
}

export type LoadingProgress = 0 | 25 | 50 | 75 | 100;

export enum FileTypes {
    DOCUMENT = 'PDF',
    IMAGE = 'JPEG, PNG',
}
