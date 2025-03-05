import { useEffect, useState } from "react";
import { getProducts } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Shopee Clone</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-2 rounded-xl shadow-lg 
                        transition duration-300 hover:shadow-md"
          >
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="text-red-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
