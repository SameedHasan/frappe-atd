import PropTypes from "prop-types";

const Alert = ({ message = "", type = "info" }) => {
  return (
    <div>
      <Alert message={message} type={type} showIcon closable />
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // Add other prop types as needed
};

export default Alert;
