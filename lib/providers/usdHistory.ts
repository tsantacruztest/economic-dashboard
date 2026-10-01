export async function getUsdHistory() {
  const response = await fetch("...");
  const data = await response.json();

  return data.map((item: any) => ({
    month: item.month,
    value: item.price,
  }));
}
``