process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getRiskCountry() {
  try {

    const response = await fetch(
      "https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo",
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const data = await response.json();

    return {
      value: data.valor,
      updated: data.fecha,
      source: "ArgentinaDatos",
    };

  } catch (error) {

    console.error(error);

    return {
      value: 0,
      updated: "N/A",
      source: "ArgentinaDatos",
    };
  }
}
