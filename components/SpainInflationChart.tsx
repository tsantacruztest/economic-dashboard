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

export default function SpainInflationChart({ data }: Props) {
  const latestValue =
    data[data.length - 1]?.value ?? 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-2xl font-bold text-black">
          🇪🇸 Inflación España
        </h3>

        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Variación mensual del IPC
        </p>

        <div className="mt-3 md:mt-4">
          <span className="text-3xl md:text-4xl font-bold text-red-600">
            {latestValue}%
          </span>
        </div>
      </div>

      <div className="h-[220px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.25}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#000000",
                fontSize: 10,
              }}
              axisLine={{ stroke: "#d1d5db" }}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#000000",
                fontSize: 10,
              }}
              axisLine={{ stroke: "#d1d5db" }}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                color: "#000000",
              }}
              formatter={(value) => [
                `${value}%`,
                "IPC",
              ]}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#dc2626",
                strokeWidth: 2,
                stroke: "#ffffff",
              }}
              activeDot={{
                r: 6,
                fill: "#dc2626",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}