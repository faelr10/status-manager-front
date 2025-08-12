import api from "../apiConfig";

export async function getAllDiarias() {
  try {
    const response = await api.get("/gestao");
    return response.data;
  } catch (error) {
    console.error("Error fetching diarias:", error);
    throw error;
  }
}
