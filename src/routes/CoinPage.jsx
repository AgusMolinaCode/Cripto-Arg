import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';



const CoinPage = () => {
  const [coin, setCoin] = useState({})
  const params = useParams()

  const url =`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
      console.log(response.data);
    })
  }, [url])
  

  return (
    <div className='rounded-div my-12 py-8'>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={coin.image?.large} alt="/" />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} Precio</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (<p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>) : null }
            <p className='font-bold'>7 Dias</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <p className='text-gray-500 text-sm font-bold'>Capitalizacion de Mercado</p>
            {coin.market_data?.market_cap ? (<p className='font-bold'>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
          </div>
          <div>
            <p className='text-gray-500 text-sm font-bold'>Volumen (24hs)</p>
            {coin.market_data?.market_cap ? (<p className='font-bold'>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='font-bold'>24h + Alto</p>
              {coin.market_data?.high_24h ? (<p className='font-bold'>${coin.market_data.high_24h.usd.toLocaleString()}</p>) : null}
            </div>
            <div>
              <p className='font-bold'>24h + Bajo</p>
              {coin.market_data?.low_24h ? (<p className='font-bold'>${coin.market_data.low_24h.usd.toLocaleString()}</p>) : null}
            </div>
          </div>
        </div>
        <div>
          <p className='text-xl font-bold'>Stadisticas de Mercado</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm font-bold'>Ranking Mercado</p>
              <p className='font-bold'>{coin.market_cap_rank}</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm font-bold'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p className='font-bold'>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm font-bold'>Puntaje de Confianza</p>
              {coin.tickers ? <p className='font-bold'>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm font-bold'>Cambio Precio (24hs)</p>
                {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-bold'>Cambio Precio (7D)</p>
                {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm font-bold'>Cambio Precio (14d)</p>
                {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
              </div>
            </div>
              <div className='flex justify-between py-4'>
                <div>
                  <p className='text-gray-500 text-sm font-bold'>Cambio Precio (30d)</p>
                  {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
                </div>
                <div>
                  <p className='text-gray-500 text-sm font-bold'>Cambio Precio (60d)</p>
                  {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
                </div>
                <div>
                  <p className='text-gray-500 text-sm font-bold'>Cambio Precio (1y)</p>
                  {coin.market_data ? (<p className='font-bold'>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
                </div>
              </div>
            <div className='flex justify-around p-8 text-accent'>
              <a target="_blank" href="https://github.com/AgusMolinaCode"><FaGithub size={40} /></a>
              <a target="_blank" href="https://www.linkedin.com/in/agustin-molina-994635138/"><FaLinkedin size={40} /></a>
            </div>  
        </div>
      </div>


      <div className='py-4'>
        <p className='text-xl font-bold'>Detalle {coin.name}</p>
        <p className='' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : '')}}></p>
      </div>
    </div>
  )
}

export default CoinPage