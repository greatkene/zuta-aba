import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, DiscountHome } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <DiscountHome />
      <Contact />
    </main>
  )
}

export default HomePage
