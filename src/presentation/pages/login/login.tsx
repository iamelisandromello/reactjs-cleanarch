import React from 'react'
import Styles from './login-styles.scss'

const login: React.FC = () => {
  return (
    <div className={Styles.loginWrap}>
      <div className={Styles.login}>
        <header className={Styles.header}>
          <img src=''/>
          <h1>Dev - Adventures Login</h1>
        </header>
        <form className={Styles.form}>
          <h2>Login</h2>
          <input type="email" name='email' placeholder='Digite seu e-mail' />
          <input type="password" name='password' placeholder='Digite sua senha' />
          <button>Entrar</button>
        </form>
        <footer className={Styles.footer}></footer>
      </div>
    </div>
  )
}

export default login
