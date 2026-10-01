"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  data: {
    month: string;
    value: number;
  }[];
};

export default function InflationChart({ data }: Props) {
  return (
    <div className="w-full h-[220px] md:h-[320px]">

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
          />

          <XAxis
  dataKey="month"
  tick={{ fill: "#64748b", fontSize: 10 }}
  axisLine={false}
  tickLine={false}
/>

          <YAxis
  tick={{ fill: "#64748b", fontSize: 10 }}
  axisLine={false}
  tickLine={false}
/>

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#16a34a"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#16a34a",
              strokeWidth: 2,
              stroke: "#ffffff",
            }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}