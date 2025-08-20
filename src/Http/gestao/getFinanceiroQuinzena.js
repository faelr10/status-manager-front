import api from "../apiConfig";

export async function getFinanceiroQuinzena(quinzena) {
  try {
    const response = await api.get(`/gestao/relatorio-financeiro?quinzena=${quinzena}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching diarias:", error);
    throw error;
  }
}