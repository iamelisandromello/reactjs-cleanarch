import React from 'react'
import Styles from './login-styles.scss'
import { Header, InputBase, Footer } from '@/presentation/components'

const login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <InputBase type="email" name='email' placeholder='Digite seu e-mail' />
        <InputBase type="password" name='password' placeholder='Digite sua senha' />

        <button className={Styles.submit} >Entrar</button>
        <span className={Styles.link}>Criar conta</span>
      </form>
      <Footer />
    </div>
  )
}

export default login
