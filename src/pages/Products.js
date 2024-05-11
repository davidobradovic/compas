import React, { useState } from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineCloudUpload, AiOutlineMore, AiOutlineRight, AiOutlinePrinter, AiOutlineExpandAlt } from 'react-icons/ai'
import { MdAttachMoney, MdOutlineCancel, MdDeleteOutline } from 'react-icons/md'
import { BsPeople, BsClockHistory, BsCalendar2Date } from 'react-icons/bs'
import { PiPackage } from 'react-icons/pi'
import { RiUserStarLine } from 'react-icons/ri'
import { GoIssueDraft } from 'react-icons/go'
import { IoCreateOutline, IoFilterOutline } from 'react-icons/io5'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { CgOptions } from 'react-icons/cg'
import { TbUsers } from 'react-icons/tb'
import { CiShoppingTag } from 'react-icons/ci'
import { LuShoppingBag } from 'react-icons/lu'
import { Link } from 'react-router-dom'


function Products() {

    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-around py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Products</h1>
                <input className='flex bg-gray-50 w-full mx-3 p-3 ' type="text" placeholder='Search products by ID / Name / Article Code' />
            </div>
            {/* <div className="main-details m-3 ">
              <div className="products-filters-container bg-white p-2 flex items-center gap-3">
                <div className='flex flex-col'>
                  <label style={{ fontSize: 11, marginBottom: 2 }} htmlFor="">Kategorija</label>
                  <select className='p-3 bg-gray-50' onChange={(e) => setFilterCategory(e.target.value)}>
                    <option defaultChecked selected disabled>Izaberi kategoriju</option>
                    {
                      categories.map((category) => {
                        return (
                          <option value={category.id} key={category.id}>{category.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                {
                  filterCategory ? (
                    <div className="flex flex-col">
                      <label style={{ fontSize: 11, marginBottom: 2 }} htmlFor="">Podkategorija</label>
                      <select onChange={(e) => setFilterSubCategory(e.target.value)} className='p-3 bg-gray-50' >
                        <option defaultChecked selected disabled>Izaberi podkategoriju</option>
                        {
                          filterCategory ? (
                            subcategories.filter((subcat) => subcat.category_id === Number(filterCategory))
                              .map((subcat, i) => (
                                <option value={subcat.id}>{subcat.name}</option>
                              ))
                          ) : (
                            <option>Nema ponudjenih podkategorija</option>
                          )
                        }
                      </select>
                    </div>
                  ) : null
                }
                {
                  filterSubCategory ? (
                    <div className="flex flex-col">
                      <label style={{ fontSize: 11, marginBottom: 2 }} htmlFor="">Brend</label>
                      <select className='p-3 bg-gray-50' >
                        <option defaultChecked selected disabled>Izaberi brend</option>
                        {
                          filterSubCategory ? (
                            brands.filter((brand) => brand.subcategory_id === Number(filterSubCategory))
                              .map((brand, i) => (
                                <option value={i}>{brand.name}</option>
                              ))
                          ) : (
                            <option>Nema ponudjenih podkategorija</option>
                          )
                        }
                      </select>
                    </div>
                  ) : null
                }
                <div className="flex flex-col">
                  <label style={{ fontSize: 11, marginBottom: 2 }} htmlFor="">Cijena</label>
                  <div className='flex items-center gap-2'>
                    <input style={{ width: 100 }} className='bg-gray-50 p-3' type='number' placeholder='0' />
                    <p>do</p>
                    <input style={{ width: 100 }} className='bg-gray-50 p-3' type='number' placeholder='5000' />
                  </div>
                </div>


              </div>
            </div> */}
            <div className='flex items-center justify-end mt-3 bg-white mx-3 p-3'>
                <div className='flex items-center gap-2'>
                    <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><IoFilterOutline size={20} /> Filters </button>
                    <button className='p-2 border-2 border-black text-black rounded flex items-center gap-2 shadow-md'><CgOptions size={20} /> Options </button>
                </div>
            </div>

            <div className='m-3 flex flex-col'>

                <div className='bg-gray-50 mb-2 p-2 flex items-center justify-between' style={{ height: 75 }}>

                    <div className="main-infos-product h-full w-full flex items-center gap-2">
                        <img style={{ width: 'auto', height: '100%' }} src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                        <div className='h-full flex flex-col justify-center'>
                            <h1 className='text-xl'>Ime Proizvoda</h1>
                            <p className='flex items-center text-xs gap-2'>
                                Tip <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Kategorija <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Podkategorija <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Grupa <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Podgrupa <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Model <AiOutlineRight size={10} color='rgba(0,0,0,.4)' />
                                Brend
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 pr-3'>
                        <h1 className='bg-black p-2 text-white w-fit flex items-center'>$2.123,52</h1>
                        <Link to='/dashboard/product/1'><RxOpenInNewWindow size={21} color='black' /></Link>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Products