import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const GoalChart = () => {
  const chartData = [{ achieved: 70 }];

  return (
    <ResponsiveContainer height={144} width={144}>
      <RadialBarChart
        data={chartData}
        innerRadius={60}
        outerRadius={100}
        startAngle={0}
        endAngle={-270}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          className="last:fill-muted stroke-[#EEE] stroke-[20px]"
          polarRadius={[60]}
        />

        <RadialBar
          dataKey="achieved"
          className="fill-primaryBlue"
          cornerRadius={10}
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-[15px] leading-[17.15px] font-bold"
                    >
                      {chartData[0].achieved.toLocaleString()}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default GoalChart;
