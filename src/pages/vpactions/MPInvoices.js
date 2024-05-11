import React from 'react'

//icons
import { AiOutlineSortAscending } from 'react-icons/ai'
import { BsFileExcel } from 'react-icons/bs'
import { RxOpenInNewWindow } from 'react-icons/rx'

function MPInvoices() {
    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3 px-3 justify-between'>
                <h1 className='text-black font-bold text-xl'>Maloprodajni Racuni</h1>
            </div>
            <div className="m-3 p-2 bg-white flex items-center justify-between">
                <input style={{ minWidth: 300 }} className='bg-gray-50 border-2 p-3 outline-none' type="text" placeholder='Pretrazite MP racune po broju racuna' />
                <div className="filter-buttons">
                    <button className='bg-black text-white p-3'>Opcije</button>
                </div>
            </div>
            <div className="m-3 p-3 bg-white">
                <table style={{ borderWidth: 1, borderColor: 'black' }} className='w-full'>
                    <thead style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} className='bg-black text-white w-full'>
                        <tr className=''>
                            <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>ID</th>
                            <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Broj racuna</th>
                            <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Vrijednost racuna</th>
                            <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Lokacija racuna</th>
                            <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Datum racuna</th>
                            <th style={{ width: 50 }} className='font-semibold text-xs text-center p-3 uppercase'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>Alta SCC | Mp Radnja</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                            <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                                <AiOutlineSortAscending size={23} className='bg-black text-white py-1' />
                                <RxOpenInNewWindow size={23} className='bg-black text-white py-1' />
                                <BsFileExcel size={23} className='bg-black text-white py-1' />
                            </td>
                        </tr>

                        <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>Alta SCC | Mp Radnja</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                            <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                                <AiOutlineSortAscending size={23} className='bg-black text-white py-1' />
                                <RxOpenInNewWindow size={23} className='bg-black text-white py-1' />
                                <BsFileExcel size={23} className='bg-black text-white py-1' />
                            </td>
                        </tr>

                        <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>Alta SCC | Mp Radnja</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                            <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                                <AiOutlineSortAscending size={23} className='bg-black text-white py-1' />
                                <RxOpenInNewWindow size={23} className='bg-black text-white py-1' />
                                <BsFileExcel size={23} className='bg-black text-white py-1' />
                            </td>
                        </tr>

                        <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>Alta SCC | Mp Radnja</td>
                            <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                            <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                                <AiOutlineSortAscending size={23} className='bg-black text-white py-1' />
                                <RxOpenInNewWindow size={23} className='bg-black text-white py-1' />
                                <BsFileExcel size={23} className='bg-black text-white py-1' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MPInvoices