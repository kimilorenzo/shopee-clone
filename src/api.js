import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
