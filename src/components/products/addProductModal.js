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

export function ModalWindow({ setShowModal }) {

    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    console.log(images)


    const handleImageUpload = (event) => {
        const selectedFiles = event.target.files;

        if (selectedFiles) {
            const newImages = [];
            const newFileNames = [];

            for (let i = 0; i < selectedFiles.length; i++) {
                newImages.push({ url: URL.createObjectURL(selectedFiles[i]), file: selectedFiles[i] });
                newFileNames.push(selectedFiles[i].name);
            }

            setImages([...images, ...newImages]);
            setFileNames(newFileNames);
        }
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <div className='modal-screen relative'>
            <div className="modal-window overflow-auto w-2/3 h-2/3 bg-white p-3 relative flex flex-col justify-between">
                <h1 className='text-center text-2xl py-2'>Dodaj Proizvod</h1>
                <div className='modal-window-form flex items-center flex-wrap overflow-hidden'>
                    <form className='images-upload w-full bg-gray-50 p-3 flex flex-wrap'>
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            className='image-upload-input'
                            multiple
                            onChange={handleImageUpload}
                        />
                        <AiOutlineCloudUpload style={{ cursor: 'pointer' }} className='w-full mb-2' size={40} color='black' onClick={() => document.querySelector('.image-upload-input').click()} />
                        <div className="selected-files bg-black w-full p-2">
                            <p className='text-xs text-gray-200'>Izabrane fotografije</p>
                            <div className="image-preview flex items-center gap-2 flex-wrap">
                                {images.map((image, index) => (
                                    <div key={index} className="image-container relative pt-1">
                                        <img style={{ width: 'auto', height: 100 }} src={image.url} alt="" />
                                        <div style={{ width: 20, height: 20 }} className="absolute bg-red-400 top-1 right-1 rounded-full remove-icon flex items-center justify-center text-white" onClick={() => handleRemoveImage(index)}>
                                            <MdDeleteOutline style={{ cursor: 'pointer' }} size={15} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>

                    <input style={{ width: 'calc(50% - 5px)' }} className='bg-gray-50 p-2' type="text" placeholder='Unesite ime proizvoda' />
                    <input style={{ width: 'calc(50% - 5px)' }} className='bg-gray-50 p-2' type='number' placeholder='Unesite cijenu' />
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Brend Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="brend" id="">
                            <option value="" selected disabled>Izaberi brend proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Tip Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="tip" id="">
                            <option value="" selected disabled>Izaberi tip proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Kategorija Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="kategorija" id="">
                            <option value="" selected disabled>Izaberi kategoriju proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Podkategorija Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="podkategorija" id="">
                            <option value="" selected disabled>Izaberi podkategoriju proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Grupa Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="grupa" id="">
                            <option value="" selected disabled>Izaberi grupu proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Podgrupa Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="podgrupa" id="">
                            <option value="" selected disabled>Izaberi podgrupu proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="select-main-infos" style={{ width: 'calc(100% / 3 - 7px)' }}>
                        <label style={{ fontSize: 12 }} htmlFor="">Model Proizvoda</label>
                        <select className='bg-gray-50 p-2 w-full' name="model" id="">
                            <option value="" selected disabled>Izaberi model proizvoda</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>

                    {/* Dodatne informacije */}
                    <div style={{ borderTopWidth: 2, borderTopStyle: 'dashed', borderTopColor: 'rgba(0,0,0,0.5)' }} className="additional-fields w-full py-2">
                        <h1 className='flex items-center gap-2 pb-2'><AiOutlineMore /> Dodatne informacije</h1>
                        <div className='flex items-center gap-2 w-full mb-2'>
                            <input type="text" className='w-2/5 bg-gray-50 p-2' placeholder='Unesite TIP' />
                            <input type="text" className='w-2/5 bg-gray-50 p-2' placeholder='Unesite Iznos' />
                            <button className='w-1/5 bg-black text-white p-2.5'>Potvrdi</button>
                        </div>
                        <button className='w-full bg-black text-white p-2.5'>Kreiraj informaciju</button>
                    </div>
                </div>
                <div className='action-buttons flex items-center gap-1 w-full'>
                    <button className='w-1/2 p-2 text-white bg-black'>POTVRDI</button>
                    <button className='w-1/2 p-2 text-white bg-red-500'>OTKAZI</button>
                </div>
            </div>

            <button onClick={() => setShowModal(false)} className='absolute top-5 right-5'><AiOutlineCloseCircle size={25} color='white' /></button>
        </div>
    );
}
