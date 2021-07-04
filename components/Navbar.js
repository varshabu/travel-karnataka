import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', height: '150px'}}>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <span className="navbar-text fs-1">
          Travel Karnataka
        </span>
      </div>
    </nav>
  )
}

export default Navbar;