import { useNavigate } from "react-router-dom"

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <h4 style={styles.title}>{product.title}</h4>

      <p style={styles.price}>₹ {product.price}</p>

      <button
        style={styles.button}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        View Details
      </button>
    </div>
  )
}

const styles = {
  card: {
    cursor: "pointer",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
    backgroundColor: "#fff"
  },
  image: {
    height: "150px",
    width: "100%",
    objectFit: "contain",
    marginBottom: "10px"
  },
  title: {
    fontSize: "14px",
    height: "40px",
    overflow: "hidden"
  },
  price: {
    fontWeight: "bold",
    margin: "8px 0"
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
}
