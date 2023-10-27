import React from 'react'

// icons
import { AiOutlineFieldNumber, AiOutlineClockCircle, AiOutlineUser, AiOutlineContacts, AiOutlineNodeIndex } from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import { LiaLocationArrowSolid, LiaFileInvoiceSolid } from 'react-icons/lia'
import { MdOutlineNumbers, MdGpsNotFixed } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GiPayMoney } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserGraduate } from 'react-icons/fa6'

//styles
import './styles/order-table.css'
import { Link } from 'react-router-dom'

function MPOrderPage() {
    return (
        <div className='dash-page p-3'>

            <div className='bg-white p-3'>
                <div className="main-details flex flex-1 flex-row-reverse items-center gap-5 mb-2">
                    <h1 className='text-black flex items-center gap-1 text-xl'><AiOutlineFieldNumber /> 2330000000001</h1>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><LiaFileInvoiceSolid color='black' /> 9847</p>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><AiOutlineClockCircle color='black' /> 03.01.2023</p>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><LiaLocationArrowSolid color='black' /> Zivinice / Regija Tuzla / BA-75270</p>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><BiStore color='black' /> VELEPRODAJA / Veleprodaja</p>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><GiPayMoney color='black' /> Virmansko</p>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><TbTruckDelivery color='black' /> Ajdin Ibrahimovic</p>
                </div>
                <div className='w-full'>
                    <table style={{ borderWidth: 1 }} className='w-full border-black order-table'>
                        <thead>
                            <tr>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>Naziv artikla</th>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>Kolicina</th>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>Cijena bez PDV-a</th>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>PDV 17%</th>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>Cijena sa PDV-om</th>
                                <th className='text-left text-sm font-light p-2 bg-black text-white'>Ukupno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-left text-sm font-light p-2'>Digicell crna silikonska maskica <Link>(3873511095011)</Link></td>
                                <td className='text-left text-sm font-light p-2'>5.00</td>
                                <td className='text-left text-sm font-light p-2'>4.15</td>
                                <td className='text-left text-sm font-light p-2'>0.85</td>
                                <td className='text-left text-sm font-light p-2'>5.00</td>
                                <td className='text-left text-sm font-light p-2'>25.00</td>
                            </tr>
                            <tr>
                                <td className='text-left text-sm font-light p-2'>Digicell crna silikonska maskica <Link>(3873511095011)</Link></td>
                                <td className='text-left text-sm font-light p-2'>5.00</td>
                                <td className='text-left text-sm font-light p-2'>4.15</td>
                                <td className='text-left text-sm font-light p-2'>0.85</td>
                                <td className='text-left text-sm font-light p-2'>5.00</td>
                                <td className='text-left text-sm font-light p-2'>25.00</td>
                            </tr>
                            <tr className='overall-results'>
                                <td className='text-left text-sm font-light p-2'></td>
                                <td className='text-left text-sm font-light p-2'>10.00</td>
                                <td className='text-left text-sm font-light p-2'>8.30</td>
                                <td className='text-left text-sm font-light p-2'>1.70</td>
                                <td className='text-left text-sm font-light p-2'>10.00</td>
                                <td className='text-left text-sm font-light p-2'>50.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                <div>
                    <p className='font-light text-gray-500 text-sm flex items-center gap-1'><AiOutlineNodeIndex color='black' /> 3000</p>
                </div>
            </div>

        </div>
    )
}

export default MPOrderPage