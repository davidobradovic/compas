import React from 'react'

//icons
import { AiOutlineSearch } from 'react-icons/ai'
import { BsArrowDownSquare } from 'react-icons/bs'

function RequestForAnalyses() {
    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3 px-3 justify-between'>
                <h1 className='text-black font-bold text-xl'>Zahtjev za analitiku</h1>
            </div>
            <div className="m-3 p-3 bg-white flex flex-col gap-3">
                <div className='flex flex-col'>
                    <label className='text-sm mb-1' htmlFor="">Unesite detalje analitike</label>
                    <textarea style={{ minHeight: 300 }} className='bg-gray-50 border-2 p-2 outline-none text-sm' type="text" placeholder='Unesite podatke' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-1' htmlFor="">Unesite detalje analitike</label>
                    <select className='bg-gray-50 border-2 p-2 text-sm outline-none' name="" id="">
                        <option value="" selected disabled>Izaberi mjesto analitike</option>
                        <option value="">Sidebar</option>
                        <option value="">Tabele</option>
                        <option value="">Veleprodajne Radnje</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-1' htmlFor="">Dodatne informacije</label>
                    <textarea className='bg-gray-50 border-2 p-2 outline-none' text-sm type="text" placeholder='Unesite dodatne informacije' />
                </div>
                <button className='bg-black p-3 text-white'>POSALJI</button>
            </div>
        </div>
    )
}

export default RequestForAnalyses