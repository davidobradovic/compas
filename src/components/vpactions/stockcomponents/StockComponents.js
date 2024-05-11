import React, { useState } from 'react'
import { AiOutlinePhone, AiOutlineCheckCircle, AiOutlineDelete, AiOutlineFieldNumber, AiOutlineClockCircle, AiOutlineUnorderedList, AiOutlineCloseCircle } from 'react-icons/ai'
import { IoOptionsOutline, IoPricetagsOutline } from 'react-icons/io5'
import { BiShoppingBag } from 'react-icons/bi'
import { TbZip } from 'react-icons/tb'
import { GiConfirmed } from 'react-icons/gi'
import { CiLocationArrow1, CiTimer } from 'react-icons/ci'
import { BsFileExcel, BsCashStack } from 'react-icons/bs'
import { MdOutlineSell, MdAttachMoney, MdOutlineOpenInNew, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { HiOutlineColorSwatch } from 'react-icons/hi'

export const ProductsModal = ({ modalExitFunction, newProductFunction }) => {

    const [productInfos, setProductInfos] = useState(null)

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', top: 0, right: 0 }} className='absolute flex items-center justify-center'>
            <button onClick={modalExitFunction} style={{ width: 30, height: 30 }} className='absolute right-3 top-3 bg-black text-white text-sm flex items-center justify-center'>X</button>
            <div className='p-3 w-2/3 h-4/5 bg-white relative'>
                <div className="w-full flex items-center gap-2">
                    <input className='bg-gray-100 w-4/5 p-3 text-sm outline-black' type="text" name="" id="" placeholder='Pretrazite proizvod po nazivu ili sifri' />
                    <button onClick={newProductFunction} className='bg-black text-sm text-white p-3 w-1/5'>Dodaj proizvod</button>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 my-2'></div>
                <div className="list-of-products flex flex-col gap-2">
                    <div className="product-container bg-gray-100 p-3 flex items-center justify-between gap-3">
                        <h1 className='w-1/5 text-sm flex items-center gap-2'><BiShoppingBag size={22} />iPhone 14 PRO MAX</h1>
                        <span>|</span>
                        <h1 className='w-1/5 text-xs flex items-center justify-center gap-2'><MdOutlineProductionQuantityLimits size={22} />150 kom</h1>
                        <span>|</span>
                        <h1 className='w-1/5 text-xs flex items-center justify-center gap-2'><IoPricetagsOutline size={22} />2,150.50 KM</h1>
                        <span>|</span>
                        <div className='w-1/5 flex items-center justify-center gap-2'>
                            <h1 className='text-xs flex items-center gap-2'><HiOutlineColorSwatch size={22} /> Avaliable colors:</h1>
                            <div className="colors flex items-center">
                                <div style={{ backgroundColor: '#5C5B57', width: 20, height: 20 }} className="color rounded-full relative border border-gray-50 "></div>
                                <div style={{ backgroundColor: '#F9E5C9', width: 20, height: 20, left: -7.5 }} className="color rounded-full relative border border-gray-50"></div>
                                <div style={{ backgroundColor: '#505F4E', width: 20, height: 20, left: -15 }} className="color rounded-full relative border border-gray-50"></div>
                            </div>
                        </div>
                        <span>|</span>
                        <div className="w-1/5 buttons flex items-center justify-center gap-2">
                            <button onClick={() => setProductInfos(true)} className='bg-black w-1/2 py-1 px-3 text-white' >Detalji</button>
                            <button className='bg-black w-1/2 py-1 px-3 text-white' >Opcije</button>
                        </div>
                    </div>
                    <div className="product-container bg-gray-100 p-3 flex items-center justify-between gap-3">
                        <h1 className='w-1/5 text-sm flex items-center gap-2'><BiShoppingBag size={22} />Game box 500</h1>
                        <span>|</span>
                        <h1 className='w-1/5 text-xs flex items-center justify-center gap-2'><MdOutlineProductionQuantityLimits size={22} />20 kom</h1>
                        <span>|</span>
                        <h1 className='w-1/5 text-xs flex items-center justify-center gap-2'><IoPricetagsOutline size={22} />500.00 KM</h1>
                        <span>|</span>
                        <div className='w-1/5 flex items-center justify-center gap-2'>
                            <h1 className='text-xs flex items-center gap-2'><HiOutlineColorSwatch size={22} /> Avaliable colors:</h1>
                            <div className="colors flex items-center">
                                <div style={{ backgroundColor: '#000', width: 20, height: 20 }} className="color rounded-full relative border border-gray-50 "></div>
                                <div style={{ backgroundColor: '#fff', width: 20, height: 20, left: -7.5 }} className="color rounded-full relative border border-gray-50"></div>
                            </div>
                        </div>
                        <span>|</span>
                        <div className="w-1/5 buttons flex items-center justify-center gap-2">
                            <button className='bg-black w-1/2 py-1 px-3 text-white' >Detalji</button>
                            <button className='bg-black w-1/2 py-1 px-3 text-white' >Opcije</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                productInfos ? (
                    <div className='modal-in-modal w-2/6 h-4/6 bg-white text-black absolute top-0 border-4 border-gray-200 p-3 overflow-auto'>
                        <button onClick={() => setProductInfos(null)} style={{ width: 30, height: 30, position: 'absolute', right: 5, top: 5, color: 'black' }}><AiOutlineCloseCircle size={22} /></button>
                        <h1 className='text-sm font-semibold text-black'>iPhone 14 PRO MAX</h1>
                        <div style={{ height: 1 }} className='w-full bg-gray-200 my-2'></div>
                        <div className="list-of-product-combonations">
                            <h1 className='text-xs bg-white text-black p-2 flex items-center gap-2'><AiOutlineUnorderedList /> Lista proizvoda</h1>
                            <div className="list-lopc flex flex-col gap-5 bg-white mt-3">
                                <div className="list">
                                    <h1 style={{ fontSize: 10 }} className='flex items-center gap-2 uppercase font-semibold mb-2 text-black'>Graphite <div style={{ width: 15, height: 15, backgroundColor: '#5C5B57' }} className="color rounded-full"></div> (Dostupno: 30 kom) </h1>
                                    <div className="sizes w-full flex flex-col gap-2">
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>256 GB <p className='text-xs font-semibold text-black'>(10 kom)</p> <span>2,000.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>512 GB <p className='text-xs font-semibold text-black'>(10 kom)</p> <span>2,250.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>1 TB <p className='text-xs font-semibold text-black'>(10 kom)</p> <span>2,750.00 KM</span> </h1>
                                    </div>
                                </div>
                                <div className="list">
                                    <h1 style={{ fontSize: 10 }} className='flex items-center gap-2 uppercase font-semibold mb-2 text-black'>Gold <div style={{ width: 15, height: 15, backgroundColor: '#F9E5C9' }} className="color rounded-full"></div> (Dostupno: 15 kom) </h1>
                                    <div className="sizes w-full flex flex-col gap-2">
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>256 GB <p className='text-xs font-semibold text-black'>(7 kom)</p> <span>2,000.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>512 GB <p className='text-xs font-semibold text-black'>(3 kom)</p> <span>2,250.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>1 TB <p className='text-xs font-semibold text-black'>(5 kom)</p> <span>2,750.00 KM</span> </h1>
                                    </div>
                                </div>
                                <div className="list">
                                    <h1 style={{ fontSize: 10 }} className='flex items-center gap-2 uppercase font-semibold mb-2 text-black'>ALPINE GREEN <div style={{ width: 15, height: 15, backgroundColor: '#505F4E' }} className="color rounded-full"></div> (Dostupno: 3 kom) </h1>
                                    <div className="sizes w-full flex flex-col gap-2">
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>256 GB <p className='text-xs font-semibold text-black'>(2 kom)</p> <span>2,000.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>512 GB <p className='text-xs font-semibold text-black'>(1 kom)</p> <span>2,250.00 KM</span> </h1>
                                        <h1 className='flex items-center justify-between text-sm bg-gray-50 p-2'>1 TB <p className='text-xs font-semibold text-red-400'>(0 kom)</p> <span>2,750.00 KM</span> </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ left: 5, bottom: 5, width: 'calc(100% - 10px)' }} className='bg-black text-white absolute p-3'>NARUCI PROIZVOD</button>
                    </div>
                ) : null
            }

        </div>
    )
}

export const AddProductToStock = ({ modalExitFunction }) => {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(103, 134, 184,0.4)', backdropFilter: 'blur(5px)', top: 0, right: 0 }} className='absolute flex items-center justify-center'>
            <button onClick={modalExitFunction} style={{ width: 30, height: 30 }} className='absolute right-3 top-3 bg-black text-white text-sm flex items-center justify-center'>X</button>
            <div className='p-3 w-2/3 h-4/5 bg-white relative'>
                <h1 className='font-bold text-center py-3'>DODAJ PROIZVOD U RADNJU</h1>
                <div className="search-product">
                    <input className='bg-gray-50 w-full p-3' type="text" placeholder='Pretrazite proizvod po sifri ili nazivu' />
                </div>
                <div className="products-container mt-3">
                    <div className='addedProduct-container p-3 bg-gray-50'>
                        <div className='apc-main flex items-center justify-between'>
                            <h1 className='font-semibold'>iPhone 14 PRO MAX</h1>
                            <h3 className='text-sm'>2,250.00 KM</h3>
                        </div>
                        <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                        <div className='order-details flex flex-col gap-3'>
                            <div className="od-big-container bg-white p-2 border border-black">
                                <div className="od-container flex items-center justify-between">
                                    <h1 className=' w-1/3 text-xs font-semibold uppercase flex items-center justify-start'>Graphite</h1>
                                    <input className=' w-1/3 bg-gray-200 text-xs p-3' contentEditable={false} disabled type='text' value={`Ukupna kolicina: ${3}`} placeholder='Kolicina' />
                                    <p className=' w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>6,750.00</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                                <div className="od-container flex items-center justify-between">
                                    <h1 className='w-1/3 text-xs uppercase flex items-center justify-start'>512 GB</h1>
                                    <input className='w-1/3 bg-gray-200 text-xs p-3' value={3} type='number' placeholder='Kolicina' />
                                    <p className='w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>6,750.00</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                                <div className="od-container flex items-center justify-between">
                                    <h1 className='w-1/3 text-xs uppercase flex items-center justify-start'>512 GB</h1>
                                    <input className='w-1/3 bg-gray-200 text-xs p-3' type='number' placeholder='Kolicina' />
                                    <p className='w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>0</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                            </div>
                            <div className="od-big-container bg-white p-2 border border-black">
                                <div className="od-container flex items-center justify-between">
                                    <h1 className=' w-1/3 text-xs font-semibold uppercase flex items-center justify-start'>GOLD</h1>
                                    <input className=' w-1/3 bg-gray-200 text-xs p-3' contentEditable={false} disabled type='text' value={`Ukupna kolicina: ${11}`} placeholder='Kolicina' />
                                    <p className=' w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>23,000.00</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                                <div className="od-container flex items-center justify-between">
                                    <h1 className='w-1/3 text-xs uppercase flex items-center justify-start'>256 GB</h1>
                                    <input className='w-1/3 bg-gray-200 text-xs p-3' value={7} type='number' placeholder='Kolicina' />
                                    <p className='w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>14,000.00</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                                <div className="od-container flex items-center justify-between">
                                    <h1 className='w-1/3 text-xs uppercase flex items-center justify-start'>512 GB</h1>
                                    <input className='w-1/3 bg-gray-200 text-xs p-3' value={4} type='number' placeholder='Kolicina' />
                                    <p className='w-1/3 text-xs flex items-center justify-end gap-2'>Vrijednost: <strong>9,000.00</strong></p>
                                    <button className='bg-white border border-red-400 text-red-400 p-1 rounded mx-3'><AiOutlineDelete size={22} /></button>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                        <div className="action-buttons flex items-center gap-2">
                            <button className='bg-white border-2 border-red-400 text-red-400 py-1 px-3 flex items-center gap-2 rounded-full'><AiOutlineDelete size={23} /> Ponisti</button>
                            <button className='bg-white border-2 border-green-500 text-green-500 py-1 px-3 flex items-center gap-2 rounded-full'><AiOutlineCheckCircle size={23} /> Potvrdi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}