export enum DOCUMENT_TYPES {
    dogovor = "Договор",
    anketa = "Анкета",
    spravka = "Справка"
}

export enum DOCUMENT_STATUSES {
    resolve = "Заключен",
    reject = "Расторгнут"
}

export enum FILE_TYPES {
    doc = "doc",
    pdf = "pdf",
    jpg = "jpg"
}

export interface IDocumentFile  {
    type: FILE_TYPES,
    file_url: string,
}

export interface IDocument {
    id: number;
    type: keyof typeof DOCUMENT_TYPES,
    title: string,
    number: string,
    start_date: string,
    end_date: string,
    status: keyof typeof DOCUMENT_STATUSES,
    file: IDocumentFile
}