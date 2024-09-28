import PropTypes from "prop-types";

function Input({ id, type }) {
  return (
    <label htmlFor="username">
      <span>Username</span>
      <input type={type} id={id} />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
