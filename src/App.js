import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios(
        "https://shopit-api-legendary.herokuapp.com/api/products/fetchProducts"
      );

      console.log(response.data);
      setProducts(response.data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>ALL PRODUCTS</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>{product.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
