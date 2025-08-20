import api from "../apiConfig";

export async function getListaQuinzenas() {
  try {
    const response = await api.get(`/gestao/lista-quinzenas`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quinzenas:", error);
    throw error;
  }
}