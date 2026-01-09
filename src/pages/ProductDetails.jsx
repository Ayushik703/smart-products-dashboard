import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "../components/Loader";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

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

  if (loading) return <Loader />;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <div style={styles.details}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>

        {/* Quantity Selector */}
        <div style={styles.qtyContainer}>
          <button onClick={decreaseQty} style={styles.qtyBtn}>
            −
          </button>
          <span style={styles.qty}>{quantity}</span>
          <button onClick={increaseQty} style={styles.qtyBtn}>
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button onClick={addToCart} style={styles.cartBtn}>
          Add to Cart
        </button>
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
    objectFit: "contain"
  },
  details: {
    flex: 1
  },
  qtyContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "20px 0"
  },
  qtyBtn: {
    width: "32px",
    height: "32px",
    fontSize: "18px",
    cursor: "pointer"
  },
  qty: {
    fontSize: "16px",
    minWidth: "20px",
    textAlign: "center"
  },
  cartBtn: {
    padding: "10px 16px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
}

