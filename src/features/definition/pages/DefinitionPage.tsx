import { Title } from "chart.js";
import Image from "next/image";
import { Button, buttonVariants } from "~/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/CardProfile";
import { TitleSection } from "~/components/ui/TitleSection";

export const DefinitionPage = () => {
  return (
    <div className="flex flex-col justify-center px-4 text-center lg:flex-row lg:gap-x-28 lg:space-x-4 lg:px-40 lg:text-center">
      <TitleSection>Grafik Fungsi Linear</TitleSection>
      <Image
        src="/images/mathDef.png"
        alt="definiton.png"
        width={400}
        height={400}
        className="mx-auto"
      />
      <div className="description my-auto space-y-2 text-justify">
        <h1 className="my-5 hidden text-start text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
          GRAFIK FUNGSI LINEAR
        </h1>
        <p>
          <span className="bg-sky-400 font-bold">Grafik fungsi </span>
          dalam kalkulus adalah kurva yang merepresentasikan fungsi pada bidang
          koordinat. Grafik fungsi menggambarkan hubungan antara dua variabel
          dalam suatu fungsi matematika.
        </p>
        <p>
          Grafik fungsi menunjukkan bagaimana perubahan pada variabel independen
          memengaruhi variabel dependen. Untuk menentukan apakah suatu grafik
          mewakili fungsi, Anda dapat memeriksa apakah garis vertikal hanya
          memotong grafik di satu titik saja. Jika garis vertikal memotong
          grafik di dua titik atau lebih, maka grafik tersebut tidak mewakili
          fungsi.
        </p>
      </div>
    </div>
  );
};
