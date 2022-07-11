import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title } ) => {

  const buttonClicked = (e) => {
    console.log(e)
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button buttonText='Add' 
                color='green'
                onClick={buttonClicked}/>
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