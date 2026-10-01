import { getEuribor } from "./providers/euribor";
import { getSpainInflation } from "./providers/spainInflation";
import { getSpainUnemployment } from "./providers/spainUnemployment";
import { getSpainGdp } from "./providers/spainGdp";

export async function getSpainData() {

const euribor = await getEuribor();
const inflation = await getSpainInflation();
const unemployment = await getSpainUnemployment();
const gdp = await getSpainGdp();

  return {
    inflation,

    gdp: {
  value: 2.6,
  updated: "2026-09-25",
},

    unemployment,

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