export * from "./PointSearch";
export interface Props {
  id: number;
  question: string;
  answer: string;
}

export const pointSearch: Props[] = [
  {
    id: 1,
    question: "Bagaimana Cara Mencari Titik Potong Sumbu X ?",
    answer: `Kita bisa mencari titik potong X dengan cara kita buat Y = 0
<pre>
2x + 4y = 8
2x + 4(0) = 8
2x = 8
x = 4
</pre>`,
  },
  {
    id: 2,
    question: "Bagaimana Cara Mencari Titik Potong Sumbu Y ?",
    answer: `Kita bisa mencari titik potong Y dengan cara kita buat X = 0
<pre>
2x + 4y = 8
2(0) + 4y = 8
4y = 8
y = 2
</pre>`,
  },
];
