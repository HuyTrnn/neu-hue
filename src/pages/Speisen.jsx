import React from 'react'
import SpeisenContent from '../components/SpeisenContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingTable from '../components/BookingTable'
export default function Speisen() {

  return (
    <div className='background-speisen'>
      <Header/>
      <SpeisenContent/>
      <BookingTable/>
      <Footer/>
    </div>
  )
}
