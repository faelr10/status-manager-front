//criar requisição para a api

import api from "../apiConfig";

export async function createNewDiaria(data) {
  try {
    const response = await api.post("/gestao", data);
    return response.data;
  } catch (error) {
    console.error("Error creating new diaria:", error);
    throw error;
  }
}
