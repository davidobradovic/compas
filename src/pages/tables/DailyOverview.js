import React from 'react'
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineCloseCircle, AiOutlineCloudUpload, AiOutlineMore, AiOutlineRight, AiOutlinePrinter, AiOutlineExpandAlt } from 'react-icons/ai'
import { MdAttachMoney, MdOutlineCancel, MdDeleteOutline } from 'react-icons/md'
import { BsPeople, BsClockHistory, BsCalendar2Date } from 'react-icons/bs'
import { PiPackage, PiClockAfternoonBold } from 'react-icons/pi'
import { RiUserStarLine } from 'react-icons/ri'
import { GoIssueDraft } from 'react-icons/go'
import { IoCreateOutline, IoFilterOutline } from 'react-icons/io5'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { CgOptions } from 'react-icons/cg'
import { TbUsers } from 'react-icons/tb'
import { CiShoppingTag } from 'react-icons/ci'
import { LuShoppingBag } from 'react-icons/lu'

function DailyOverview() {
    return (
        <div className="dash-page">
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>DailyOverview</h1>
            </div>
            <div className='bg-white p-3 m-3'>
                <div className='w-full flex items-center justify-end pb-3'>
                    <div className='flex items-center gap-2'>
                        <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><IoFilterOutline size={20} /> Filters </button>
                        <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><CgOptions size={20} /> Options </button>
                    </div>
                </div>
                <div style={{ overflowY: 'auto' }} className='w-full supllies-table-container'>
                    <table style={{ minWidth: '100%', borderWidth: 1, borderColor: 'black' }} className='bg-white DailyOverview-table'>
                        <thead style={{ height: 50, position: 'static' }}>
                            <tr style={{ backgroundColor: 'black', color: 'white' }}>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '200px' }} className='font-light text-sm py-2 text-center bg-blue-300 text-black'>Digital City TOTAL</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '220px' }} className='font-light text-sm py-2 text-center'>Prodaja prethodni dan</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '220px' }} className='font-light text-sm py-2 text-center'>Realizacija kumulativ tekuceg mjeseca</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '150px' }} className='font-light text-sm py-2 text-center'>Kumulativ tekuceg mjeseca 2023</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '140px' }} className='font-light text-sm py-2 text-center'>Indeks 2023 vs real 2022</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '150px' }} className='font-light text-sm py-2 text-center'>Plan</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '120px' }} className='font-light text-sm py-2 text-center'>Index TOT/PL</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '250px' }} className='font-light text-sm py-2 text-center'>Linearna projekcija tekuceg mjeseca</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '250px' }} className='font-light text-sm py-2 text-center'>Indeks linearna projekcija na plan</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '250px' }} className='font-light text-sm py-2 text-center'>Indeks linearna projekcija na tekuci mjesec 2022</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '150px' }} className='font-light text-sm py-2 text-center'>YTD 2022</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '180px' }} className='font-light text-sm py-2 text-center'>YTD 2023</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '250px' }} className='font-light text-sm py-2 text-center'>Indeks YTD 2023 vs 2022</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'white', minWidth: '250px' }} className='font-light text-sm py-2 text-center'>AVG dnevna potreba za tekuci mjesec 2022</th>
                                <th style={{ minWidth: '250px' }} className='font-light text-sm py-2 text-center'>AVG dnevna potreba za plan</th>
                            </tr>
                            <tr style={{ borderTopWidth: 1, borderTopColor: 'black' }} className='bg-blue-300'>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '200px'}} className='text-xs text-left px-2 py-1 font-light'>Ukupno</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '220px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '220px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '140px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '180px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px'}} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                                <th style={{ minWidth: '250px' }} className='text-xs text-left px-2 py-1 font-light'>1000</th>
                            </tr>
                        </thead>
                        <tbody className='order-table-tbody'>

                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>OSTALO</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '140px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '140px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>3873511007328</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '250px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>35.737,0</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0,05</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '150px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0,09</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '180px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '120px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>5/11/23</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , borderRightWidth: 1, borderRightColor: 'black', minWidth: '125px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>80%</td>
                                <td style={{ overflow: 'hidden', borderBottomWidth: 1, borderBottomColor: 'black' , minWidth: '125px' }} className='text-xs py-2 bg-gray-50 text-left px-2'>0,04</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DailyOverview