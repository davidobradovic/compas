import React, { useState } from 'react'

//style
import './styles/suppliesactions.css'

// icons
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { IoOptionsOutline } from 'react-icons/io5'
import { BsFileExcel } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'
import { GiConfirmed } from 'react-icons/gi'

function SuppliesActions() {

    const [addProductToSupplies, setAddProductToSupplies] = useState(false)

    const [supplieProduct, setSupplieProduct] = useState('')
    const [supplieProductQuantity, setSupplieProductQuantity] = useState(null)

    const [successAddProductToSupplie, setSuccessAddProductToSupplie] = useState(null)

    const handleModalProductToSupplies = () => {
        if (addProductToSupplies === true) {
            setAddProductToSupplies(false)
        } else {
            setAddProductToSupplies(true)
        }
    }

    const handleAddProductToSupplie = () => {
        if (!supplieProduct) {
            setSuccessAddProductToSupplie(false)
        } else {
            setSuccessAddProductToSupplie(true)
        }
    }

    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Zalihe Radnje</h1>
            </div>
            <div className="supplies-filters-container mt-3 mr-3 ml-3 bg-white p-2 flex items-center justify-between">
                <input className='outline-none bg-gray-50 p-3 border-2 w-2/12' type="search" name="" id="" placeholder='Unesite ime ili sifru proizvoda' />
                <div className="sfc-buttons flex items-center gap-2">
                    <button className='bg-black py-3 px-5 text-white border-2 border-black flex items-center gap-2'><IoOptionsOutline size={18} /> Options</button>
                    <button onClick={handleModalProductToSupplies} className={`py-3 px-5 text-white border-2 border-black flex items-center gap-2 ${addProductToSupplies === false ? 'bg-black' : 'bg-red-400 border-red-400'}`}>{addProductToSupplies === false ? (<><AiOutlinePlusCircle size={18} /> Dodaj proizvod na zalihu</>) : (<>Otkazi</>)}</button>
                    {/* <button className='bg-white py-3 px-5 text-black border-2 flex items-center gap-2'><BsFileExcel size={18} /> Export products to Excel</button> */}
                </div>
            </div>
            {
                addProductToSupplies ? (
                    <div className="supplies-add m-3 p-3 bg-white flex flex-wrap items-start justify-start gap-2.5">
                        <select onChange={(e) => setSupplieProduct(e.target.value)} className='bg-gray-50 p-3 border-2 w-full outline-none' name="" id="">
                            <option value="" selected disabled>Izaberi proizvod</option>
                            <option value="iPhone 14 PRO  MAX">iPhone 14 PRO MAX</option>
                            <option value="Crna gumena maskica za iPhone 11">Crna gumena maskica za iPhone 11</option>
                            <option value="Game box 500 sm">Game box 500 sm</option>
                        </select>
                        <div className="sg-action-buttons w-full flex items-center gap-2">
                            <input onChange={(e) => setSupplieProductQuantity(e.target.value)} className='w-5/6 bg-gray-50 p-3 border-2' type="number" name="" id="" placeholder='Unesite kolicinu' />
                            <button onClick={handleAddProductToSupplie} className='bg-black w-1/6 p-3 text-white border-2 border-black'>Potvrdi</button>
                        </div>
                        {
                            successAddProductToSupplie === true ? (
                                <div className="confirmation-window w-full flex items-center justify-center flex-col p-5 gap-3">
                                    <GiConfirmed size={150} className='text-green-300' />
                                    <h1 className='text-xl font-bold'>Confirmed</h1>
                                    <p className='text-sm'>Unijeli ste {supplieProductQuantity} komada : {supplieProduct}</p>
                                </div>
                            ) : successAddProductToSupplie === false ? (
                                <div className="error-window w-full flex items-center justify-center flex-col p-5 gap-3">
                                    <BiErrorCircle size={150} className='text-red-300' />
                                    <h1 className='text-xl font-bold'>Error</h1>
                                    <p className='text-sm'>Greska pri unosenju kolicine na zalihe</p>
                                </div>
                            ) : null
                        }

                    </div>
                ) : null
            }
            <div className='supplies-grid m-3 p-3 bg-white flex flex-wrap items-start justify-start gap-2.5 overflow-auto'>
                <table style={{ borderWidth: 1 }} className='supplies-table w-full border-black'>
                    <thead>
                        <tr className='bg-black text-white'>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Naziv artikla</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Sifra artikla</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Kolicina na stanju</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Datum poslednjeg ulaza</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Prodata kolicina | YTD</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Nabavna cijena</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Prodajna cijena</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>RUC</th>
                            <th style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>RUC %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>iPhone 14 PRO MAX</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>2443701247123</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>650</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>15.06.2023</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>385</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>1.500,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>2.400,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>900,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>75%</td>
                        </tr>
                        <tr>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>Game box 500sm</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>242441247123</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>100</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>15.05.2023</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>775</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>350,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>620,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>270,00</td>
                            <td style={{ minWidth: 200 }} className='font-light text-left text-sm p-3'>56.45%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SuppliesActions