import React, { useState } from 'react'

//style
import './styles/stockactions.css'

// icons
import { AiOutlinePhone, AiOutlineFieldNumber, AiOutlineClockCircle } from 'react-icons/ai'
import { IoOptionsOutline } from 'react-icons/io5'
import { BiShoppingBag } from 'react-icons/bi'
import { TbZip } from 'react-icons/tb'
import { CiLocationArrow1, CiTimer } from 'react-icons/ci'
import { BsFileExcel, BsCashStack } from 'react-icons/bs'
import { MdOutlineSell, MdAttachMoney, MdOutlineOpenInNew } from 'react-icons/md'

import { ProductsModal, AddProductToStock } from '../../components/vpactions/stockcomponents/StockComponents'


function StockActions() {

    const [addNewProductModal, setAddNewProductModal] = useState(null)
    const [choosedStock, setChoosedStock] = useState('')
    const [addProductModalShow, setAddProductModalShow] = useState('')

    const handleAddProductModal = () => {
        addProductModalShow ? setAddProductModalShow(false) : setAddProductModalShow(true)
    }

    const handleAddNewProductModal = () => {
        addNewProductModal ? setAddNewProductModal(false) : setAddNewProductModal(true)
    }

    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Skladista Radnje</h1>
            </div>
            <div className="stock-filters-container mt-3 mr-3 ml-3 bg-white p-2 flex items-center justify-between">
                <input style={{ minWidth: 350 }} className='outline-none bg-gray-50 p-3 border-2 w-2/12' type="search" name="" id="" placeholder='Unesite ime ili sifru skladista' />
                <div className="sfc-buttons flex items-center gap-2">
                    <button className='bg-black py-3 px-5 text-white border-2 border-black flex items-center gap-2'><IoOptionsOutline size={18} /> Options</button>
                    {/* <button className='bg-white py-3 px-5 text-black border-2 flex items-center gap-2'><BsFileExcel size={18} /> Export products to Excel</button> */}
                </div>
            </div>
            <div className='stock-grid m-3 p-3 bg-white flex flex-wrap items-start justify-start gap-2.5 overflow-auto'>
                <div key='skladiste1' onClick={() => setChoosedStock('skladiste1')} style={{ width: 'calc(100% / 4 - 0.5rem)', minWidth: 250 }} className={`stock-card bg-gray-50 shadow-md p-2 ${choosedStock === 'skladiste1' ? 'bg-blue-400 text-white' : null}`}>
                    <img src="https://www.digitalcity.ba/images/locations/caseland-scc.jpeg" alt="" />
                    <h1 className='text-sm font-bold pt-2'>Caseland SCC / Nivo -1</h1>
                    <p className='font-semibold opacity-50 text-xs'>Prodajno mjesto</p>
                    <div className="stock-details flex flex-col gap-1 my-2">
                        <p className='flex items-center gap-1 text-xs'><CiLocationArrow1 size={18} /> | Sarajevo City Centar, Vrbanja 1 ( Nivo -1 )</p>
                        <p className='flex items-center gap-1 text-xs'><TbZip size={18} /> | 71000, Sarajevo</p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlinePhone size={18} /> | +387 33 520 222</p>
                        <p className='flex items-center gap-1 text-xs'><CiTimer size={18} /> | <strong>Pon - Ned</strong>: 10:00h - 22:00h</p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlineFieldNumber size={18} /> | ID: <strong>4202195300077</strong></p>
                    </div>
                    <button className='w-full bg-black text-white p-3'>ODABERI</button>
                </div>

                <div key='skladiste1' onClick={() => setChoosedStock('skladiste2')} style={{ width: 'calc(100% / 4 - 0.5rem)', minWidth: 250 }} className={`stock-card bg-gray-50 shadow-md p-2 ${choosedStock === 'skladiste2' ? 'bg-blue-400 text-white' : null}`}>
                    <img src="https://www.digitalcity.ba/images/locations/caseland-alta.jpg" alt="" />
                    <h1 className='text-sm font-bold pt-2'>Caseland Alta / Nivo 0</h1>
                    <p className='font-semibold opacity-50 text-xs'>Prodajno mjesto</p>
                    <div className="stock-details flex flex-col gap-1 my-2">
                        <p className='flex items-center gap-1 text-xs'><CiLocationArrow1 size={18} /> | Alta Shopping Centar, Franca Lehara 2 ( Nivo 0 )</p>
                        <p className='flex items-center gap-1 text-xs'><TbZip size={18} /> | 71000, Sarajevo</p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlinePhone size={18} /> | +387 65 610 600</p>
                        <p className='flex items-center gap-1 text-xs'><CiTimer size={18} /> | <strong>Pon - Ned</strong>: 10:00h - 22:00h</p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlineFieldNumber size={18} /> | ID: <strong>4202195300115</strong></p>
                    </div>
                    <button className='w-full bg-black text-white p-3'>ODABERI</button>
                </div>

                <div key='skladiste1' onClick={() => setChoosedStock('skladiste3')} style={{ width: 'calc(100% / 4 - 0.5rem)', minWidth: 250 }} className={`stock-card bg-gray-50 shadow-md p-2 ${choosedStock === 'skladiste3' ? 'bg-blue-400 text-white' : null}`}>
                    <img src="https://www.digitalcity.ba/images/locations/caseland-mostar.jpeg" alt="" />
                    <h1 className='text-sm font-bold pt-2'>Caseland Plaza Mostar / Nivo -1</h1>
                    <p className='font-semibold opacity-50 text-xs'>Prodajno mjesto</p>
                    <div className="stock-details flex flex-col gap-1 my-2">
                        <p className='flex items-center gap-1 text-xs'><CiLocationArrow1 size={18} /> | Plaza Shopping Centar, Bišće Polje bb ( Nivo -1 )</p>
                        <p className='flex items-center gap-1 text-xs'><TbZip size={18} /> | 88000, Mostar</p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlinePhone size={18} /> | +387 62 602 600</p>
                        <p className='flex items-start gap-1 text-xs'><CiTimer size={18} /><strong>Pon - Sub</strong>: 09:00h - 21:00h | <strong>Ned</strong>: 13:00h - 21:00h </p>
                        <p className='flex items-center gap-1 text-xs'><AiOutlineFieldNumber size={18} /> | ID: <strong>4202195300093</strong></p>
                    </div>
                    <button className='w-full bg-black text-white p-3'>ODABERI</button>
                </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="stock-details ml-3 mb-3 mr-3 p-3 bg-white">
                <div className="sd-filters flex items-center justify-between pb-3" >
                    <select name="" id="" className='outline-none p-3' value={choosedStock}>
                        <option value="" selected disabled>Izaberi skladiste ili prodajno mjesto</option>
                        <option value="skladiste1">Caseland SCC / Nivo -1</option>
                        <option value="skladiste2">Caseland Alta / Nivo 0</option>
                        <option value="skladiste3">Caseland Plaza Mostar / Nivo -1</option>
                    </select>
                    <div className="buttons">
                        <button className='flex items-center p-3 bg-black text-white gap-2'>Export to Excel <BsFileExcel size={18} /> </button>
                    </div>
                </div>
                <div className="sd-informations">
                    <div className="main-sd-informations flex flex-wrap items-center justify-between gap-2. pb-2">
                        <div style={{ width: 'calc(100% / 3 - 0.5rem)' }} className="msi-card bg-gray-100 border-2 p-3">
                            <h1 className='flex items-center gap-2 w-full'><BsCashStack size={18} className='text-green-400' /> <strong>Ostvareni promet</strong></h1>
                            <p className='text-sm pt-2 text-gray-500'>175.680,20 KM</p>
                        </div>
                        <div style={{ width: 'calc(100% / 3 - 0.5rem)' }} className="msi-card bg-gray-100 border-2 p-3">
                            <h1 className='flex items-center gap-2 w-full'><MdOutlineSell size={18} className='text-blue-400' /> <strong>Prodatih proizvoda</strong></h1>
                            <p className='text-sm pt-2 text-gray-500'>1.450 komada</p>
                        </div>
                        <div style={{ width: 'calc(100% / 3 - 0.5rem)' }} className="msi-card bg-gray-100 border-2 p-3">
                            <h1 className='flex items-center gap-2 w-full'><BiShoppingBag size={18} className='text-yellow-400' /> <strong>Prosjecno dnevnih prodaja</strong></h1>
                            <p className='text-sm pt-2 text-gray-500'>70</p>
                        </div>
                    </div>
                    <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                    <div className="latest-invoices py-2">
                        <p className='text-sm font-semibold bg-black text-white p-2'>Zadnje izdati racuni</p>
                        <div className="list-of-latest-invoices mt-2 flex flex-col gap-2 w-full">
                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>

                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>
                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>
                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>
                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>
                            <div style={{ overflow: 'hidden' }} className="latest-invoice-card bg-gray-50 border-2 p-2 w-full flex items-center justify-between">
                                <div className="invoice-main-details flex items-center gap-1.5">
                                    <h1 className='flex items-center gap-0.5 text-sm font-bold'>#759</h1>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><AiOutlineFieldNumber size={18} />23263283692</h3>|
                                    <h3 className='flex items-center gap-1 text-xs'><AiOutlineClockCircle size={18} />27.10.2023 u 19:30h</h3>|
                                    <h3 className='flex items-center gap-0.5 text-xs'><MdAttachMoney size={18} />250,50 KM</h3>
                                </div>
                                <button className='bg-black text-white p-2'><MdOutlineOpenInNew size={18} /></button>
                            </div>

                        </div>
                    </div>
                    <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                    <div style={{ overflow: 'hidden' }} className="workers-at-stock pt-2 pb-2">
                        <p className='text-sm font-semibold bg-black text-white p-2'>Radnici</p>
                        <div className="list-of-workers mt-2">
                            <div className="worker-card bg-gray-50 p-3 border-2 mb-2 flex items-center justify-between">
                                <div className="main-worker-infos flex items-center gap-2">
                                    <img style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: '50%', padding: 5 }} src="https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-512x488-rddkk3u9.png" alt="" />
                                    <div>
                                        <h3 className='font-semibold text-sm'>Marko Markovic</h3>
                                        <p className='text-xs'>Kasir/ka</p>
                                    </div>
                                </div>
                                <div className="worker-buttons flex items-center gap-2">
                                    <button className='bg-black p-3 text-white'>Opcije</button>
                                    <button className='bg-black p-3 text-white'>Radno vrijeme</button>
                                </div>
                            </div>
                            <div className="worker-card bg-gray-50 p-3 border-2 flex items-center justify-between">
                                <div className="main-worker-infos flex items-center gap-2">
                                    <img style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: '50%', padding: 5 }} src="https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-512x488-rddkk3u9.png" alt="" />
                                    <div>
                                        <h3 className='font-semibold text-sm'>Ajdin Ajdinovic</h3>
                                        <p className='text-xs'>Menadzer</p>
                                    </div>
                                </div>
                                <div className="worker-buttons flex items-center gap-2">
                                    <button className='bg-black p-3 text-white'>Opcije</button>
                                    <button className='bg-black p-3 text-white'>Radno vrijeme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                    <div style={{ overflow: 'hidden' }} className="reports-in-stock pt-2 flex items-center gap-2">
                        <button className='w-1/3 bg-gray-50 border-2 px-3 py-5 flex items-center justify-between'>Reklamacije <MdOutlineOpenInNew size={23} /> </button>
                        <button className='w-1/3 bg-gray-50 border-2 px-3 py-5 flex items-center justify-between'>Garancije <MdOutlineOpenInNew size={23} /> </button>
                        <button onClick={handleAddProductModal} className='w-1/3 bg-gray-50 border-2 px-3 py-5 flex items-center justify-between'>Proizvodi <MdOutlineOpenInNew size={23} /> </button>
                    </div>
                </div>
            </div>


            {
                addProductModalShow ? <ProductsModal modalExitFunction={() => setAddProductModalShow(null)} newProductFunction={handleAddNewProductModal} /> : null
            }
            {
                addNewProductModal ? <AddProductToStock modalExitFunction={() => setAddNewProductModal(null)} /> : null
            }
        </div>
    )
}

export default StockActions