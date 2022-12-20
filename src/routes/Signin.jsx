import React, {useState} from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom'
import {signIn, UserAuth} from '../context/AuthContext'

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth()

  const handleSubmit =async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
    }
  }


  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-xl text-center font-bold uppercase'>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-2xl'>
              <input onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl' type="email" placeholder='Ingrese tu Email' />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-500' />
            </div>
          </div>
          <div className='my-4'>
            <label>Contraseña</label>
            <div className='my-2 w-full relative rounded-2xl shadow-2xl'>
              <input onChange={(e) => setPassword(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl' type="password" />
              <AiFillLock className='absolute right-2 top-3 text-gray-500' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button uppercase font-bold text-btnText rounded-3xl shadow-2xl'>Iniciar Sesion</button>
        </form>
        <p className='my-4'>No tienes cuenta? <Link className='text-accent' to='/signup'>Registrarse</Link></p>
      </div>
    </div>
  )
}

export default Signin