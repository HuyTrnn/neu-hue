import React from 'react'
import SpeisenContent from '../components/SpeisenContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingTable from '../components/BookingTable'
import { useLocation } from 'react-router-dom'
export default function Speisen() {
  const location = useLocation();
console.log( location);
  return (
    <div className='background'>
      <Header/>
      <SpeisenContent/>
      <BookingTable/>
      <Footer/>
    </div>
  )
}
