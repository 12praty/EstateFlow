import { Box, Stack, Typography } from "@pankod/refine-mui";
import { PieChartProps } from "interfaces/home";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="var(--card)"
      justifyContent="space-between"
      alignItems="center"
      pl={{ xs: 2, sm: 3.5 }}
      py={2}
      pr={{ xs: 1, sm: 0 }}
      borderRadius="var(--radius)"
      minHeight="110px"
      width="fit-content"
      minWidth={{ xs: "100%", sm: "fit-content" }}
    >
      <Stack direction="column">
        <Typography fontSize={14} color="var(--muted-foreground)">
          {title}
        </Typography>
        <Typography
          fontSize={24}
          color="var(--foreground)"
          mt={1}
          fontWeight={700}
        >
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: {
            type: "donut",
          },
          colors,
          legend: { show: false },
          dataLabels: {enabled: false},
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
