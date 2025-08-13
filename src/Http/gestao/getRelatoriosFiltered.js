import api from "../apiConfig";

export async function getRelatoriosFiltered(startDate, endDate) {
  try {
    const response = await api.get(`/gestao/relatorios-gerais?startDate=${startDate}&endDate=${endDate}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching diarias:", error);
    throw error;
  }
}