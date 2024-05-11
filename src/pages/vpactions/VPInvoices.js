import React, { useState } from 'react'

// icons
import { AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai'
import { AiOutlinePhone, AiOutlineFieldNumber, AiOutlineClockCircle } from 'react-icons/ai'
import { IoOptionsOutline } from 'react-icons/io5'
import { BiShoppingBag } from 'react-icons/bi'
import { TbZip } from 'react-icons/tb'
import { GiConfirmed } from 'react-icons/gi'
import { CiLocationArrow1, CiTimer } from 'react-icons/ci'
import { BsFileExcel, BsCashStack } from 'react-icons/bs'
import { MdOutlineSell, MdAttachMoney, MdOutlineOpenInNew } from 'react-icons/md'


import VPInvoiceCreator from '../../components/invoices/VPInvoiceCreator'

function VPInvoices() {

    const [showCreateVPmodal, setShowCreateVpModal] = useState(null)

    return (
        <div className='dash-page w-full'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Veleprodajni Racuni</h1>
            </div>
            <div className='m-3'>
                <button onClick={() => setShowCreateVpModal(true)} className='bg-black text-white w-full p-3 flex items-center gap-3 justify-center'><AiOutlinePlusCircle size={22} /> Kreiraj novi racun</button>
            </div>
            {showCreateVPmodal ? <VPInvoiceCreator setModalStatus={() => setShowCreateVpModal(false)} /> : null}
            <div className="vp-invoices-list m-3 p-3 bg-white">
                <div className="vil-filters mb-3 bg-gray-50 border-2 p-3 flex items-center justify-between">
                    <h1 className='text-xl font-semibold'>Lista VP racuna</h1>
                    <div className="vil-buttons flex items-center gap-2">
                        <button className='bg-black py-2.5 px-4 text-white border-2 border-black'>Opcije</button>
                        <select className='bg-gray-50 py-3 px-4 border-2 outline-none' name="" id="">
                            <option value="" selected disabled>Sortiraj po</option>
                            <option value="">Vrijednost: Vece - Manje</option>
                            <option value="">Vrijednost: Manje - Vece</option>
                            <option value="">Datum: Zadnji - Prvi</option>
                            <option value="">Datum: Prvi - Zadnji</option>
                        </select>
                    </div>
                </div>
                <div className="vpinv-list flex flex-col gap-2.5">
                    <div className="vpinvoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                        <div className="vpinvoice-main-details flex items-center gap-1.5">
                            <h1 className='flex items-center gap-0.5 text-sm font-bold'>#250</h1>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineUser size={18} />Mobile shop "Munir" d.o.o.</h3>|
                            <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />560,00 KM</h3>
                        </div>
                        <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                    </div>

                    <div className="vpinvoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                        <div className="vpinvoice-main-details flex items-center gap-1.5">
                            <h1 className='flex items-center gap-0.5 text-sm font-bold'>#250</h1>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineUser size={18} />Mobile shop "Munir" d.o.o.</h3>|
                            <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />560,00 KM</h3>
                        </div>
                        <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                    </div>
                    <div className="vpinvoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                        <div className="vpinvoice-main-details flex items-center gap-1.5">
                            <h1 className='flex items-center gap-0.5 text-sm font-bold'>#250</h1>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineUser size={18} />Mobile shop "Munir" d.o.o.</h3>|
                            <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />560,00 KM</h3>
                        </div>
                        <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                    </div>
                    <div className="vpinvoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                        <div className="vpinvoice-main-details flex items-center gap-1.5">
                            <h1 className='flex items-center gap-0.5 text-sm font-bold'>#250</h1>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineUser size={18} />Mobile shop "Munir" d.o.o.</h3>|
                            <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />560,00 KM</h3>
                        </div>
                        <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                    </div>
                    <div className="vpinvoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                        <div className="vpinvoice-main-details flex items-center gap-1.5">
                            <h1 className='flex items-center gap-0.5 text-sm font-bold'>#250</h1>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineUser size={18} />Mobile shop "Munir" d.o.o.</h3>|
                            <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                            <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />560,00 KM</h3>
                        </div>
                        <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default VPInvoices