import React from 'react'
import ThemeToggle from './ThemeToggle'
import { FaLinkedin,FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Soporte</h2>
            <ul>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Informacion</h2>
            <ul>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right font-bold'>Registrate para mas Informacion</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Ingresa tu Email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Registrarse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className='flex justify-center items-center gap-2'> 
            <a target="_blank" href="https://github.com/AgusMolinaCode"><FaGithub size={40} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/agustin-molina-994635138/"><FaLinkedin size={40} /></a>
        </div>  
        <div>
            <p className='text-center py-4 font-bold text-lg'>Developed By Agustin Molina</p>
        </div>
    </div>
  )
}

export default Footer