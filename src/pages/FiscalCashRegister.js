import React from 'react'

//icons
import { CiLocationArrow1 } from 'react-icons/ci'
import { CgOptions } from 'react-icons/cg'
import { MdOutlineFilterAlt, MdOutlinePhoneEnabled } from 'react-icons/md'
import { FaCashRegister } from 'react-icons/fa6'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TbMoneybag } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function FiscalCashRegister() {
  return (
    <div className='dash-page'>
      <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3 px-3 justify-between'>
        <h1 className='text-black font-bold text-xl'>Fiskalne Kase</h1>
      </div>
      <div className="filter-fcr m-3 p-3 bg-white flex items-center justify-between">
        <input className='p-3 bg-gray-50 border-2 outline-none text-sm' type="text" name="" id="" placeholder='Unesite ID fiskalne kase' />
        <div className="fcr-buttons flex items-center gap-2">
          <button className='p-3 bg-black text-white border-2 border-black flex items-center gap-2 text-sm'><CgOptions size={18} /> Opcije</button>
          <button className='p-3 bg-black text-white border-2 border-black flex items-center gap-2 text-sm'><MdOutlineFilterAlt size={18} /> Filteri</button>
          <select className='p-3 bg-black text-white border-2 border-black outline-none' name="" id="">
            <option value="" selected disabled>Sort by</option>
            <option value="">Datum: Poslednji - Prvi</option>
            <option value="">Datum: Prvi - Poslednji</option>
            <option value="">Promet: Veci - Manji</option>
            <option value="">Promet: Manji - Veci</option>
          </select>
        </div>
      </div>
      <div className="fcr-container m-3 p-3 bg-white">
        <h1 className='uppercase text-sm font-semibold pb-2'>Lista fiskalnih kasa</h1>
        <div className="fcr-list flex flex-col gap-2">
          <div className="fcr-container bg-gray-50 border-2 p-4 flex items-center justify-between">
            <div className="main-details flex items-center gap-4">
              <FaCashRegister size={44} />
              <div className="reg-details">
                <h3>Fiskalna kasa: #7884-922-48</h3>
                <div className="other-details flex items-center gap-2 py-1">
                  <p className='flex items-center gap-2 text-xs'><CiLocationArrow1 size={17} /> Vogosca | Vogosca bb | 71320</p>
                  <a href='tel:+38766415295' className='flex items-center gap-2 text-xs text-blue-400 hover:bg-blue-400 hover:text-gray-200'><MdOutlinePhoneEnabled size={17} /> +387 55-122-233</a>
                  <p className='flex items-center gap-2 text-xs'><TbMoneybag size={17} /> 185.250,75 KM</p>
                </div>
              </div>
            </div>
            <button className='bg-black text-white p-3'><RxOpenInNewWindow size={30} /></button>
          </div>
          <div className="fcr-container bg-gray-50 border-2 p-4 flex items-center justify-between">
            <div className="main-details flex items-center gap-4">
              <FaCashRegister size={44} />
              <div className="reg-details">
                <h3>Fiskalna kasa: #7884-922-48</h3>
                <div className="other-details flex items-center gap-2 py-1">
                  <p className='flex items-center gap-2 text-xs'><CiLocationArrow1 size={17} /> Vogosca | Vogosca bb | 71320</p>
                  <a href='tel:+38766415295' className='flex items-center gap-2 text-xs text-blue-400 hover:bg-blue-400 hover:text-gray-200'><MdOutlinePhoneEnabled size={17} /> +387 55-122-233</a>
                  <p className='flex items-center gap-2 text-xs'><TbMoneybag size={17} /> 185.250,75 KM</p>
                </div>
              </div>
            </div>
            <Link to='/dashboard/fiscal-cash-regiser/1' className='bg-black text-white p-3'><RxOpenInNewWindow size={30} /></Link>
          </div>
          <div className="fcr-container bg-gray-50 border-2 p-4 flex items-center justify-between">
            <div className="main-details flex items-center gap-4">
              <FaCashRegister size={44} />
              <div className="reg-details">
                <h3>Fiskalna kasa: #7884-922-48</h3>
                <div className="other-details flex items-center gap-2 py-1">
                  <p className='flex items-center gap-2 text-xs'><CiLocationArrow1 size={17} /> Vogosca | Vogosca bb | 71320</p>
                  <a href='tel:+38766415295' className='flex items-center gap-2 text-xs text-blue-400 hover:bg-blue-400 hover:text-gray-200'><MdOutlinePhoneEnabled size={17} /> +387 55-122-233</a>
                  <p className='flex items-center gap-2 text-xs'><TbMoneybag size={17} /> 185.250,75 KM</p>
                </div>
              </div>
            </div>
            <button className='bg-black text-white p-3'><RxOpenInNewWindow size={30} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiscalCashRegister