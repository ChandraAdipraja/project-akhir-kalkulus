import { useState } from "react";
import { Button } from "~/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/Dialog";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";
import { LinearGraph } from "~/components/ui/Lineargraph";
import { TitleSection } from "~/components/ui/TitleSection";

export const GraphPage = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [constant, setConstant] = useState("");

  const [graphData, setGraphData] = useState<{
    xValues: number[];
    yValues: number[];
    constVal: number;
    equation: string;
  } | null>(null);

  const handleSubmit = () => {
    const xVal = parseFloat(x);
    const yVal = parseFloat(y);
    const constVal = parseFloat(constant);

    const equation = `${xVal}x + ${yVal}y = ${constVal}`;

    let xValues: number[] = [];
    let yValues: number[] = [];

    if (xVal === 0 && yVal !== 0) {
      const yIntercept = (constVal / yVal).toFixed(2);
      const yNumber = parseFloat(yIntercept);
      xValues = [0, 0];
      yValues = [yNumber];
    } else if (yVal === 0 && xVal !== 0) {
      const xIntercept = (constVal / xVal).toFixed(2);
      const xNumber = parseFloat(xIntercept);
      xValues = [xNumber];
      yValues = [0, 0];
    } else {
      const xIntercept = (constVal / xVal).toFixed(2);
      const xNumber = parseFloat(xIntercept);
      const yIntercept = (constVal / yVal).toFixed(2);
      const yNumber = parseFloat(yIntercept);
      xValues = [xNumber, 0];
      yValues = [0, yNumber];
    }

    setGraphData({ xValues, yValues, constVal, equation });
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center px-4 font-montserrat">
      <TitleSection>Buat Grafik</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Buat Grafik
      </h1>
      <div className="hidden flex-col lg:flex lg:w-full lg:max-w-6xl lg:flex-row lg:items-start lg:gap-x-8">
        {/* Left side (Input form) */}
        <div className="lg:flex lg:w-1/2 lg:flex-col lg:gap-y-4">
          <div>
            <Label htmlFor="x">Koefisien X</Label>
            <Input
              id="x"
              type="number"
              placeholder="Input Angka, ex : 2"
              value={x}
              onChange={(e) => setX(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="y">Koefisien Y</Label>
            <Input
              id="Y"
              type="number"
              placeholder="Input Angka, ex : 4"
              value={y}
              onChange={(e) => setY(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="konstanta" className="">
              Konstanta
            </Label>
            <Input
              id="konstanta"
              type="number"
              placeholder="Input Angka, ex : 8"
              className="col-span-3"
              value={constant}
              onChange={(e) => setConstant(e.target.value)}
              required
            />
          </div>
          <Button onClick={handleSubmit} variant={"neutral"} type="submit">
            Kirim
          </Button>
        </div>

        {/* Right side (Graph) */}
        <div className="flex items-center justify-center lg:w-1/2">
          {graphData ? (
            <LinearGraph
              xValues={graphData.xValues}
              yValues={graphData.yValues}
              constVal={graphData.constVal}
              equation={graphData.equation}
            />
          ) : (
            <div className="mx-auto my-auto flex min-h-72 w-1/2 flex-col items-center justify-center">
              <h1 className="my-5 text-center text-2xl font-bold uppercase text-text dark:text-darkText">
                Grafik Mu Akan Muncul Disini
              </h1>
            </div>
          )}
        </div>
      </div>
      {graphData && (
        <div className="w-full lg:hidden">
          <LinearGraph
            xValues={graphData.xValues}
            yValues={graphData.yValues}
            constVal={graphData.constVal}
            equation={graphData.equation}
          />
        </div>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"neutral"} className="lg:hidden">
            Buat Grafik
          </Button>
        </DialogTrigger>
        <DialogContent className="p-4 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Buat Grafik Fungsi</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="x" className="text-center">
                Koefisien X
              </Label>
              <Input
                id="x"
                placeholder="Input Angka, ex : 2"
                className="col-span-3"
                value={x}
                onChange={(e) => setX(e.target.value)}
                required
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="y" className="text-center">
                Koefisien Y
              </Label>
              <Input
                id="y"
                placeholder="Input Angka, ex : 4"
                className="col-span-3"
                value={y}
                onChange={(e) => setY(e.target.value)}
                required
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="konstanta" className="text-center">
                Konstanta
              </Label>
              <Input
                id="konstanta"
                placeholder="Input Angka, ex : 8"
                className="col-span-3"
                value={constant}
                onChange={(e) => setConstant(e.target.value)}
                required
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSubmit} variant={"neutral"} type="submit">
                Kirim
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
