import api from "../apiConfig";

export async function getRelatoriosGerais() {
  try {
    const response = await api.get("/gestao/relatorios-gerais");
    return response.data;
  } catch (error) {
    console.error("Error fetching diarias:", error);
    throw error;
  }
}
