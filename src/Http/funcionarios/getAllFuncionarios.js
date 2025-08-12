import api from "../apiConfig";

export async function getAllFuncionarios() {
  try {
    const response = await api.get("/funcionarios");
    return response.data;
  } catch (error) {
    console.error("Error fetching funcionarios:", error);
    throw error;
  }
}
