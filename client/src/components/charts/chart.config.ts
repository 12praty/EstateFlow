import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
  {
    name: "Last Month",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: "Running Month",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#51f0a8", "#7efe8f"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      style: {
        colors: "#f0f0f0",
      },
    },
    axisBorder: {
      color: "#353a3e",
    },
    axisTicks: {
      color: "#353a3e",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#969696",
      },
    },
    title: {
      text: "$ (thousands)",
      style: {
        color: "#969696",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    labels: {
      colors: "#f0f0f0",
    },
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
};
