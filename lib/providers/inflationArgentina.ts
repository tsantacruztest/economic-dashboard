process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getArgentinaInflationHistory() {

  const response = await fetch(
    "https://api.argentinadatos.com/v1/finanzas/indices/inflacion",
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const data = await response.json();

  return data;
}