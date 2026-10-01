export async function getEurArs() {
  try {
    const response = await fetch(
      "https://dolarapi.com/v1/cotizaciones/eur"
    );

    const data = await response.json();

    return {
      value: data.venta,
      updated: data.fechaActualizacion,
      source: "DolarApi",
    };

  } catch (error) {

    console.error(error);

    return {
      value: 0,
      updated: "N/A",
      source: "DolarApi",
    };
  }
}