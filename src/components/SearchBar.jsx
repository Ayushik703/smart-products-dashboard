export const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={styles.input}
    />
  )
}

const styles = {
  input: {
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  }
}
