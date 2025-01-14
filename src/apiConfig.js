const API_BASE_URL = "http://localhost:5001/api";

const API_ENDPOINTS = {
  registerUser: `${API_BASE_URL}/user/register`,
  loginUser: `${API_BASE_URL}/user/login`,
  fetchCurrentUser: `${API_BASE_URL}/user/current`,

  fetchProducts: `${API_BASE_URL}/products`,
  createProduct: `${API_BASE_URL}/products`,
  updateProduct: (productId) => `${API_BASE_URL}/products/${productId}`,
  deleteProduct: (productId) => `${API_BASE_URL}/products/${productId}`,
};

export { API_BASE_URL, API_ENDPOINTS };
