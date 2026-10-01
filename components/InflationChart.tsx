"use client";

import {
  AreaChart,
  Area,
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
  const latestValue =
    data[data.length - 1]?.value ?? 0;

  const firstValue =
    data[0]?.value ?? 0;

  const variation =
    (
      ((latestValue - firstValue) / firstValue) *
      100
    ).toFixed(1);

  const variationColor =
    Number(variation) <= 0
      ? "text-green-600"
      : "text-red-600";

  const variationIcon =
    Number(variation) <= 0 ? "▼" : "▲";

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">

      <div className="mb-4 md:mb-6">

        <h3 className="text-lg md:text-2xl font-bold text-black">
          📈 Inflación Argentina
        </h3>

        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Evolución mensual de la inflación
        </p>

        <div className="mt-3 md:mt-4">

          <div className="text-3xl md:text-4xl font-bold text-green-600">
            {latestValue}%
          </div>

          <div
            className={`text-sm mt-1 font-medium ${variationColor}`}
          >
            {variationIcon} {variation}% últimos 12 meses
          </div>

        </div>

      </div>

      <div className="h-[220px] md:h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >

            <defs>
              <linearGradient
                id="inflationGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#16a34a"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#16a34a"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.18}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#000000",
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#000000",
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value) => [
                `${value}%`,
                "Inflación",
              ]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#16a34a"
              strokeWidth={2.5}
              fill="url(#inflationGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#16a34a",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}