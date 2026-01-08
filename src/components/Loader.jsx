export const Loader = () => {
  return (
    <div style={styles.loader}>
      <div style={styles.spinner}></div>
    </div>
  )
}

const styles = {
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh"
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e5e7eb",
    borderTop: "4px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
}
