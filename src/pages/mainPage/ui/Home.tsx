import FindTravel from '@/features/findTravel/ui/findTravel'
import MainSection from '@/widgets/Main/ui/MainSection'
import React from 'react'

export default function HomePage() {
  return (
    <main className='main'>
      <MainSection />
      <FindTravel />
    </main>
  )
}
