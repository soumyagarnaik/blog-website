import React,{useState, useContext} from 'react'
import styles from '../css/login.module.css'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const [userData,setUserData] = useState({})
  const {loginUser} = useContext(AuthContext)

  const handleChange = (e) => {
    const name = e.target.name;
          const value = e.target.value;
          setUserData(values => ({...values, [name]:value}))
  }
  const submitHandler = (e) => {
    loginUser(userData)
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.form} >
          <div className={styles.inputContainer}>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder="User Email" value={userData.email} onChange={handleChange} required />
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
          </div>
          <button type="submit" onClick={submitHandler}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage