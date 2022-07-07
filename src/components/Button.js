import PropTypes from 'prop-types';

const Button = ({ buttonText, color }) => {
  return (
    <button style={{backgroundColor:color}}
    className="btn">
        { buttonText } 
    </button>
  )
}

Button.defaultProps = {
    buttonText: 'Button',
    color: '#FF00FF'
}

Button.propTypes = {
    buttonText: PropTypes.string,
    color: PropTypes.string,
}

export default Button