import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = (limit) => {
  const url = `https://sleepy-cove-71214.herokuapp.com/products?limit=${limit}`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((data) => setProducts(data.data));
  }, [url]);
  return [products];
};

export default useProducts;
