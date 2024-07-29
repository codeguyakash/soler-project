const ShowMessage = ({ message, className } = {}) => {
  if (!message) return null;

  return <h1 className={`text-center p-4 mb-4 ${className}`}>{message}</h1>;
};

export default ShowMessage;
