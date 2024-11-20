export interface PropsQuestion {
    id: string;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    answer: string;
}

export const quiz:PropsQuestion[]=[
    {
        id: "1",
        question: "1 + 1 = ?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        answer: "a"
    },
    {
        id: "2",
        question: "2 + 2 = ?",
        a: "5",
        b: "4",
        c: "9",
        d: "3",
        answer: "b"
    },
    {
        id: "3",
        question: "3 + 3 = ?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        answer: "a"
    },
    {
        id: "4",
        question: "4 + 4 = ?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        answer: "a"
    },
    {
        id: "5",
        question: "5 + 5 = ?",
        a: "10",
        b: "11",
        c: "12",
        d: "13",
        answer: "a"
    },
]