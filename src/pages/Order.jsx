import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OrderContent from '../components/OrderContent'
import { ToastContainer } from 'react-toastify'

export default function Order() {

  const [totalLength, setTotalLength] = useState(0);
  const [items, setItems] = useState();
  const [isAdded, setIsAdded] = useState(false)

  const storedSelectedFoods = localStorage.getItem("selectedFoods");

  const onAddFood = () => {
    setIsAdded(!isAdded)
  }

  useEffect(() => {
    if (storedSelectedFoods) {
      setItems(JSON.parse(storedSelectedFoods));
      
      // Calculate total length
      let length = 0;
      Object.keys(JSON.parse(storedSelectedFoods)).forEach((key) => {
        length += JSON.parse(storedSelectedFoods)[key].length;
      });
      setTotalLength(length);
    }
  }, [storedSelectedFoods, isAdded]);

  return (
    <div className='background bg-scroll h-full min-h-screen'>
    <ToastContainer />

    <Header total={totalLength}/>
    <OrderContent setIsAdded={onAddFood}/>
    <Footer />
  </div>
  )
}
