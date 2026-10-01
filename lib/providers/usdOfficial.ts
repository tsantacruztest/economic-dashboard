process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getUsdOfficial() {
  try {

    const response = await fetch(
      "https://dolarapi.com/v1/dolares/oficial",
      {
        next: {
          revalidate: 3600, // 1 hora
        },
      }
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