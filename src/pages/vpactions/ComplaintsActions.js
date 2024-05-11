import React from 'react'

//icons
import { AiOutlineSearch } from 'react-icons/ai'
import { BsArrowDownSquare } from 'react-icons/bs'

function ComplaintsActions() {
    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3 px-3 justify-between'>
                <h1 className='text-black font-bold text-xl'>Reklamacije</h1>
                <div className='flex items-center gap-3'>
                    <button className='p-3.5 rounded-full bg-black text-white'><AiOutlineSearch size={23} /></button>
                    <input style={{ minWidth: 250 }} className='bg-gray-50 py-3 px-3 border-2 outline-none' type="text" placeholder='Pretrazite reklamaciju po ID-u' />
                </div>
            </div>

            <div className="complaints-container m-3 p-3 bg-white">
                <div className="complaints-filter flex items-center justify-between mb-3">
                    <h1 className='font-semibold ml-3'>Reklamacije</h1>
                    <div className="buttons flex items-center gap-2">
                        <button className='bg-black text-white p-2.5 border-2 border-black'>Opcije</button>
                        <select className='bg-gray-50 py-3 px-4 border-2 outline-none' name="" id="">
                            <option value="" selected disabled>Sortiraj po</option>
                            <option value="">Datum: Zadnji - Prvi</option>
                            <option value="">Datum: Prvi - Zadnji</option>
                            <option value="">Vrijednost Proizvoda: Vece - Manje</option>
                            <option value="">Vrijednost Proizvoda: Manje - Vece</option>
                        </select>
                    </div>
                </div>
                <p className='p-2.5 text-sm mb-2 font-semibold bg-black text-white'>Lista Reklamacija</p>
                <div className="complaints-list flex flex-col gap-2">
                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between pb-2">
                            <h1>Reklamacija: <strong>#726239</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                        <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                        <div className="all-infos pt-2">
                            <h1 className='text-xs mb-2'>Kada sam otvorio kutiju zatekao sam ostecenu masku sa unutrasnje i spoljasnje strane. Isto tako se u kutiji nalazila pogresna maska za pogresan mobitel.</h1>
                            <img className='mb-2' style={{ maxWidth: '20%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2uGPOfm8JqvsmufohJFjfKCwO3dwQCDXMw&usqp=CAU" alt="" />
                            <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                            <div className='pt-2 pb-2'>
                                <p className='text-xs mb-2'>Slika Racuna</p>
                                <img className='' style={{ maxWidth: '20%' }} src="https://nova.rs/wp-content/uploads/2023/02/17/1676639855-Racun-iz-Nemanjine-scaled.jpg" alt="" />
                            </div>
                            <button className='bg-black text-white p-3 w-full'>ODGOVORI NA REKLAMACIJU</button>
                        </div>
                    </div>

                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between">
                            <h1>Reklamacija: <strong>#726239</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                    </div>

                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between">
                            <h1>Reklamacija: <strong>#726239</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                    </div>

                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between">
                            <h1>Reklamacija: <strong>#726239</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                    </div>

                    <div className="complaint-card bg-gray-50 border-2 p-3 ">
                        <div className="main-details w-full flex items-center justify-between">
                            <h1>Reklamacija: <strong>#726239</strong></h1>
                            <button><BsArrowDownSquare size={25} /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComplaintsActions