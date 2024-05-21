export interface QuestionDTO {
    id: number;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    allAnswers?: string[];
}
