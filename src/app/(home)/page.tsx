import React from 'react'
import HomeView from '../modules/home/view/home-view'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'
// import FourthSection from '@/components/FourthSection'

const MainDashboard = () => {
  return (
    <main>
      <HomeView />
      <SecondSection />
      <ThirdSection />
      {/* <FourthSection /> */}
    </main>
  )
}

export default MainDashboard