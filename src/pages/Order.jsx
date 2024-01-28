import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OrderContent from '../components/OrderContent'

export default function Order() {
  return (
    <div className='background bg-scroll h-full min-h-screen'>
    <Header />
    <OrderContent />
    <Footer />
  </div>
  )
}
