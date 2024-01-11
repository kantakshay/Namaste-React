import React, { useEffect } from 'react'
import {apiMenuItemes} from '../utils/constant'
const RestaurantMenu = () => {
const resId = 123
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
            const data = await fetch(apiMenuItemes+ resId);
            const json = await data.json()
            console.log(json);
    }
  return (
    <div className='menu'>
        <h1>Name Of Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>burger</li>
            <li>pizza</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu