import React from 'react'
import './main.scss'

export default function MainSection() {
  return (
    <section className='main-bg pt-20 pb-[120px]'>
      <div className='flex flex-col gap-2 pl-[126px]'>
        <h1 className='travel__text text-2xl text-white font-bold'>Make your travel whishlist, we’ll do the rest</h1>
        <h4 className='text-white font-medium text-lg'>Special offers to suit your plan</h4>
      </div>
    </section>
  )
}
