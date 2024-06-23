const Button = ({ countValue, setCountValue, titleButton }) => {
  return (
    <button onClick={() => setCountValue((count) => count + 1)}>
      {titleButton} {countValue}
    </button>
  );
};

export default Button;
