import { useCart } from "../context/CartContext"

export const Header = () => {
  const { cartCount } = useCart()

  return (
    <header style={styles.header}>
      <h2>Smart Products Dashboard</h2>

      <button style={styles.cartBtn}>
        View Cart ({cartCount})
      </button>
    </header>
  )
}

const styles = {
  header: {
    padding: "16px",
    backgroundColor: "#1e293b",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cartBtn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  }
}
