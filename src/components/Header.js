import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = ({ title, onToggle, activated } ) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (<Button buttonText={activated ? 'Add' : 'Hide'}
                color={activated ? 'green' : 'red'}
                onClick={() => onToggle()}/>)}
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