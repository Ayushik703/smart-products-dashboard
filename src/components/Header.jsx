export const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container">
        <h2>Smart Products Dashboard</h2>
      </div>
    </header>
  )
}

const styles = {
  header: {
    padding: "16px",
    backgroundColor: "#1e293b",
    color: "#fff",
    textAlign: "center"
  }
}

