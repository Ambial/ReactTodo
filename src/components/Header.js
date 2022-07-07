import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title } ) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button buttonText='Add' color='green'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Hello there'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header