import React, { useEffect, useState } from 'react'
import SpeisenContent from '../components/SpeisenContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingTable from '../components/BookingTable'
import { useLocation } from 'react-router-dom'
export default function Speisen() {
  const location = useLocation();

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
    <div className='background'>
      <Header total={totalLength}/>
      <SpeisenContent/>
      <BookingTable/>
      <Footer/>
    </div>
  )
}
