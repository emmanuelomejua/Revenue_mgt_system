import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <form className="login__cont">
        <img src="ifadore.png" alt="" />
        <h2>Login</h2>
        <input type="email" placeholder='Email' required min={8}/>
        <input type="password" placeholder='Password' required min={8} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
