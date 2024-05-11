import React from 'react'

//icons
import { BsPeople, BsMap, BsPinMap, BsArrowDownSquare } from 'react-icons/bs'
import { FaCashRegister } from 'react-icons/fa6'
import { TbLocationFilled } from 'react-icons/tb'
import { HiOutlinePhone } from 'react-icons/hi2'
import { TbMoneybag } from 'react-icons/tb'
import { LiaFileInvoiceDollarSolid, LiaFileInvoiceSolid } from 'react-icons/lia'
import { VscSettingsGear } from 'react-icons/vsc'
import FCRSettings from '../../components/fcr/FCRSettings'
import { useNavigate } from 'react-router-dom'

function FiscalCashRegiserPage() {

  const navigate = useNavigate();

  return (
    <div className='dash-page'>
      <div className="main-details m-3 p-3 bg-white">
        <div className='flex items-center gap-4 w-full justify-between pb-2'>
          <div className='flex items-center gap-4'>
            <FaCashRegister size={35} />
            <h1 className='text-sm'>Fiskalna kasa: <strong>#237-232-76</strong></h1>
          </div>
          <button onClick={() => navigate(-1)} className='bg-black text-white p-3'>Nazad</button>
        </div>
        <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
        <div className="other-details pt-2 flex items-center justify-between px-1">
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><BsPinMap size={16} />Vogosca</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><TbLocationFilled size={16} />Vogosca 16a | 71320</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><HiOutlinePhone size={16} />+387 55 222 333</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><TbMoneybag size={16} />185.252,32 KM</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><BsPeople size={16} />25</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><LiaFileInvoiceDollarSolid size={16} />1.520</p>
          <p className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><LiaFileInvoiceSolid size={16} />720</p>
          <a href='#' className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><BsMap size={16} className='text-green-500' />Open in map</a>
          <a href='#' className='flex items-center gap-2 text-xs py-2 px-2 bg-gray-100'><HiOutlinePhone size={16} className='text-blue-500' />Call store</a>
          <a href='#' className='flex items-center gap-2 text-xs bg-black text-white py-2 px-2'><VscSettingsGear size={16} />Postavke fiskalne kase</a>
        </div>
      </div>

      <div className="fcr-invoices m-3 p-3 bg-white">
        <div className="fcr-container-filters flex items-center justify-between mb-3">
          <h3 className='uppercase text-xs font-semibold'>Lista racuna</h3>
          <input className='text-xs bg-gray-50 border-2 p-3' type="text" name="" id="" placeholder='Unesite broj racuna' />
        </div>
        <div className="invoice-list w-full flex flex-col gap-3">
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>#9224244</h1>
              <h1 className='text-xs font-light text-gray-400'>Vrijednost: <strong>150,00</strong> KM</h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>#9224244</h1>
              <h1 className='text-xs font-light text-gray-400'>Vrijednost: <strong>150,00</strong> KM</h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>#9224244</h1>
              <h1 className='text-xs font-light text-gray-400'>Vrijednost: <strong>150,00</strong> KM</h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>#9224244</h1>
              <h1 className='text-xs font-light text-gray-400'>Vrijednost: <strong>150,00</strong> KM</h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>#9224244</h1>
              <h1 className='text-xs font-light text-gray-400'>Vrijednost: <strong>150,00</strong> KM</h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
        </div>
      </div>
      <div className="fcr-warrantys m-3 p-3 bg-white">
        <div className="fcr-container-filters flex items-center justify-between mb-3">
          <h3 className='uppercase text-xs font-semibold'>Lista garancija</h3>
          <input className='text-xs bg-gray-50 border-2 p-3' type="text" name="" id="" placeholder='Unesite ID garancije' />
        </div>
        <div className="invoice-list w-full flex flex-col gap-3">
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>133896193</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>iPhone 13 PRO MAX</strong></h1>
              <p style={{ fontSize: 10, marginTop: 2 }} className='font-medium uppercase'>Trajanje: 2 god</p>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>133896193</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>iPhone 13 PRO MAX</strong></h1>
              <p style={{ fontSize: 10, marginTop: 2 }} className='font-medium uppercase'>Trajanje: 2 god</p>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>133896193</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>iPhone 13 PRO MAX</strong></h1>
              <p style={{ fontSize: 10, marginTop: 2 }} className='font-medium uppercase'>Trajanje: 2 god</p>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>133896193</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>iPhone 13 PRO MAX</strong></h1>
              <p style={{ fontSize: 10, marginTop: 2 }} className='font-medium uppercase'>Trajanje: 2 god</p>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>133896193</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>iPhone 13 PRO MAX</strong></h1>
              <p style={{ fontSize: 10, marginTop: 2 }} className='font-medium uppercase'>Trajanje: 2 god</p>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
        </div>
      </div>
      <div className="fcr-complaints m-3 p-3 bg-white">
        {/* <div className="fcr-container-filters flex items-center justify-between mb-3">
          <h3 className='uppercase text-xs font-semibold'>Lista reklamacija</h3>
          <input className='text-xs bg-gray-50 border-2 p-3' type="text" name="" id="" placeholder='Unesite ID reklamacije' />
        </div>
        <div className="invoice-list w-full flex flex-col gap-3">
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>- 31832</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>Crna gumena maska za iPhone 11</strong></h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>- 31832</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>Crna gumena maska za iPhone 11</strong></h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>- 31832</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>Crna gumena maska za iPhone 11</strong></h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>- 31832</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>Crna gumena maska za iPhone 11</strong></h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
          <div className="invoice-component bg-gray-50 p-2 border-2 flex items-center justify-between w-full">
            <div>
              <h1 className='text-sm font-semibold'>- 31832</h1>
              <h1 className='text-xs font-light text-gray-400'>Proizvod: <strong>Crna gumena maska za iPhone 11</strong></h1>
            </div>
            <button className='bg-black text-white p-2'><BsArrowDownSquare size={20} /></button>
          </div>
        </div> */}
        <h1 className='py-10 w-full text-center font-bold text-2xl'>Nema Reklamacija</h1>
      </div>

      {/* <FCRSettings /> */}

    </div>
  )
}

export default FiscalCashRegiserPage