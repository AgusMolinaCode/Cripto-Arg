import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Dolar from '../components/Dolar'
import Trending from '../components/Trending'


const Home = ({coins,dolar}) => {

  return (
    <div>
      <Dolar dolar={dolar} />
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}

export default Home