import React from 'react'
import './find.scss'
import Image from 'next/image'
import Button from '@/shared/ui/Button/Button'

export default function FindTravel() {
  return (
    <div className='container mt-[-60px] mb-20'>
      <div className='pt-8 pb-12 px-6 bg-white rounded-[16px]'>
        <h2 className='text-lg font-semibold text-green mb-8'>Where are you flying?</h2>
        <div className='trip flex gap-6 mb-8'>
          <div className='trip__choose pl-4 py-[18px] pr-3 flex items-center'>
            <h4 className='text-base trip__text whitespace-nowrap font-normal mr-[121px]'>Lahore - Karachi</h4>
            <Image src={'/swap-horizontal.svg'} width={24} height={24} alt='swap' />
          </div>
          <div className='trip__choose pl-4 py-[18px] pr-3 flex items-center'>
            <h4 className='text-base trip__text font-normal mr-[32px]'>Return</h4>
            <Image src={'/chevron_down.svg'} width={24} height={24} alt='swap' />
          </div>
          <div className='trip__choose pl-4 py-[18px] pr-3 flex items-center'>
            <h4 className='text-base trip__text whitespace-nowrap font-normal mr-[142px]'>07 Nov 22 - 13 Nov 22</h4>
          </div>
          <div className='trip__choose pl-4 py-[18px] pr-3 flex items-center'>
            <h4 className='text-base trip__text whitespace-nowrap font-normal mr-[130px]'>1 Passenger, Economy</h4>
          </div>
        </div>
        <div className='flex justify-end gap-6'>
          <a className='text-sm text-green font-medium flex justify-center items-center cursor-pointer'><Image src={'/add-outline.svg'} width={16} height={16} alt='add' className='mr-1'/> Add Promo Code</a>
          <Button label='Show Filghts' className='bg-primary py-[15.5px] flex justify-center items-center rounded-[4px] text-sm font-medium text-green px-4 hover:text-white hover:bg-black transition-all duration-[5000]'/>
        </div>
      </div>
    </div>
  )
}
