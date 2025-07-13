import React, { useEffect } from 'react'
import Banner from '../components/Homepage/Banner'
import Enterprise from '../components/Homepage/Enterprise'
import Articles from '../components/Homepage/Articles'
import FocusAreas from '../components/Homepage/Focus Areas'
import Webcast from '../components/Homepage/Webcast'
import Podcast from '../components/Homepage/Podcast'
import CXO from '../components/Homepage/Cxo'
import Functions from '../components/Homepage/Functions'

import Experts from '../components/Homepage/Experts'
import Reports from '../components/Homepage/Reports'
import Brands from '../components/Homepage/Brands'
const Homepage = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
 <>  <Banner />
    <Enterprise />
    <Articles/>
    <FocusAreas /> 
    <Webcast />
    <Podcast />
    <CXO />
    <Functions/>
   
    <Experts/>
    <Reports/>
    <Brands/>
    </> 
  )
}

export default Homepage