import React, {useContext} from 'react'
import styles from '../css/header.module.css'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const {loggedUserID, logoutUser} = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Blogger</h1>
      <div>
        {
          loggedUserID ? (
            <button className={styles.button} onClick= {logoutUser}>Logout</button>
          ) :(
            <button className={styles.button}>Login</button>
          )
        }
      </div>
    </header>
  )
}

export default Header