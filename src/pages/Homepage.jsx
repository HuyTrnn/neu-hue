import React, { useEffect } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Homepage() {
  
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
    <div>
      <Header total={totalLength}/>
      <Content/>
      <Footer/>
    </div>
  )
}
