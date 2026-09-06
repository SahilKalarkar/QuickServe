import apiRequest from "./api";

export const getCategories = async () => {
  const response = await apiRequest("/categories", { method: "GET" });
  return response.data;
};

export const getCategoryById = async (categoryId) => {
  return await apiRequest(`/categories/${categoryId}`, { method: "GET" });
};
