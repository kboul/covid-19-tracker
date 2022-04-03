import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { useStore } from "../../hooks";
import { Cases } from "../../models";
import { options } from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function NewCasesLineGraph() {
  const lastDaysCases = useStore(state => state.lastDaysCases);

  const getData = (data: Cases, casesType: keyof Cases) => {
    if (Object.keys(data).length === 0) return {};

    const chartData: { x: string; y: number }[] = [];
    let lastDataPoint: number;

    Object.keys(data.cases).forEach((date: string) => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    });

    return chartData;
  };

  const data = getData(lastDaysCases, "cases");

  return (
    data && (
      <Line
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52, 0.5)",
              borderColor: "#CC1034",
              data
            }
          ]
        }}
        options={options}
      />
    )
  );
}
