import React from 'react'
import logo from '../assets/chistats_logo.svg'

const Header = () => {
  return (
    <section className='flex justify-between w-full'>
        <h2 className='text-[30px] ocean-dark-blue font-extrabold'>FinGenie</h2>
        <img src={logo} alt="logo" className='w-24'/>
    </section>
  )
}

export default Header