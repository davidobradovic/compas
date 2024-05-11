import React from 'react'

function VPInvoiceCreator({ setModalStatus }) {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', top: 0, right: 0 }} className='absolute flex items-center justify-center'>
        <div className='p-3 w-2/3 h-2/3 bg-white relative'>
            <h1 className='font-semibold w-full'>Kreiraj Veleprodajni racun</h1>
            <div className="addVpInvoiceForm mt-3">
                <label className='text-xs font-semibold' htmlFor="">Kupac</label>
                <input className='p-3 bg-gray-50 border-2 w-full outline-none mb-3' type="text" placeholder='Pretrazi kupca po JIB-u ili Nazivu' />
                <label className='text-xs font-semibold' htmlFor="">Artkili</label>
                <input className='p-3 bg-gray-50 border-2 w-full outline-none mb-3' type="text" placeholder='Pretrazi artikl po Sifri ili Naziv-u' />
                <label className='text-xs font-semibold' htmlFor="">Popust</label>
                <input className='p-3 bg-gray-50 border-2 w-full outline-none mb-3' type="text" placeholder='Unesi Popust' />
                <h3>Ovde jos dodati polja po potrebi</h3>
            </div>
            <div style={{ position: 'absolute', left: 10, bottom: 10, width: 'calc(100% - 20px)' }}  className="action-buttons flex items-center gap-2">
                <button className='bg-black text-white p-3 w-1/2 border-2 border-black'>IZRADI RACUN</button>
                <button onClick={setModalStatus} className='bg-white border-2 border-red-400 text-red-400 p-3 w-1/2'>OTKAZI</button>
            </div>
        </div>
    </div>
  )
}

export default VPInvoiceCreator