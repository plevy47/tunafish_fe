export const SendRequest = async (endpoint: string, method: string) => {
  const response = await fetch(endpoint, {
    method,
  });
  return response.json();
};
