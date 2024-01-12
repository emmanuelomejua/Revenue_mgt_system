import { useState } from 'react'
import './login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleLogin = async (e:any) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', {
        email,
        password
      })
      localStorage.setItem('user', JSON.stringify(res.data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='login'>
      <form 
        className="login__cont" 
        autoComplete='off' 
        onSubmit={handleLogin}
      >
        <img src="ifadore.png" alt="" />
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder='Email' 
          onChange={(e)=>setEmail(e.target.value)} 
          required min={8}
        />
        <input 
          type="password" 
          placeholder='Password' 
          onChange={(e)=>setPassword(e.target.value)} 
          required min={8} 
        />
        <button type='submit'>Login</button>
        {/* {error && <span>Please Enter a valid username and password</span>} */}
      </form>
    </div>
  )
}

export default Login
