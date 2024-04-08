import React from 'react'
import RegistForm from './user/RegistForm'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'

const RegistFormPage = () => {
  return (
    <div className='flex flex-col w-full h-auto'> 
    <Header/>
    <RegistForm/>
    <Footer/>
     
      
    </div>
  )
}

export default RegistFormPage
