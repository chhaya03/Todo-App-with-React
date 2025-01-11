const ErrorMessage = ({ todoitems }) => {
  return <>{todoitems.length === 0 && <h3>Enjoy your day!</h3>}</>;
};

export default ErrorMessage;
