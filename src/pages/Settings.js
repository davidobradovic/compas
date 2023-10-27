import React from 'react'

// styles
import './styles/settings.css'

// icons
import { FiEdit2, FiUserX } from 'react-icons/fi'


function Settings() {
    return (
        <div className='dash-page bg-white h-full'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-2xl'>DC Settings</h1>
            </div>
            <div className='flex flex-col gap-3 px-3'>
                <div className="api-section">
                    <h3 className='font-bold pb-3'>API Settings</h3>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="">WhatsApp API</label>
                        <div className='w-full gap-2 flex items-center'>
                            <input className='w-5/6 bg-gray-50 py-3 px-3 border-2 outline-none' type="text" name="" id="" placeholder='Enter WhatsApp API key' />
                            <button className='w-1/6 bg-black py-3 text-white border-2 border-black'>SUBMIT</button>
                        </div>
                    </div>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="">WeChat API</label>
                        <div className='w-full gap-2 flex items-center'>
                            <input className='w-5/6 bg-gray-50 py-3 px-3 border-2 outline-none' type="text" name="" id="" placeholder='Enter WeChat API key' />
                            <button className='w-1/6 bg-black py-3 text-white border-2 border-black'>SUBMIT</button>
                        </div>
                    </div>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="">SMS API</label>
                        <div className='w-full gap-2 flex items-center'>
                            <input className='w-5/6 bg-gray-50 py-3 px-3 border-2 outline-none' type="text" name="" id="" placeholder='Enter SMS API key' />
                            <button className='w-1/6 bg-black py-3 text-white border-2 border-black'>SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className="api-section">
                    <h3 className='font-bold pb-3'>Employee Settings</h3>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between bg-gray-50 p-2'>
                            <div>
                                <h1 className='text-base font-semibold'>Marko Markovic</h1>
                                <p className='text-xs font-semibold text-gray-400'>Izvrsni direktor</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='bg-black px-2 py-3 text-white flex items-center gap-2 text-xs'><FiEdit2 size={15} /> UREDI</button>
                                <button className='bg-red-500 px-2 py-3 text-white flex items-center gap-2 text-xs'><FiUserX size={15} /> OTKAZ</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between bg-gray-50 p-2'>
                            <div>
                                <h1 className='text-base font-semibold'>Lovro Petrovic</h1>
                                <p className='text-xs font-semibold text-gray-400'>Prodajni menadzer</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='bg-black px-2 py-3 text-white flex items-center gap-2 text-xs'><FiEdit2 size={15} /> UREDI</button>
                                <button className='bg-red-500 px-2 py-3 text-white flex items-center gap-2 text-xs'><FiUserX size={15} /> OTKAZ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className="api-section">
                    <h3 className='font-bold pb-3'>Backup Recovery</h3>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <label className='font-semibold text-xs' htmlFor="">VP Racuni period</label>
                            <div className='w-full gap-2 flex items-center'>
                                <select className='w-5/6 bg-gray-50 py-3 px-3 border-2 outline-none' name="" id="">
                                    <option value="" selected>6 months</option>
                                    <option value="">12 months</option>
                                    <option value="">24 months</option>
                                    <option value="">All data</option>
                                </select>
                                <button className='w-1/6 bg-black py-3 text-white border-2 border-black'>SUBMIT</button>
                            </div>
                        </div>
                        <div>
                            <label className='font-semibold text-xs' htmlFor="">Zalihe period</label>
                            <div className='w-full gap-2 flex items-center'>
                                <select className='w-5/6 bg-gray-50 py-3 px-3 border-2 outline-none' name="" id="">
                                    <option value="" selected>6 months</option>
                                    <option value="">12 months</option>
                                    <option value="">24 months</option>
                                    <option value="">All data</option>
                                </select>
                                <button className='w-1/6 bg-black py-3 text-white border-2 border-black'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings