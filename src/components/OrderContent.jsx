import React from 'react'
import { foodCategory } from '../constants/Menu'
import { useState } from 'react'

export default function OrderContent() {
    const [field, setField] = useState()
    const test = foodCategory.map((category, index) => {
            console.log(foodCategory);
    })
  return (
    <div className='grid-cols-3'>
        <div className="w-full grid-cols-2">
        {foodCategory.map(category => (
        <div key={category.category} className='p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in '>
          <h3 className="text-3xl text-primary-100">{category.category}</h3>
          <ul className='grid-cols-2'>
            {category.items.map(item => (
              <li key={item.name} className='text-primary-text hover:text-primary-200'>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
        </div>
    </div>
  )
}
