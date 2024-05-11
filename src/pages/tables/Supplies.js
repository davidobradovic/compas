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

function Supplies() {
    return (
        <div className="dash-page">
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Supplies</h1>
            </div>
            <div className='bg-white p-3 m-3'>
                <div className='w-full flex items-center justify-end pb-3'>
                    <div className='flex items-center gap-2'>
                        <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><IoFilterOutline size={20} /> Filters </button>
                        <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><CgOptions size={20} /> Options </button>
                    </div>
                </div>
                <div style={{ overflowY: 'auto' }} className='w-full supllies-table-container'>
                    <table style={{ borderTopWidth: 1, borderTopStyle: 'dashed', borderTopColor: 'rgba(0,0,0,0.5)', minWidth: '100%' }} className='bg-white supplies-table'>
                        <thead style={{ height: 50, position: 'static' }}>
                            <tr style={{ borderBottomWidth: 1, borderBottomStyle: 'dashed', borderBottomColor: 'rgba(0,0,0,0.5)' }}>
                                <th style={{ minWidth: '120px' }} className='font-medium text-sm py-2 text-center'>Tip Proizvoda</th>
                                <th style={{ minWidth: '120px' }} className='font-medium text-sm py-2 text-center'>Kategorija</th>
                                <th style={{ minWidth: '120px' }} className='font-medium text-sm py-2 text-center'>Podkategorija</th>
                                <th style={{ minWidth: '150px' }} className='font-medium text-sm py-2 text-center'>Grupa</th>
                                <th style={{ minWidth: '140px' }} className='font-medium text-sm py-2 text-center'>Podgrupa</th>
                                <th style={{ minWidth: '140px' }} className='font-medium text-sm py-2 text-center'>Model</th>
                                <th style={{ minWidth: '120px' }} className='font-medium text-sm py-2 text-center'>Sifra Artikla</th>
                                <th style={{ minWidth: '250px' }} className='font-medium text-sm py-2 text-center'>Naziv Artikla</th>
                                <th style={{ minWidth: '150px' }} className='font-medium text-sm py-2 text-center'>Kolicina na stanju</th>
                                <th style={{ minWidth: '150px' }} className='font-medium text-sm py-2 text-center'>Nabavna Cijena</th>
                                <th style={{ minWidth: '150px' }} className='font-medium text-sm py-2 text-center'>Prodajna Cijena</th>
                                <th style={{ minWidth: '180px' }} className='font-medium text-sm py-2 text-center'>Skladiste</th>
                                <th style={{ minWidth: '120px' }} className='font-medium text-sm py-2 text-center'>Datum Ispisa</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>RUC %</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>RUC KM</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>Rabat %</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>MAX RABAT</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>Rabat KM</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>Nova VP cijena</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>Novi RUC %</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>Nova cijena sa PDV-om</th>
                                <th style={{ minWidth: '125px', backgroundColor: 'black', color: 'white' }} className='font-medium text-sm py-2 text-center'>ACTIONS</th>
                            </tr >
                        </thead>
                        <tbody className='order-table-tbody'>

                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>

                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                            <tr style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)', height: 40 }}>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>OSTALO</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '140px' }} className='text-xs py-3 text-center'>0</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>3873511007328</td>
                                <td style={{ overflow: 'hidden', minWidth: '250px' }} className='text-xs py-3 text-center'>Digicell pakovanja</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>35.737,0</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,05</td>
                                <td style={{ overflow: 'hidden', minWidth: '150px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '180px' }} className='text-xs py-3 text-center'>Veleprodaja Vogosca</td>
                                <td style={{ overflow: 'hidden', minWidth: '120px' }} className='text-xs py-3 text-center'>5/11/23</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,04</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'></td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>44%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,00</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,09</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>80%</td>
                                <td style={{ overflow: 'hidden', minWidth: '125px' }} className='text-xs py-3 text-center'>0,11</td>
                                <td style={{ overflow: 'hidden', minWidth: '105px', height: 40 }} className='text-sm text-center flex items-center justify-center gap-5'><button><RxOpenInNewWindow size={21} /></button><button><AiOutlinePrinter size={21} /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Supplies