export interface FaqAnswer {
    title: string;
    content: string;
}

export interface FaqResponse {
    answers: FaqAnswer[];
}
