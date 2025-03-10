"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function NAvbarBotton() {
  const[aksiyalar, setAksiyalar] = useState<{
    title:number
    slug:number
  }[]>()
useEffect(()=>{
  axios.get(`https://gw.texnomart.uz/api/web/v1/header/top-categories`).then(res=>{
    // console.log(res.data.data.data);
    setAksiyalar(res.data.data.data)
  })
},[])
  return (
    <div className=' flex justify-between container m-auto pt-5 px-5'>
     {aksiyalar?.map(item=>{
      return <div key={item.slug}>
        <p>{item.title}</p>
      </div>
     })}
    </div>
  )
}

export default NAvbarBotton
