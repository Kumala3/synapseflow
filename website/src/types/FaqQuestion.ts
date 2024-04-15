export interface FaqQuestionProps {
    email: string;
    question: string;
}

export interface BackendErrors {
    error_messages: {
        email?: string;
        question?: string;
    }
}

export interface FormState {
    email: string;
    question: string;
}

export interface FormErrors {
    email?: string;
    question?: string;
    [key: string]: string | undefined;
}
