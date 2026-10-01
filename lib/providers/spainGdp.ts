export async function getSpainGdp() {
  try {
    const response = await fetch(
      "https://servicios.ine.es/wstempus/js/ES/OPERACIONES_DISPONIBLES"
    );

    const data = await response.json();

    console.log(data);

    return {
      value: 0,
      updated: "N/A",
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