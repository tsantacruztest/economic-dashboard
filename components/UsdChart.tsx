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

import { usdHistory } from "@/data/usdHistory";

export default function UsdChart() {
  const latestValue =
    usdHistory[usdHistory.length - 1]?.value ?? 0;

  const firstValue =
    usdHistory[0]?.value ?? 0;

  const variation =
    (
      ((latestValue - firstValue) / firstValue) *
      100
    ).toFixed(1);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">

      <div className="mb-4 md:mb-6">

        <h3 className="text-lg md:text-2xl font-bold text-black">
          💵 Dólar Oficial Argentina
        </h3>

        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Cotización histórica USD/ARS
        </p>

        <div className="mt-3 md:mt-4">

          <div className="text-3xl md:text-4xl font-bold text-blue-600">
            ${latestValue.toLocaleString("es-AR")}
          </div>

          <div className="text-sm mt-1 text-green-600 font-medium">
            ▲ +{variation}% últimos 12 meses
          </div>

        </div>

      </div>

      <div className="h-[220px] md:h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={usdHistory}>

            <defs>
              <linearGradient
                id="usdGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.25}
                />
                <stop
                  offset="95%"
                  stopColor="#2563eb"
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
              domain={[
                (dataMin: number) => dataMin - 20,
                (dataMax: number) => dataMax + 20,
              ]}
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
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                color: "#000000",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString("es-AR")}`,
                "USD/ARS",
              ]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2.5}
              fill="url(#usdGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#2563eb",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}