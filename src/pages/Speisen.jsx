import React from 'react'
import SpeisenContent from '../components/SpeisenContent'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
export default function Speisen() {
  console.log('Speisen component rendered');
  return (
    <div className='background-speisen'>
      <Header/>
      <SpeisenContent/>
      <Footer/>
    </div>
  )
}
