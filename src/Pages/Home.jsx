import React from 'react'
import Hero from '../Components/Hero'
import PremiumAboutShivam from '../Components/PremiumAboutShivam'
import WhyShivam from '../Components/WhyShivam'
import HowWeWork from '../Components/HowWeWork'
import WhoWeAre from '../Components/WhoWeAre'
import ShivamGallery from '../Components/ShivamGallery'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <PremiumAboutShivam/>
      <WhyShivam/>
      <ShivamGallery/>
      <HowWeWork/>
      <Testimonials/>
      <WhoWeAre/>
    </div>
  )
}

export default Home
