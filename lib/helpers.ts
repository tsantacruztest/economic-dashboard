export function formatDate(date: string) {

  if (!date || date === "N/A") {
    return "N/A";
  }

  return new Date(date).toLocaleString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
}

export function getLatestDate(
  argentina: any,
  spain: any
) {

  const dates = [
    argentina.inflation.updated,
    argentina.emae.updated,
    argentina.salary.updated,
    argentina.unemployment.updated,
    argentina.riskCountry.updated,

    argentina.usdOfficial?.updated,

    spain.inflation.updated,
    spain.gdp.updated,
    spain.unemployment.updated,
    spain.euribor.updated,
    spain.salary.updated,
  ].filter(Boolean);

  return dates.sort().reverse()[0];
}