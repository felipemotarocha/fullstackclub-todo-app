import PropTypes from "prop-types"

const InputErrorMessage = ({ children }) => {
  return <p className="text-left text-xs text-red-500">{children}</p>
}

InputErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InputErrorMessage
