import "./LoadingIndicator.scss"

const LoadingIndicator = () => {
  return (
    <div className="loading">
      <div className="loading__circle"></div>
      <div className="loading__circle"></div>
      <div className="loading__circle"></div>
    </div>
  );
};


export default LoadingIndicator;