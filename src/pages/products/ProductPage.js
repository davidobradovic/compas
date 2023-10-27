import React from 'react'

//icons
import { AiOutlineClockCircle } from 'react-icons/ai'
import { LiaLocationArrowSolid, LiaPuzzlePieceSolid, LiaFileInvoiceSolid } from 'react-icons/lia'
import { BsBoxes, BsCash, BsShopWindow } from 'react-icons/bs'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { data, options, countryData } from '../../data/fakeData'

import {
    Chart as ChartJS, CategoryScale, ArcElement, Tooltip, Legend, LinearScale, Title,
    BarElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title
);

function ProductPage() {
    return (
        <div className='dash-page flex gap-3'>
            <div style={{ maxHeight: '97.55vh', overflow: 'auto' }} className='bg-white ml-3 mt-3 mb-3 p-3 h-full w-1/2'>
                <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                <h1 className='font-bold'>iPhone 14 PRO MAX</h1>
                <h3 className='pb-2'>2,100.00 BAM</h3>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className='pt-2 pb-2'>
                    <label htmlFor="" className='font-semibold text-base uppercase'>Specifications</label>
                    <p className='text-sm'>512 GB / 1 TB</p>
                    <p className='text-sm'>48 MP / 12 MP</p>
                    <p className='text-sm'>Black / Gold / Purple</p>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className='pt-2'>
                    <label htmlFor="" className='font-semibold text-base uppercase'>Description</label>
                    <p style={{ fontSize: 13 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident! Qui aperiam dolorem ipsa iste aliquam illo molestias enim praesentium veritatis alias itaque, esse id debitis inventore. Ex, enim dolor.</p>
                </div>
            </div>
            <div style={{ maxHeight: '97.55vh', overflow: 'auto' }} className='bg-white mt-3 mr-3 mb-3 p-3 h-full w-1/2'>
                <div>
                    <label htmlFor="" className='uppercase font-semibold text-sm'>Last sells</label>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 25.09.2023 u 11.43h</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Maloprodaja SCC</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 1 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 710 / 709 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 2.150,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 25.09.2023 u 11.43h</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Maloprodaja SCC</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 1 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 710 / 709 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 2.150,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 25.09.2023 u 11.43h</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Maloprodaja SCC</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 1 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 710 / 709 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 2.150,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 25.09.2023 u 11.43h</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Maloprodaja SCC</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 1 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 710 / 709 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 2.150,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                <div>
                    <label htmlFor="" className='uppercase font-semibold text-sm'>VP Details</label>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 21.08.2023</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Mobile Studio doo</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 15 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 801 / 786 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 27.000,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 21.08.2023</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Mobile Studio doo</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 15 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 801 / 786 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 27.000,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 21.08.2023</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Mobile Studio doo</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 15 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 801 / 786 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 27.000,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-100 mt-2 p-3 justify-between'>
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 21.08.2023</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Mobile Studio doo</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaPuzzlePieceSolid size={20} /> 15 kom </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 801 / 786 </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaFileInvoiceSolid size={20} /> 27.000,00 BAM </h1>|
                        <Link className='bg-black p-1 text-white' to='/dashboard/product/1'><RxOpenInNewWindow size={21} /></Link>
                    </div>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                <div>
                    <label htmlFor="" className='uppercase font-semibold text-sm'>Analitika Prodaje</label>
                    <Bar options={options} style={{ maxWidth: '100%', maxHeight: 250, }} data={countryData} />
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                <div className=''>
                    <label htmlFor="" className='uppercase font-semibold text-sm w-full'>ANALITICKI UVID</label>
                    <div className='flex items-center justify-between p-3'>
                        <h1 className='flex items-center gap-2 text-xs'><BsBoxes size={20} /> 510</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><AiOutlineClockCircle size={20} /> 12.01.2024</h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsCash size={20} /> 2.005,00 BAM </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><LiaLocationArrowSolid size={20} /> Sarajevo </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><MdOutlineCalendarMonth size={20} /> Septembar </h1>|
                        <h1 className='flex items-center gap-2 text-xs'><BsShopWindow size={20} /> VP Vogosca </h1>
                    </div>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200 mt-2 mb-2'></div>
                <div className='flex items-center gap-2'>
                    <input className='p-3 w-2/5 outline-none bg-gray-50 border-2 border-gray-100' type="number" name="" id="" placeholder='Kolcina za narudzbu' />
                    <button className='p-3.5 w-3/5 bg-black text-white'>NARUCI</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage