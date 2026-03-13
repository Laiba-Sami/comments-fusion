import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function ConnectionsChart({ data = [] }) {
  const chartData = {
    labels: data.map((item, index) => item.label || `Day ${index + 1}`),
    datasets: [
      {
        label: "Connections",
        data: data.map((item) => item.value || item.count || item),
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        tension: 0.4,
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
        offset: false,
        position: "bottom",
        border: { display: true, color: "#444" },
        grid: { display: false },
        ticks: { display: false, padding: 0 },
      },
      y: {
        border: { display: true, color: "#444" },
        grid: { display: true },
        ticks: { display: true, padding: 0 },
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

        callbacks: {
          // `items` is an array of tooltip items—usually one per dataset
          title: (items) => {
            if (!items.length) return "";

            // The raw label string:
            const rawLabel = items[0].label;

            // Try to parse as ISO date:
            const d = new Date(rawLabel);
            if (!isNaN(d)) {
              // Format as e.g. "August 1, 2025"
              return d.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            }
            // Fallback:
            return rawLabel;
          },

          label: (item) => {
            // default label: "Followers: 586"
            return `Followers: ${item.parsed.y}`;
          },
        },
      },
    },

    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="h-48 w-full">
      <Line
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
