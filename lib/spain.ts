import { getEuribor } from "./providers/euribor";
import { getSpainInflation } from "./providers/spainInflation";

export async function getSpainData() {

const euribor = await getEuribor();
const inflation = await getSpainInflation();

  return {
    inflation,

    gdp: {
      value: 1.8,
      updated: "2026-09-20",
    },

    unemployment: {
      value: 10.5,
      updated: "2026-09-15",
    },

    euribor: {
      ...euribor,
      value: Number(euribor.value.toFixed(2)),
    },

    salary: {
      value: 0.8,
      updated: "2026-09-10",
    },
  };
}