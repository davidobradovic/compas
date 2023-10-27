import React, { useState } from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineCloudUpload, AiOutlineMore, AiOutlineRight, AiOutlinePrinter, AiOutlineExpandAlt } from 'react-icons/ai'
import { MdAttachMoney, MdOutlineCancel, MdDeleteOutline } from 'react-icons/md'
import { BsPeople, BsClockHistory, BsCalendar2Date, BsFileEarmarkExcel } from 'react-icons/bs'
import { PiPackage } from 'react-icons/pi'
import { RiUserStarLine } from 'react-icons/ri'
import { BiSortAlt2 } from 'react-icons/bi'
import { GoIssueDraft } from 'react-icons/go'
import { IoCreateOutline, IoFilterOutline } from 'react-icons/io5'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { CgOptions } from 'react-icons/cg'
import { TbUsers } from 'react-icons/tb'
import { CiShoppingTag } from 'react-icons/ci'
import { LuShoppingBag } from 'react-icons/lu'
import { ModalWindow } from '../components/products/addProductModal'
import { Link } from 'react-router-dom'


function Orders() {

  const [isOpenOptions, setOpenOptions] = useState(null)

  function openModal() {
    if (isOpenOptions === true) {
      setOpenOptions(false)
    } else {
      setOpenOptions(true)
    }
  }

  return (
    <div className='dash-page'>
      <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-around py-3'>
        <h1 className='text-black font-bold text-xl ml-3'>Orders</h1>
        <input className='flex bg-gray-50 w-full mx-3 p-3 ' type="text" placeholder='Search orders by ID / Product ' />
      </div>
      <div className='flex items-center justify-end mt-3 bg-white mx-3 p-3'>
        <div className='flex items-center gap-2'>
          <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><IoFilterOutline size={20} /> Filteri </button>
          <div className='relative'>
            <button onClick={() => openModal()} className={`p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md ${isOpenOptions === true ? 'bg-black text-white' : null}`}><CgOptions size={20} /> Opcije </button>
            {
              isOpenOptions ? (
                <div style={{ marginTop: 5, right: 0, width: 205 }} className='absolute bg-white w-full p-1 border-2 border-black rounded'>
                  <label htmlFor="" className='text-xs'>Broj po stranici</label>
                  <select className='text-xs bg-gray-100 p-3 w-full border-2 outline-none border-black rounded'>
                    <option selected defaultChecked>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <button className='mt-1 text-xs bg-black text-white p-3 w-full flex items-center justify-between rounded'>Export to Excel <BsFileEarmarkExcel size={20} /> </button>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
      <div className='mb-3 mr-3 ml-3 flex flex-col'>

        <table className='w-full my-3 bg-gray-50'>
          <thead>
            <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>ID</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>BROJ RACUNA</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>TIP</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>GRAD</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>REGIJA</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs'>CIJENA</th>
              <th style={{ width: 'calc(100% / 7)' }} className='text-left font-normal text-gray-400 p-3 text-xs flex items-center'>DATUM</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>#1</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>25000000001</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>VP</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>Sarajevo</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>Veleprodaja Vogosca</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>750.00 BAM</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-gray-400 p-3 text-xs flex items-center'>25.10.2023</td>
              <td><Link to='/dashboard/order/1'><RxOpenInNewWindow size={20} /></Link></td>
            </tr>
            <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>#2</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>25000000002</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>MP</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>Tuzla</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>Maloprodaja</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-black p-3 text-xs '>750.00 BAM</td>
              <td style={{ width: 'calc(100% / 7)' }} className='text-left font-semibold text-gray-400 p-3 text-xs flex items-center'>25.10.2023</td>
              <td><Link to='/dashboard/order/1'><RxOpenInNewWindow size={20} /></Link></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Orders