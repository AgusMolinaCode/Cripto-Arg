import React from 'react'

const Dolar = ({dolar}) => {
    
  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2'>DOLAR</h1>
        </div>
        
        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th className='font-bold hidden sm:table-cell'>SOLIDARIO</th>
                    <th className='font-bold w-[120px]'>BLUE</th>
                    <th className='hidden sm:table-cell font-bold'>CCB</th>
                    <th className='hidden sm:table-cell font-bold'>CCL</th>
                    <th className='hidden sm:table-cell font-bold'>MEP</th>
                    <th className='font-bold w-[120px]'>OFICIAL</th>
                </tr>
            </thead>   
            <tbody>
                <tr className='h-[50px] border-b overflow-hidden'>
                    <td className='hidden sm:table-cell font-bold'>{dolar.solidario}</td>
                    <td className='font-bold'>{dolar.blue}</td>
                    <td className='hidden sm:table-cell font-bold'>{dolar.ccb}</td>
                    <td className='hidden sm:table-cell font-bold'>{dolar.ccl}</td>
                    <td className='hidden sm:table-cell font-bold'>{dolar.mep}</td>
                    <td className='font-bold'>{dolar.oficial}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}

export default Dolar