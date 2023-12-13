import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactContent from '../components/ContactContent'

export default function Contact() {
  return (
    <div className='background-contact bg-scroll h-full min-h-screen'>
      <Header />
      <ContactContent />
      <Footer />
    </div>
  )
}
