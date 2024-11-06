export * from "./PointSearch";
export interface Props {
    id: number,
    question: string,
    answer: string,
}

export const pointSearch: Props[] = [
    {
        id: 1,
        question: "Bagaimana Cara Mencari Titik Potong Sumbu X ?",
        answer: "Kita bisa mencari titik potong X dengan cara kita buat Y = 0",
    },
    {
        id: 2,
        question: "Bagaimana Cara Mencari Titik Potong Sumbu Y ?",
        answer: "Kita bisa mencari titik potong Y dengan cara kita buat X = 0",
    }
]