import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Trending = () => {

    const [trending,setTrending] = useState([])

    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {
      axios.get(url).then((response) => {
        setTrending(response.data.coins)
        console.log(response.data.coins);
      })
    }, [url])
    

  return (
    <div className='rounded-div my-12 py-2 text-primary'>
        <h1 className='text-2xl font-bold py-4 text-center md:text-left '>TRENDING</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {trending.map((coin, idx) => (
                <div className='rounded-div flex justify-between p-4 hover:scale-110 ease-in-out duration-500' key={idx}>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex'>
                            <img className='mr-4 rounded-full' src={coin.item.small} alt='/' />
                            <div>
                                <p className='font-bold'>{coin.item.name}</p>
                                <p>{coin.item.symbol}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p className='uppercase font-bold mr-2'>rank</p>
                            <p className='font-bold text-lg'>{coin.item.market_cap_rank}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trending