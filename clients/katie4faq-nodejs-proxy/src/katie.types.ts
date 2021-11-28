export interface IKatieExpertQuestionStorage {
    set(key: string, email: string): Promise<void>;
    get(key: string): Promise<string>;
    delete(key: string): Promise<void>;
    clean(): Promise<void>;
}

export interface IKatieFaqCacheStorage {
    set(key: string, faw: IKatieFAQ): Promise<void>;
    get(key: string): Promise<IKatieFAQ>;
    delete(key: string): Promise<void>;
    clean(): Promise<void>;
}

export enum KatiePermissionStatus {
    IS_PUBLIC = "IS_PUBLIC",
    NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER = "NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER"
}

export interface IKatieConfig {
    hostname?: string;
    domainId: string;
    defaultLanguage?: string;
    expertQuestionStorage?: IKatieExpertQuestionStorage;
    faqCacheStorage?: IKatieFaqCacheStorage;
}

export interface IKatieQuestion {
    answer?: string;
    question?: string;
    uuid?: string;
    language?: string;
}

export interface IKatieExpertQuestion {
    question: string;
    email: string;
    language?: string;
}

export interface IKatieAnswer {
    uuid: string;
    submittedQuestion: string;
    dateSubmittedQuestion: string;
    answer: string;
    answerClientSideEncryptionAlgorithm?: string;
    email?: string;
    originalQuestion: string;
    dateOriginalQuestion: number;
    permissionStatus: KatiePermissionStatus
}

export interface IKatieExpertAnswer extends IKatieAnswer {
    "echo-data": string;
}

export type IKatieFAQ = IKatieTopic[];

export interface IKatieIcon {
    code?: string;
    name?: string;
}

export interface IKatieTopic {
    icon?: IKatieIcon;
    id?: string;
    questions?: IKatieQuestion[];
    title?: string;
}
