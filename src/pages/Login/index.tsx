import React from 'react'
import tasklyLogo from '../../assets/taskly-logo.svg'

export const Login = () => {
  return (
    <div className='login-container'>
      <img src={tasklyLogo} alt='Taskly' />
      <form className='form-box-container' method='post'>
        <h1 className='text-user-welcome'>
          Olá, entre com e-mail e senha.
        </h1>

        <div className='wrapper-login-form'>
          <div>
            <label htmlFor=''>Seu e-mail</label>
            <input className='user-email' type='email'/>
          </div>
          <div>
            <div className='text-password-labels'>
              <label htmlFor='user-password'>Senha</label>
              <a className='forgot-password-link'>Esqueci minha senha</a>
            </div>
            <input className='user-password' type='password' name='user-password' placeholder='Digite sua senha' />
          </div>
          <button className='button-login'>Entra</button>
        </div>

        <div className='line-divider'></div>

        <a href='http://' target='_blank'>Não possui conta? Cadastre-se!</a>
      </form>
    </div>
  )
}

export default Login