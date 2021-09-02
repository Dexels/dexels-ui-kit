export enum FileUploaderStatus {
    ALERT = 'alert',
    DEFAULT = 'default',
    LOADING = 'loading',
    SUCCESS = 'success',
}

export enum FileAlertType {
    NAME = 'nameError',
    NONE = 'noError',
    NUMBER = 'numberError',
    SIZE = 'sizeError',
    TYPE = 'typeError',
}

export enum FileTypes {
    ARCHIVE = 'ZIP, RAR',
    AUDIO = 'MP3, MIDI',
    CSV = 'CSV',
    EXCEL = 'XLS, XLSX, XLSM, XLT, ODS',
    HTML = 'HTML',
    IMAGE = 'BMP, GIF, JPEG, JPG, PNG',
    OTHER = 'OTHER',
    PDF = 'PDF',
    POWERPOINT = 'PPT, PPTX',
    TEXT = 'TXT',
    VCF = 'VCF',
    VIDEO = 'MP4, MPG, MOV, AVI',
    WORD = 'DOC, DOCX, DOT, ODT',
    XML = 'XML',
}
