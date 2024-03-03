import Navbar from '@/entities/Navbar/ui/Navbar'
import Button from '@/shared/ui/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-white py-7 flex justify-between items-center container'>
      <Image src={'/Logofront.svg'} width={111} height={36} alt='Logo' />
      <Navbar />
      <div className='flex items-center justify-center'>
        <Link href={''} className='text-sm text-green font-semibold mr-8'>Login</Link>
        <Button className='py-2.5 px-6 bg-green font-semibold text-sm rounded-[10px] text-white flex justify-center items-center' label='Sing up' />
      </div>
    </header>
  )
}

