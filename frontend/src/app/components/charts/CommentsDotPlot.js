import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function CommentsBarChart({ data = [] }) {
  // Group data by month and sum up the values
  const groupDataByMonth = (data) => {
    const monthlyData = {};

    data.forEach((item) => {
      if (item.x && (item.y || item.y === 0)) {
        const date = new Date(item.x);
        const monthKey = `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}`;
        const monthLabel = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        });

        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = {
            label: monthLabel,
            value: 0,
            date: date,
          };
        }
        monthlyData[monthKey].value += item.y;
      }
    });

    return Object.values(monthlyData)
      .sort((a, b) => b.date - a.date)
      .slice(0, 6)
      .reverse();
  };

  const monthlyData = groupDataByMonth(data);

  const chartData = {
    labels: monthlyData.map((item) => item.label),
    datasets: [
      {
        label: "Comments",
        data: monthlyData.map((item) => item.value),
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: c, chartArea } = chart;

          if (!chartArea) {
            return "#33C6F4";
          }

          const grad = c.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          grad.addColorStop(0, "#33C6F4");
          grad.addColorStop(1, "#2D578F");
          return grad;
        },
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: { top: 10, right: 10, bottom: 10, left: 10 },
    },

    scales: {
      x: {
        type: "category",
        offset: true,
        position: "bottom",
        border: { display: true, color: "#444" },
        grid: { display: false },
        ticks: { display: true, padding: 0 },
        categoryPercentage: 0.1,
        barPercentage: 0.9,
      },
      y: {
        border: { display: true, color: "#444" },
        grid: { display: false },
        ticks: { display: false, padding: 0 },
      },
    },

    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 6,
        position: "nearest",
        intersect: false,
      },
    },

    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="h-48 w-full">
      <Bar
        data={chartData}
        options={options}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
