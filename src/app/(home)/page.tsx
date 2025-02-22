import React from 'react'
import HomeView from '../modules/home/view/home-view'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'

const MainDashboard = () => {
  return (
    <main>
      <HomeView />
      <SecondSection />
      <ThirdSection />
    </main>
  )
}

export default MainDashboard