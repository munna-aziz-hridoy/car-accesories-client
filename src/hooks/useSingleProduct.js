import axios from "axios";
import { useEffect, useState } from "react";

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000"/signleProduct?id=${id}`;
    axios.get(url).then((data) => setProduct(data.data));
  }, [id]);
  return [product];
};

export default useSingleProduct;
