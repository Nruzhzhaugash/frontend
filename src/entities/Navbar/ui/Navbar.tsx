import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex gap-8'>
      <Link href={''} className='text-sm text-green font-semibold'>Home</Link>
      <Link href={''} className='text-sm text-green font-semibold'>Find</Link>
      <Link href={''} className='text-sm text-green font-semibold'>Subscribe</Link>
      <Link href={''} className='text-sm text-green font-semibold'>Нахуй пошел</Link>
    </nav>
  )
}
