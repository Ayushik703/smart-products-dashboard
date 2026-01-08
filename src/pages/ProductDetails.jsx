import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Loader} from "../components/Loader"


export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  gap: "40px",
  padding: "40px",
  maxWidth: "900px",
  margin: "auto"
  },
  image: {
    width: "250px",
    objectFit: "contain",
  },
};
