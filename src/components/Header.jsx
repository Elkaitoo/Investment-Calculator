import './Header.css'

function Header({ image, title, alt = "Logo" }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src={image} className="header-logo" alt={alt} />
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  )
}

export default Header
