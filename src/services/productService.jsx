import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

//hämta alla produkter (GET)
const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};

//produkter via id
const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
};

// //CREATE
// const createProduct = async (newProduct) => {
//     try {
//         const response = await axios.post(`${API_URL}`, newProduct);
//         return response.data;
//      } catch (error) {
//         console.error('failed creating Product:', error);

//      }
// };

// //UPDATE

// const updateProduct =  async (productId, updatedProduct) => {
//     try {
//         const response = await axios.put(`${API_URL}/${id}`, productId, updatedProduct);
//         return response.data;
//      } catch (error) {
//         console.error(`Error updating product with ID ${productId}:`, error);
//     }
//   };

//   //DELETE

//   const deleteProduct =  async (productId) => {
//     try {
//         const response = await axios.delete(`${API_URL}/${id}`, productId, updatedProduct);
//         return response.data;
//      } catch (error) {
//         console.error(`Error deleting product with ID ${productId}:`, error);
//     }
//   };

const productService = {
  getProductById,
  getAllProducts,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};

export default productService;
