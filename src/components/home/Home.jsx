import React from 'react'
import Navbar from '../layouts/Navbar'
import Banner from '../layouts/Banner'
import Search from '../layouts/Search'
import Footer from '../layouts/Footer'
import ReferEarnBanner from '../layouts/ReferEarnBanner'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Search />
        <ReferEarnBanner />
        <Footer />
      
    </div>
  )
}

export default Home
