export async function getSpainInflation() {
  try {
    const response = await fetch(
      "https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/76134?tip=AM"
    );

    const data = await response.json();

    console.log(JSON.stringify(data[0], null, 2));

    const latestData = data[0].Data[0];
    const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const chartData = data[0].Data
  .slice(0, 12)
  .reverse()
  .map((item: any) => {
    const date = new Date(item.Fecha);

    const month =
      months[date.getMonth()];

    const year =
      String(date.getFullYear()).slice(-2);

    return {
      month: `${month} ${year}`,
      value: item.Valor,
    };
  });

   return {
  value: latestData.Valor,
  updated: latestData.Fecha,
  source: "INE",
  chartData,
};

  } catch (error) {

    console.error(error);

    return {
      value: 0,
      updated: "N/A",
      source: "INE",
    };
  }
}