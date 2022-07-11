import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onToggle, activated } ) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button buttonText={activated ? 'Add' : 'Hide'}
                color={activated ? 'green' : 'red'}
                onClick={() => onToggle()}/>
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