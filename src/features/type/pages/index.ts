export * from "./TypesGrafik";

export interface typeProps {
    id: number,
    title: string,
    description: string,
    img: string,
}

export const typeGrafik: typeProps[] = [
    {
        id: 1,
        title: "Fungsi Linear",
        description: "Grafik fungsi linear adalah grafik yang berbentuk garis lurus. Fungsi linear merupakan fungsi yang memiliki pangkat tertinggi variabelnya sama dengan satu dan memiliki satu atau dua variabel tanpa eksponen.",
        img: "/images/linear-graph.png",
    },
    {
        id: 2,
        title: "Fungsi Kuadrat",
        description: "Grafik yang menggambarkan fungsi kuadrat, yaitu fungsi matematika yang variabelnya berpangkat dua",
        img: "/images/linear-graph.png",
    },
    {
        id: 3,
        title: "Fungsi Kubik",
        description: "Representasi grafis dari fungsi kubik, yaitu fungsi polinomial dengan derajat tertinggi 3",
        img: "/images/linear-graph.png",
    },
    {
        id: 4,
        title: "Fungsi Trigonometri",
        description: "grafik yang terdiri dari bukit dan lembah yang berulang-ulang dalam periode tertentu",
        img: "/images/linear-graph.png",
    },
    {
        id: 5,
        title: "Fungsi Eksponensial",
        description: "kurva yang menggambarkan fungsi eksponensial, yaitu fungsi berpangkat yang pangkatnya memiliki variabel",
        img: "/images/linear-graph.png",
    },
    {
        id: 6,
        title: "Fungsi Logaritma",
        description: "Fungsi yang mengandung konsep logaritma dan merupakan kebalikan dari fungsi eksponensial..",
        img: "/images/linear-graph.png",
    },
]