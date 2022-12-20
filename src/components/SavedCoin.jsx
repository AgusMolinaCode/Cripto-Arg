import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {doc, onSnapshot,updateDoc} from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'

const SavedCoin = () => {

    const [coins,setCoins] = useState([])
    const {user} = UserAuth()

    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        setCoins(doc.data()?.MiLista)
      })
    }, [user.email])

    const coinPath = doc(db, 'users', `${user.email}`)
    const deleteCoin = async (passedid) => {
        try {
            const result = coins.filter((item) => item.id !== passedid)
            await updateDoc(coinPath, {
                MiLista: result
            })
        } catch (e) {
            console.log(e.message);
        }
    }
    

  return (
    <div>
        {coins.length === 0 ? 
            (<p className='text-center font-bold'>No tienes monedas guardadas. Porfavor guarda tus monedas para verlas en "Mi Lista" <Link to='/'>Comienze a guardar sus Cripto favoritas!</Link></p>) : (
            <table className='w-full border-collapse text-center'>
                <thead>
                    <tr className='border-b'>
                        <th className='px-4'>Ranking #</th>
                        <th className='text-left'>Monedas</th>
                        <th className='text-left'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr key={coin.id} className='h-[60px] overflow-hidden'>
                            <td className='font-bold'>{coin?.rank}</td>
                            <td>
                                <Link to={`/coin/${coin.id}`}>
                                    <div className='flex items-center'>
                                        <img src={coin?.image} className='w-8 mr-4' alt="/" />
                                        <div>
                                            <p className='hidden sm:table-cell font-bold'>{coin?.name}</p>
                                            <p className='text-gray-500 text-left text-sm font-bold'>{coin?.symbol.toUpperCase()}</p>
                                        </div>
                                    </div>
                                </Link>
                            </td>
                            <td className='pl-8'>
                                <AiOutlineClose onClick={() => deleteCoin(coin.id)} className='cursor-pointer bg-red-400 rounded-full w-5 h-5' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) }
    </div>
  )
}

export default SavedCoin