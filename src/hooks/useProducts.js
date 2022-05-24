import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = (limit) => {
  const url = `http://localhost:5000/products?limit=${limit}`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((data) => setProducts(data.data));
  }, [url]);
  return [products];
};

export default useProducts;
