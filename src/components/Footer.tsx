import React from 'react'
import { Link } from "react-router-dom";

const Footer:React.FC = () => {
  const currentYear:number = new Date().getFullYear()
  return (
    <footer>
        <p>Copyright &copy; {currentYear}</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer