import React, { useState } from 'react'

//icons
import { SiWebmoney } from 'react-icons/si'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TbShoppingBagCheck } from 'react-icons/tb'
import { LiaFileInvoiceSolid } from 'react-icons/lia'
import { BsArrowsExpand, BsFileExcel } from 'react-icons/bs'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function OnlineShop() {

  const [isProductGridExpanded, setIsProductGridExpanded] = useState(null)

  const handleIPGE = () => {
    isProductGridExpanded ? setIsProductGridExpanded(false) : setIsProductGridExpanded(true)
  }

  return (
    <div className='dash-page'>
      <div className="main-controls m-3 flex flex-col gap-3">
        <a href='https://www.digitalcity.ba/' target='_blank' className='w-full bg-black text-white flex items-center justify-center p-3 gap-3'>
          <SiWebmoney size={21} />
          Posjeti Online Shop
        </a>

        <div className="main-analyses w-full flex items-center gap-3">
          <div className="ma-container w-1/3 p-3 bg-gray-50">
            <h1 className='uppercase text-xs flex items-center gap-2 pb-2'><RiMoneyDollarCircleLine size={18} /> Promet</h1>
            <p className='text-sm font-semibold'>250.000,20</p>
          </div>
          <div className="ma-container w-1/3 p-3 bg-gray-50">
            <h1 className='uppercase text-xs flex items-center gap-2 pb-2'><TbShoppingBagCheck size={18} /> Prodati proizvodi</h1>
            <p className='text-sm font-semibold'>45.000</p>
          </div>
          <div className="ma-container w-1/3 p-3 bg-gray-50">
            <h1 className='uppercase text-xs flex items-center gap-2 pb-2'><LiaFileInvoiceSolid size={18} /> Broj racuna</h1>
            <p className='text-sm font-semibold'>36.521</p>
          </div>
        </div>

        <div className="list-of-avaliable-products bg-white p-3 relative pb-5">
          <div className="filter-loap flex items-center justify-between mb-3">
            <h1 className='font-semibold text-sm'>Lista proizvoda</h1>
            <div className="action-buttons flex items-center gap-2 text-xs">
              <button className='bg-black text-white p-3'>Filteri</button>
              <select className='p-3 bg-gray-50 border border-black text-black' name="" id="">
                <option value="" disabled selected>Sortiraj po</option>
                <option value="">Naziv: A - Z</option>
                <option value="">Naziv: Z - A</option>
                <option value="">Broj prodaja: Vece - Manje</option>
                <option value="">Broj prodaja: Manje - Vece</option>
                <option value="">Prodajna cijena: Veca - Manja</option>
                <option value="">Prodajna cijena: Manja - Veca</option>
                <option value="">Nabavna cijena: Veca - Manja</option>
                <option value="">Nabavna cijena: Manja - Veca</option>
              </select>
            </div>
          </div>
          <div style={!isProductGridExpanded ? { maxHeight: 600, overflow: 'auto' } : null} className="products-grid flex items-start flex-wrap justify-start gap-2.5">
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
            <div style={{ width: 'calc(100% / 4 - 0.5rem)', overflow: 'hidden' }} className="product-card bg-gray-50 shadow-md p-2">
              <img className='w-full' src="https://atstore.ba/wp-content/uploads/2022/09/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_4-2.jpg" alt="" />
              <div>
                <h1 className='py-2 font-semibold text-sm'>iPhone 14 PRO MAX</h1>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Prodajna cijena: <strong>2,000.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Nabavna cijena: <strong>1,500.00 KM</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Broj prodaja: <strong>250 kom</strong></p>
                <p className='text-xs pb-2 w-full flex items-center justify-between'>Dostupno za prodaju: <strong>16 kom</strong></p>
                <button className='w-full bg-black text-white p-2'>Details</button>
              </div>
            </div>
          </div>
          <button onClick={handleIPGE} className='absolute bottom-0 left-0 full bg-gray-50 text-xs text-black w-full flex items-center justify-center gap-2 py-2'>Expand <BsArrowsExpand size={15} /></button>
        </div>

        <div className="list-of-orders bg-white p-3 relative">
          <div className="filter-lop flex items-center justify-between">
            <h1 className='font-semibold text-sm'>Lista narudzbi</h1>
            <div className="action-buttons flex items-center gap-2 text-xs">
              <button className='bg-black text-white p-3'>Filteri</button>
              <select className='p-3 bg-gray-50 border border-black text-black' name="" id="">
                <option value="" disabled selected>Sortiraj po</option>
                <option value="">Naziv: A - Z</option>
                <option value="">Naziv: Z - A</option>
                <option value="">Broj prodaja: Vece - Manje</option>
                <option value="">Broj prodaja: Manje - Vece</option>
                <option value="">Prodajna cijena: Veca - Manja</option>
                <option value="">Prodajna cijena: Manja - Veca</option>
                <option value="">Nabavna cijena: Veca - Manja</option>
                <option value="">Nabavna cijena: Manja - Veca</option>
              </select>
            </div>
          </div>
          <div className="orders-list">
            <table style={{ borderWidth: 1, borderColor: 'black' }} className='w-full mt-3'>
              <thead style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} className='bg-black text-white w-full'>
                <tr className=''>
                  <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>ID</th>
                  <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Broj racuna</th>
                  <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Vrijednost narudzbe</th>
                  <th className='font-semibold text-xs text-left p-3 uppercase' style={{ borderRightWidth: 1, borderRightColor: 'white' }}>Datum narudzbe</th>
                  <th style={{ width: 50 }} className='font-semibold text-xs text-center p-3 uppercase'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                  <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                    <Link><RxOpenInNewWindow size={23} className='bg-black text-white py-1' /></Link>
                    <Link><BsFileExcel size={23} className='bg-black text-white py-1' /></Link>
                  </td>
                </tr>

                <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                  <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                    <Link><RxOpenInNewWindow size={23} className='bg-black text-white py-1' /></Link>
                    <Link><BsFileExcel size={23} className='bg-black text-white py-1' /></Link>
                  </td>
                </tr>

                <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                  <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                    <Link><RxOpenInNewWindow size={23} className='bg-black text-white py-1' /></Link>
                    <Link><BsFileExcel size={23} className='bg-black text-white py-1' /></Link>
                  </td>
                </tr>

                <tr style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>#76442</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>3871232388</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>2.250,00 KM</td>
                  <td className='font-light text-xs text-left p-3' style={{ borderRightWidth: 1, borderRightColor: 'black' }}>25.10.2023 | 15:31h</td>
                  <td className='font-light text-xs text-left p-3 flex items-center justify-center gap-2'>
                    <Link><RxOpenInNewWindow size={23} className='bg-black text-white py-1' /></Link>
                    <Link><BsFileExcel size={23} className='bg-black text-white py-1' /></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="actions bg-black text-white p-3 relative">
          <div className="header-actions flex items-center justify-center">
            <h1 className='font-semibold text-base uppercase text-center pb-3 pt-2'>Akcije online prodavnice</h1>
          </div>
          <div className="actions flex flex-col gap-3 mt-2">
            <button style={{ backgroundColor: 'rgb(20, 20, 20)' }} className='text-gray-200 p-3 w-full text-sm'>Dodaj proizvod</button>
            <button style={{ backgroundColor: 'rgb(20, 20, 20)' }} className='text-gray-200 p-3 w-full text-sm'>Dodaj racun</button>
            <button style={{ backgroundColor: 'rgb(20, 20, 20)' }} className='text-gray-200 p-3 w-full text-sm'>Dodaj garanciju</button>
            <button style={{ backgroundColor: 'rgb(20, 20, 20)' }} className='text-gray-200 p-3 w-full text-sm'>Dodaj upravitelja</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OnlineShop