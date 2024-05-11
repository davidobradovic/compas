import React, { useState } from 'react'
import OrderModal from '../../components/orders/OrderModal'

function OrdersPage() {

    const [isOrderCheckOpen, setIsOrderCheckOpen] = useState(null)

    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-between py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Narudzbe</h1>
                <input className='bg-gray-100 p-3 mr-3 border-2 outline-none' type='text' placeholder='Pretrazite narudzbe' />
            </div>
            <div className="orders-container bg-white m-3 p-3">
                <div className="orders-controls w-full flex items-start justify-end gap-2 mb-3">
                    <button className='bg-black text-white p-3'>Filters</button>
                    <select className='p-3 outline-none bg-gray-100 border-2' name="" id="">
                        <option value="" disabled selected>Sort by</option>
                        <option value="">Skladiste: A - Z</option>
                        <option value="">Skladiste: Z - A</option>
                    </select>
                </div>
                <div className="orders-list flex flex-col gap-3">
                    <div className="order-container bg-gray-100 p-3 flex items-center justify-between">
                        <h1 className='w-1/6 font-semibold ml-3'>Narudzba #14314</h1>|
                        <h1 className='w-1/6 text-sm'>Veleprodaja</h1>|
                        <h1 className='w-1/6 text-sm'>iPhone 14 PRO MAX 512gb</h1>|
                        <h1 className='w-1/6 text-sm'>150 kom</h1>|
                        <h1 className='w-1/6 text-xs font-semibold text-yellow-400'>NA CEKANJU</h1>|
                        <button onClick={() => setIsOrderCheckOpen(true)} className='bg-black p-2 text-white text-xs'>PROVJERI</button>
                    </div>
                    <div className="order-container bg-gray-100 p-3 flex items-center justify-between">
                        <h1 className='w-1/6 font-semibold ml-3'>Narudzba #31233</h1>|
                        <h1 className='w-1/6 text-sm'>Maloprodaja SCC</h1>|
                        <h1 className='w-1/6 text-sm'>iPhone 14 PRO MAX 512gb</h1>|
                        <h1 className='w-1/6 text-sm'>5 kom</h1>|
                        <h1 className='w-1/6 text-xs font-semibold text-green-400'>PRIHVACENO</h1>|
                        <button onClick={() => setIsOrderCheckOpen(true)} className='bg-black p-2 text-white text-xs'>PROVJERI</button>
                    </div>
                    <div className="order-container bg-gray-100 p-3 flex items-center justify-between">
                        <h1 className='w-1/6 font-semibold ml-3'>Narudzba #77337</h1>|
                        <h1 className='w-1/6 text-sm'>Maloprodaja Alta</h1>|
                        <h1 className='w-1/6 text-sm'>Gamebox pro 500 sm</h1>|
                        <h1 className='w-1/6 text-sm'>3 kom</h1>|
                        <h1 className='w-1/6 text-xs font-semibold text-red-400'>OTKAZANO</h1>|
                        <button onClick={() => setIsOrderCheckOpen(true)} className='bg-black p-2 text-white text-xs'>PROVJERI</button>
                    </div>
                </div>
            </div>
            {isOrderCheckOpen ? <OrderModal setModalStatus={() => setIsOrderCheckOpen(false)} /> : null}
        </div>
    )
}

export default OrdersPage