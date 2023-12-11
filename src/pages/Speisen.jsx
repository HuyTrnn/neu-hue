import React from 'react'
import SpeisenContent from '../components/SpeisenContent'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import BookingTable from '../components/BookingTable'
export default function Speisen() {
  console.log('Speisen component rendered');
  return (
    <div className='background-speisen'>
      <Header/>
      <SpeisenContent/>
      <BookingTable/>
      <Footer/>
    </div>
  )
}
