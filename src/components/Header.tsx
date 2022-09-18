import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header:React.FC<Props> = ({ title = 'Hello there', onToggle, activated } ) => {
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

type Props = {
  title: string,
  onToggle: Function,
  activated: Boolean
}

export default Header