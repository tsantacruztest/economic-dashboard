export async function getSpainUnemployment() {
  try {
    const response = await fetch(
      "https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/65349?tip=AM"
    );

    const data = await response.json();

    const unemploymentSeries = data.find(
      (item: any) =>
        item.Nombre.includes("Tasa de paro de la población") &&
        item.Nombre.includes("Total Nacional") &&
        item.Nombre.includes("Ambos sexos")
    );

    console.log(unemploymentSeries?.Nombre);

    const latestData = unemploymentSeries?.Data?.[0];

    return {
      value: latestData?.Valor ?? 0,
      updated: latestData?.Fecha ?? "N/A",
      source: "INE",
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