import { totalExpenseTransaction } from "@/lib/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatisticsChart = ({ expenses }) => {
  const period = "daily"; // Example period
  const dateRange = { start: new Date('2024-05-16'), end: new Date('2024-05-22') }; // Example date range

  const totalExpenses = totalExpenseTransaction(expenses, period, dateRange);
  console.log(totalExpenses); 

  const chartData = [
    { date: "16 Sat", current: totalExpenses, prev: 80 },
    { date: "17 Sun", current: 186, prev: 80 },
    { date: "18 Mon", current: 305, prev: 200 },
    { date: "19 Tue", current: 237, prev: 120 },
    { date: "20 Wed", current: 73, prev: 190 },
    { date: "21 Thu", current: 209, prev: 130 },
    { date: "22 Fri", current: 214, prev: 140 },
  ];

  return (
    <ResponsiveContainer className="text-sm min-h-52 md:min-h-32 text-gray-2">
      <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
        <CartesianGrid vertical={false} />
        <YAxis
          axisLine={false}
          tickMargin={15}
          tickFormatter={(value) => `$${value}`}
        />
        <XAxis dataKey={"date"} axisLine={false} />
        <Tooltip />
        <Bar
          dataKey="current"
          radius={[4, 4, 0, 0]}
          className="fill-gray2"
          barSize={16}
        />
        <Bar
          dataKey="prev"
          className="fill-primaryBlue w-4"
          radius={[4, 4, 0, 0]}
          barSize={16}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;
