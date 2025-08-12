import api from "../apiConfig";

export async function getAllObras() {
  try {
    const response = await api.get("/obras");
    return response.data;
  } catch (error) {
    console.error("Error fetching obras:", error);
    throw error;
  }
}
