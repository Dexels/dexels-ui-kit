export enum FileUploaderStatus {
    ALERT = 'alert',
    DEFAULT = 'default',
    LOADING = 'loading',
    SUCCESS = 'success',
}

export enum FileAlertType {
    NAME = 'nameError',
    NUMBER = 'numberError',
    SIZE = 'sizeError',
    TYPE = 'typeError',
}

export enum FileTypes {
    CSV = 'CSV',
    EXCEL = 'XLS, XLSX, XLSM, XLT',
    IMAGE = 'BMP, GIF, JPEG, JPG, PNG',
    PDF = 'PDF',
    POWERPOINT = 'PPT, PPTX',
    TEXT = 'TXT',
    VIDEO = 'MP4, WEBM, MPG, MOV, WMV, FLV, AVI, AVCHD',
    WORD = 'DOC, DOCX, DOT',
}
