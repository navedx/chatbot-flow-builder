export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={styles.button}>
      {children}
    </button>
  );
}

const styles = {
  button: {
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    border: '1px solid blue',
    color: 'blue',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
};
