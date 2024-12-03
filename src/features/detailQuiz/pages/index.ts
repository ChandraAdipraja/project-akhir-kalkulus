export interface PropsQuestion {
  id: string;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: string;
}

export const quiz: PropsQuestion[] = [
  {
    id: "1",
    question:
      "Diketahui f(x) = 17x + 6, jika daerah asal f adalah Df = {x | -2 <= x < 2, Bilangan Bulat}, tentukan daerah f !",
    a: "(-55,-28,-11,6,23)",
    b: "(-28,-11,6,23)",
    c: "(-11,6,23,55,28)",
    d: "(-30,-17,6,23,)",
    answer: "b",
  },
  {
    id: "2",
    question:
      "Diketahui f(x)= 19x + 1 jika daerah asal f adalah Df ={x | -1 <= x < 5, Bilangan riil}, tentukan titik koordinatnya !",
    a: "(-1, -8) dan (5, 46)",
    b: "(-1, -18) dan (5, 96)",
    c: "(-1, 0) dan (5, 100)",
    d: "(-1, 0) dan (5, 50)",
    answer: "b",
  },
  {
    id: "3",
    question: " Fungsi linear adalah fungsi yang memiliki bentuk umum...",
    a: "f(x) = ax + b ",
    b: "f(x) = ax^2 + bx + c",
    c: "f(x) = ax^2 + b",
    d: "f(x) = ax + b + c",
    answer: "a",
  },
  {
    id: "4",
    question: "Sebuah fungsi dikatakan sebagai fungsi linear jika...",
    a: "Grafiknya berupa kurva",
    b: "Grafiknya berupa garis lurus",
    c: "Grafiknya berupa lingkaran",
    d: "Grafiknya berupa parabola",
    answer: "b",
  },
  {
    id: "5",
    question:
      "Diketahui fungsi f(x)=20x+3f, dengan daerah asal Df={x|-1≤x<2,Bilangan bulat}. Tentukan daerah f (nilai fungsi) yang sesuai.",
    a: "(-17,3,23) (-17, 3, 23) (-17,3,23)",
    b: "(-17,23,43) (-17, 23, 43) (-17,23,43)",
    c: "(-17,23,43,63) (-17, 23, 43, 63) (-17,23,43,63)",
    d: "(-17,23,43,63,83) (-17, 23, 43, 63, 83) (-17,23,43,63,83)",
    answer: "a",
  },
  {
    id: "6",
    question:
      "Terdapat suatu fungsi linear adalah f(x) = 7x + b. Tentukanlah bentuk fungsi tersebut jika diketahui f(5) = 12.",
    a: "f(x) = 7x - 12",
    b: "f(x) = 7x - 23",
    c: "f(x) = 7x + 7",
    d: "f(x) = 7x + 23",
    answer: "b",
  },
  {
    id: "7",
    question: "Dalam fungsi f(x) = 5x - 7, apa arti nilai 5 ?",
    a: "Titik potong dengan sumbu y ",
    b: "Kemiringan garis atau koefisien varibel x",
    c: "Nilai variabel y saat x = 0.",
    d: "Nilai variabel x saat y = 0.",
    answer: "b",
  },
  {
    id: "8",
    question: " apa yang dimaksud dengan fungsi linear?",
    a: "Fungsi yang grafiknya berbentuk parabola.",
    b: "Fungsi dengan bentuk f(x) = mx + c dan grafiknya berupa garis lurus.",
    c: "Fungsi yang memiliki dua titik potong dengan sumbu x.",
    d: "Fungsi yang memiliki dua titik potong dengan sumbu y.",
    answer: "b",
  },
  {
    id: "9",
    question:
      "Diketahui koefisien x = 2, y  = 4 dengan konstanta nya adalah 8,maka akan memotong titik x pada..",
    a: "(4,8)",
    b: "(2,8)",
    c: "(2,4)",
    d: "(4,4)",
    answer: "c",
  },
  {
    id: "10",
    question: "Jika sebuah garis memiliki gradien negatif, apa artinya?",
    a: "Garis bergerak naik ke kanan",
    b: "Garis bergerak turun ke kanan",
    c: "Garis sejajar dengan sumbu x",
    d: "Garisnya AFK",
    answer: "b",
  },
];
