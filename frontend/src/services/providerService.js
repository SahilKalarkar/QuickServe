import apiRequest from "./api";

// Create provider service
export const createProviderService = async (serviceData) => {
  const result = await apiRequest("/provider-services", {
    method: "POST",
    body: JSON.stringify(serviceData),
  });

  return result.data;
};

// Get logged-in provider services
export const getMyProviderServices = async () => {
  const result = await apiRequest("/provider-services/my-services", {
    method: "GET",
  });

  return result.data;
};
