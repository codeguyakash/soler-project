const ShowMessage = ({ message, className } = {}) => {
  if (!message) return null;

  return <div className={`p-4 mb-4 ${className}`}>{message}</div>;
};

export default ShowMessage;
