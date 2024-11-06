import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Element,
} from "chart.js";
import { ChartOptions, Chart, LegendItem } from "chart.js";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const LinearGraph = ({
  xValues,
  yValues,
  constVal,
  equation,
}: {
  xValues: number[];
  yValues: number[];
  constVal: number;
  equation: string;
}) => {
  const maxAbsX = Math.max(
    Math.abs(Math.min(...xValues)),
    Math.abs(Math.max(...xValues)),
  );
  const maxAbsY = Math.max(
    Math.abs(Math.min(...yValues)),
    Math.abs(Math.max(...yValues)),
  );

  // Buat rentang yang simetris, memastikan 0 berada di tengah
  const minX = -maxAbsX - 3; // Rentang simetris di sekitar 0 untuk x
  const maxX = maxAbsX + 3;
  const minY = -maxAbsY - 3; // Rentang simetris di sekitar 0 untuk y
  const maxY = maxAbsY + 3;

  const data = {
    labels: xValues,
    datasets: [
      {
        label: equation,
        data: yValues,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        fill: true,
        borderWidth: 2,
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: "linear",
        position: "center",
        min: minX,
        max: maxX,
        grid: {
          color: "rgba(0, 0, 0, 0.3)", // Light grid lines
        },
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return value === 0 ? "0" : value; // Show zero clearly
          },
        },
      },
      y: {
        type: "linear",
        position: "center",
        min: minY,
        max: maxY,
        grid: {
          color: "rgba(0, 0, 0, 0.3)", // Light grid lines
        },
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return value === 0 ? "0" : value; // Show zero clearly
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return ``;
          },
          label: function (tooltipItem) {
            const x = tooltipItem.parsed.x; // Get the x value
            const y = tooltipItem.parsed.y; // Get the y value
            return `(${x}, ${y})`; // Format the tooltip as (x, y)
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
