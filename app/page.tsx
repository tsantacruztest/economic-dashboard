import KPICard from "../components/KPICard";
import InflationChart from "../components/InflationChart";
import UsdChart from "../components/UsdChart";
import SpainInflationChart from "../components/SpainInflationChart";

import {getLatestDate,formatDate} from "../lib/helpers";
import { getArgentinaData } from "../lib/argentina";
import { getSpainData } from "../lib/spain";

export default async function Home() {
  const argentina = await getArgentinaData();
  const spain = await getSpainData();
  const lastUpdate = getLatestDate(
  argentina,
  spain
);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-10">

      {/* HEADER */}

      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
  🌍 Economic Dashboard
</h1>

<p className="text-slate-600 font-medium text-base md:text-xl mt-2">
  Argentina 🇦🇷 vs España 🇪🇸
</p>

<p className="text-slate-500 text-sm mt-2">
  Updated: {formatDate(lastUpdate)}
</p>
      </div>
      {/* OVERVIEW CARD */}

<div className="mb-8 md:mb-10 bg-white rounded-3xl shadow-lg border border-slate-200 p-4 md:p-8">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    <div>
      <h2 className="text-2xl font-bold text-slate-800">
        📊 Economic Overview
      </h2>

      <p className="text-slate-500 mt-1">
        Quick status of monitored economies
      </p>
    </div>

    <div className="flex gap-8 flex-wrap">

      <div>
        <p className="text-sm text-slate-500">
          Argentina
        </p>

        <p className="text-lg font-semibold text-yellow-600">
          🟡 Neutral
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-500">
          Spain
        </p>

        <p className="text-lg font-semibold text-green-600">
          🟢 Positive
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-500">
          Last Update
        </p>

        <p className="text-lg font-semibold text-slate-700">
          {formatDate(lastUpdate)}
        </p>
      </div>

    </div>

  </div>

</div>
``

      {/* CARDS */}

      <div className="grid xl:grid-cols-2 gap-6 md:gap-8">

        {/* ARGENTINA */}

        <div className="bg-white p-4 md:p-8 rounded-3xl shadow-lg border border-slate-200">

          <div className="mb-8">
  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
    🇦🇷 Argentina
  </h2>
</div>

          <div className="grid gap-4">

            <KPICard
              title="Inflación-live"
              value={`${argentina.inflation.value}%`}
              updated={formatDate(argentina.inflation.updated)}
              status="good"
/>

            <KPICard
              title="EMAE"
              value={`${argentina.emae.value}%`}
              updated={formatDate(argentina.emae.updated)}
              status="bad"
            />

            <KPICard
              title="Salario Real"
              value={`+${argentina.salary.value}%`}
                updated={formatDate(argentina.salary.updated)}

              status="good"
            />

            <KPICard
              title="Desempleo"
              value={`${argentina.unemployment.value}%`}
                updated={formatDate(argentina.unemployment.updated)}

              status="warning"
            />

            <KPICard
              title="Riesgo País-live"
              value={`${argentina.riskCountry.value}`}
                updated={formatDate(argentina.riskCountry.updated)}

              status="warning"
            />
            <KPICard
                title="USD/ARS Oficial-live"
                value={`$${argentina.usdOfficial.value}`}
                updated={formatDate(argentina.usdOfficial.updated)}
                status="good"
/>

          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              📈 Evolución de la Inflación
            </h3>

            <InflationChart
  data={argentina.inflationChart}
/>
          </div>

<div className="mt-8">
  <UsdChart />
</div>
        </div>

        {/* ESPAÑA */}

        <div className="bg-white p-4 md:p-8 rounded-3xl shadow-lg border border-slate-200">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              🇪🇸 España
            </h2>

          
          </div>

          <div className="grid gap-4">

            <KPICard
              title="IPC"
              value={`${spain.inflation.value}%`}
                updated={formatDate(spain.inflation.updated)}

              status="good"
            />

            <KPICard
              title="PIB"
              value={`${spain.gdp.value}%`}
              updated={formatDate(spain.gdp.updated)}

              status="good"
            />

            <KPICard
              title="Paro"
              value={`${spain.unemployment.value}%`}
                              updated={formatDate(spain.unemployment.updated)}

              status="warning"
            />

            <KPICard
              title="Euribor-live"
              value={`${spain.euribor.value}%`}
                              updated={formatDate(spain.euribor.updated)}

              status="good"
            />

            <KPICard
              title="Salario Real"
              value={`+${spain.salary.value}%`}
                              updated={formatDate(spain.salary.updated)}

              status="good"
            />

          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              📈 Evolución del IPC
            </h3>

            <SpainInflationChart />
          </div>

        </div>

      </div>

    </main>
  );
}