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

import { usdHistory } from "@/data/usdHistory";

export default function UsdChart() {
  const latestValue = usdHistory[usdHistory.length - 1]?.value ?? 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-black">
          💵 Evolución del Dólar Oficial
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Cotización histórica USD/ARS
        </p>

        <div className="mt-4">
          <span className="text-4xl font-bold text-blue-600">
            ${latestValue.toLocaleString("es-AR")}
          </span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usdHistory}>
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.25}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#000000" }}
              axisLine={{ stroke: "#d1d5db" }}
            />

           <YAxis
  domain={[
    (dataMin: number) => dataMin - 20,
    (dataMax: number) => dataMax + 20,
  ]}
  tick={{ fill: "#000000" }}
  axisLine={{ stroke: "#d1d5db" }}
/>

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                color: "#000000",
              }}
             formatter={(value) => [
  `$${Number(value).toLocaleString("es-AR")}`,
  "USD/ARS",
]}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#2563eb",
                strokeWidth: 2,
                stroke: "#ffffff",
              }}
              activeDot={{
                r: 7,
                fill: "#2563eb",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}