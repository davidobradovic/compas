import React, { useState } from 'react'

//style
import './styles/productactions.css'

// icons
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { IoOptionsOutline } from 'react-icons/io5'
import { BsFileExcel } from 'react-icons/bs'
import { ModalWindow } from '../../components/products/addProductModal'

function ProductActions() {

    const [showModal, setShowModal] = useState(null)

    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl ml-3'>Proizvod Radnje</h1>
            </div>
            <div className="product-filters-container mt-3 mr-3 ml-3 bg-white p-2 flex items-center justify-between">
                <input className='outline-none bg-gray-50 p-3 border-2 w-2/12' type="search" name="" id="" placeholder='Unesite ime proizvoda' />
                <div className="pfc-buttons flex items-center gap-2">
                    <button className='bg-black py-3 px-5 text-white border-2 border-black flex items-center gap-2'><IoOptionsOutline size={18} /> Options</button>
                    <button className='bg-white py-3 px-5 text-black border-2 flex items-center gap-2'><BsFileExcel size={18} /> Export products to Excel</button>
                    <button onClick={() => setShowModal(true)} className='bg-black py-3 px-5 text-white border-2 border-black flex items-center gap-2'><AiOutlinePlusCircle size={18} /> Dodaj proizvod</button>
                </div>
            </div>
            <div className='products-grid m-3 p-3 bg-white flex items-start flex-wrap justify-start gap-2.5'>
                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>

                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>
                <div style={{ width: 'calc(100% / 5 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
                    <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
                    <div>
                        <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                        <button className='w-full bg-black text-white p-2'>Details</button>
                    </div>
                </div>
            </div>
            {showModal ? <ModalWindow setShowModal={setShowModal} /> : null}
        </div>
    )
}

export default ProductActions