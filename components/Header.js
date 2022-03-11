import React from 'react'
import styles from '../styles/nav.module.css'

function Header() {
  return (
    <nav className={styles.container}>
        <img className={styles.logo} src='bar.png' alt='BackTrack'/>
        {/* <div className={styles.searchbar}>
            <input type="search" placeholder="Search for users, songs, or tracks" />
        </div> */}
    </nav>
  )
}

export default Header