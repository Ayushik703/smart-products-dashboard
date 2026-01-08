import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import {Loader} from "../components/Loader"


export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>
  if (error) return <p style={{ padding: "20px" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Products</h3>

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  },
};
