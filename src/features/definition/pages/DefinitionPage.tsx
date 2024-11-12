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
          <span className="bg-sky-400 font-bold">Grafik Fungsi Linear </span>
          Pada dasarnya, definisi dari fungsi linear adalah relasi yang
          memasangkan setiap anggota yang ada di himpunan A dengan anggota lain
          di himpunan B. Semua anggota yang ada di himpunan A harus berpasangan
          dengan anggota yang ada di himpunan B. Fungsi linear ini disebut juga
          dengan Persamaan Garis Lurus (PGL). Seperti yang telah diungkapkan
          sebelumnya, fungsi dalam dunia matematika akan berkaitan erat dengan
          unsur pembentuknya, yakni berupa variabel, koefisien, dan konstanta.
        </p>
        <p>
          Jadi, fungsi linear adalah suatu fungsi yang membentuk grafik secara
          garis lurus. Fungsi linear ini juga menjadi fungsi yang telah
          mendapatkan pangkat tertinggi dengan variabelnya sama dengan satu.
        </p>
      </div>
    </div>
  );
};
