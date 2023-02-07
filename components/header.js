
import Link from 'next/link'
import styles from '../styles/header.module.css'



function Header() {


  return (
    <header>
      <div className={`contenedor ${styles.barra}`}>
        <h2 className={styles.logo}>YT<span>Download</span></h2>
        <nav className={styles.navegacion} >
          <Link href={'/'}>Inicio</Link>
          <Link href={'#'}>Guardadas</Link>
        </nav>
      </div>
    </header>


  )
}

export default Header
