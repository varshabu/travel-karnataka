import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/TK_logo.jpg'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', height: '150px'}}>
      <div className="container-fluid d-flex justify-content-space-between align-items-center px-5">
        <Link href="/" passHref>
          <a>
            <Image src={logo} height={80} width={80} alt="Logo" className="rounded-circle" />
          </a>
        </Link>
        <span className="navbar-text fs-1">
          Travel Karnataka
        </span>
      </div>
    </nav>
  )
}

export default Navbar;