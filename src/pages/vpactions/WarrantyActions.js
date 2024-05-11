import React from 'react'

//icons
import { AiOutlineSearch } from 'react-icons/ai'
import { BsArrowDownSquare } from 'react-icons/bs'


function WarrantyActions() {
    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3 px-3 justify-between'>
                <h1 className='text-black font-bold text-xl'>Garancije</h1>
                <div className='flex items-center gap-3'>
                    <button className='p-3.5 rounded-full bg-black text-white'><AiOutlineSearch size={23} /></button>
                    <input style={{ minWidth: 320 }} className='bg-gray-50 py-3 px-3 border-2 outline-none' type="text" placeholder='Pretrazite garanciju po broju racuna' />
                </div>
            </div>
            <div className="m-3 p-3 bg-white">
                <div className="warranty-filters flex items-center justify-between mb-3">
                    <h1 className='font-semibold ml-3'>Garancije</h1>
                    <div className="buttons flex items-center gap-2">
                        <button className='bg-black text-white p-2.5 border-2 border-black'>Opcije</button>
                        <select className='bg-gray-50 py-3 px-4 border-2 outline-none' name="" id="">
                            <option value="" selected disabled>Sortiraj po</option>
                            <option value="">Datum: Zadnji - Prvi</option>
                            <option value="">Datum: Prvi - Zadnji</option>
                            <option value="">Vrijednost Proizvoda: Vece - Manje</option>
                            <option value="">Vrijednost Proizvoda: Manje - Vece</option>
                        </select>
                    </div>
                </div>
                <p className='p-2.5 text-sm mb-2 font-semibold bg-black text-white'>Lista Reklamacija</p>
                <div className="complaints-list flex flex-col gap-2">
                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between pb-2">
                            <h1>Garancija: <strong>#236</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                        <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                        <div className="all-infos pt-2">
                            <p className='text-sm font-semibold'>Garancija za proizvod: <strong>iPhone 14 PRO MAX</strong></p>
                            <h1 className='text-xs mb-2'>Garanciju izdao: <strong>David Obradovic</strong></h1>
                            <img onClick={() => window.open('https://imgv2-1-f.scribdassets.com/img/document/213562483/original/a2d35555f9/1693353808?v=1')} className='mb-2 shadow-md' style={{ maxWidth: '20%', cursor: 'pointer' }} src="https://imgv2-1-f.scribdassets.com/img/document/213562483/original/a2d35555f9/1693353808?v=1" alt="" />
                            <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                            <div className='pt-2 pb-2'>
                                <p className='text-xs mb-2'>Datum garancije: <strong>25.01.2023</strong></p>
                                <p className='text-xs'>Trajanje garancije: <strong>2 god</strong></p>
                            </div>
                            <button className='bg-black text-white p-3 w-full'>ODGOVORI NA REKLAMACIJU</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarrantyActions