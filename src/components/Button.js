import PropTypes from 'prop-types';

const Button = ({ buttonText, color, onClick }) => {
  return (
    <button onClick={onClick} style={{backgroundColor:color}}
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
    onClick: PropTypes.func,
}

export default Button