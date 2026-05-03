import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.h1}>My Navbar</h1>
      <button className={styles.btn}>Home</button>
    </div>
  )
}

export default Navbar
