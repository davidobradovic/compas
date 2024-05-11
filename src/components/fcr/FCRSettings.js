import React from 'react'

function FCRSettings() {
  return (
    <div style={{ width: '100vw', height: '100vh', right: 0, top: 0, backdropFilter: 'blur(5px)' }} className='absolute flex items-center justify-center'>
        <div className='w-2/3 h-2/3 bg-white p-3 shadow-xl'>
            <h1 className='text-sm font-semibold pb-3'>Podesavanja | Fiskalna kasa #213</h1>
            <div className="inputs-section flex flex-col gap-3">
                <input className='w-full bg-gray-50 border-2 p-3' type="number" name="" id="" placeholder='Unesite sifru fiskalne kase' />
                <input className='w-full bg-gray-50 border-2 p-3' type="text" name="" id="" placeholder='Unesite IPaddr fiskalne kase' />
            </div>
        </div>
    </div>
  )
}

export default FCRSettings