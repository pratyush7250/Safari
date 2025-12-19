import React, { useContext } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import { StoreContext } from '../../context/storeContext'
import Trip from '../../components/Trip/Trip'
import Destination from '../../components/Destination/Destination'
import PopularWayCard from '../../components/PopularWayCard/PopularWayCard'
import PopularWay from '../../components/PopularWay/PopularWay'
import Footer from '../../components/Footer/Footer'
import KilimanjaroSection from '../../components/KilimanjaroSection/KilimanjaroSection'
const Home = () => {
    const { food_list } = useContext(StoreContext)

  return (
    <div>
      <Hero></Hero>
      <Trip></Trip>
      <Destination></Destination>
      <KilimanjaroSection></KilimanjaroSection>
      <PopularWay></PopularWay>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
