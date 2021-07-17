import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/TK_logo.jpg'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggler navbar-light" style={{ backgroundColor: '#e3f2fd', height: '120px'}}>
      <div className="container-fluid d-flex justify-content-space-between align-items-center px-md-5">
        <Link href="/" passHref>
          <a>
            <Image src={logo} height={60} width={60} alt="Logo" className="rounded-circle" />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <span className="navbar-text fs-4">
              Travel Karnataka
            </span>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;