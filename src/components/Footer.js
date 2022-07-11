const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
        <p>Copyright &copy; {currentYear}</p>
        <a href="/about">About</a>
    </footer>
  )
}

export default Footer