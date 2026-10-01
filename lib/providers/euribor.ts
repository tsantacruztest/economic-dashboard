process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getEuribor() {
  try {

    const response = await fetch(
      "https://www.euriborday.com/data/euribor.json",
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    const data = await response.json();

    const dates = data.euribor.dates;

    const euribor12m =
      data.euribor.series["12m"];

    const lastDate =
      dates[dates.length - 1];

    const lastValue =
      euribor12m[euribor12m.length - 1];

    return {
      value: lastValue,
      updated: lastDate,
      source: "EuriborDay",
    };

  } catch (error) {

    console.error(error);

    return {
      value: 0,
      updated: "N/A",
      source: "EuriborDay",
    };
  }
}