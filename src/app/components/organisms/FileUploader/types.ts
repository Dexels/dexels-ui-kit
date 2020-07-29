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

export enum FileTypes {
    CSV = 'CSV',
    EXCEL = 'XLS, XLSX',
    IMAGE = 'BMP, GIF, JPEG, JPG, PNG',
    PDF = 'PDF',
    TEXT = 'TXT',
    VIDEO = 'MP4, WEBM, MPG, MOV, WMV, FLV, AVI, AVCHD',
    WORD = 'DOC, DOCX',
}
