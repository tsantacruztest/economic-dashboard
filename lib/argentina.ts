import { getUsdOfficial } from "./providers/usdOfficial";
import { getRiskCountry } from "./providers/riskCountry";
import { getArgentinaInflationHistory } from "./providers/inflationArgentina";

export async function getArgentinaData() {

  const usdOfficial = await getUsdOfficial();
  const riskCountry = await getRiskCountry();

  const inflationHistory =
    await getArgentinaInflationHistory();

    const inflationChart = inflationHistory
  .slice(-24)
  .map((item: any) => ({
    month: new Date(item.fecha).toLocaleDateString(
      "en-GB",
      {
        month: "short",
        year: "2-digit",
      }
    ),
    value: item.valor,
  }));

  const lastInflation =
    inflationHistory[inflationHistory.length - 1];

  return {

    inflation: {
      value: Number(lastInflation.valor),
      updated: lastInflation.fecha,
      source: "ArgentinaDatos",
    },
    inflationChart,

    emae: {
      value: -0.4,
      updated: "2026-09-25",
    },

    salary: {
      value: 2.1,
      updated: "2026-09-20",
    },

    unemployment: {
      value: 7.9,
      updated: "2026-09-15",
    },

    riskCountry,

    usdOfficial: {
      ...usdOfficial,
      value: Number(usdOfficial.value),
    },

  };
}