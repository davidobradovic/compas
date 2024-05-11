import React, { useState } from 'react'
import '../styles/top-data.css'
import { Link } from 'react-router-dom'

// icons
import { BsFileExcel } from 'react-icons/bs'
import { RxOpenInNewWindow } from 'react-icons/rx'


function TopData() {

  return (
    <div className='dash-page'>
      <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-between py-3 px-3'>
        <h1 className='text-black font-bold text-xl'>Top Analtika</h1>
        <button className='bg-black text-white p-2 text-xs flex items-center gap-3'>Export to Excel <BsFileExcel size={22} /></button>
      </div>
      <div className='m-3 bg-white p-3'>

        <div className="tables flex items-start gap-3 pb-3">
          <div className="top-customers w-1/2">
            <div className="filter-container w-full p-2 flex items-center justify-between">
              <h1>Top Kupci</h1>
              <div className="filer-buttons flex items-center gap-2">
                <button className='bg-black text-white py-2 px-3'>Options</button>
                <select className='py-2 px-3 outline-none bg-gray-50 border-2' name="" id="">
                  <option value="" selected disabled>Sort by</option>
                  <option value="">Name A - Z</option>
                  <option value="">Sells Low - High</option>

                </select>
              </div>
            </div>
            <table className='top-data-table w-full mt-2'>
              <thead>
                <tr className='bg-black'>
                  <th className='text-left text-xs font-light p-3 text-white'>Naziv Kupca</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Ostvareni Promet</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Kupljenih Proizvoda</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Najvise kupljeni proizvod</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'> Benjamin Jukic</td>
                  <td className='text-left text-xs font-light p-3 text-black'>85,254.10</td>
                  <td className='text-left text-xs font-light p-3 text-black'>850</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>Crna gumena maska za iPhone 11</td>
                </tr>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>David Obradovic</td>
                  <td className='text-left text-xs font-light p-3 text-black'>42,142.10</td>
                  <td className='text-left text-xs font-light p-3 text-black'>784</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>Slusalice USB-C</td>
                </tr>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>Admir Melic</td>
                  <td className='text-left text-xs font-light p-3 text-black'>17,329.10</td>
                  <td className='text-left text-xs font-light p-3 text-black'>1102</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>Bjela gumena maskica za Samsung A11 / A12 / A13 / A16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="top-products w-1/2">
            <div className="filter-container w-full p-2 flex items-center justify-between">
              <h1>Top Proizvodi</h1>
              <div className="filer-buttons flex items-center gap-2">
                <button className='bg-black text-white py-2 px-3'>Options</button>
                <select className='py-2 px-3 outline-none bg-gray-50 border-2' name="" id="">
                  <option value="" selected disabled>Sort by</option>
                  <option value="">Name A - Z</option>
                  <option value="">Name Z - A</option>
                  <option value="">Sells Low - High</option>
                  <option value="">Sells High - Low</option>
                </select>
              </div>
            </div>
            <table className='top-data-table w-full mt-2'>
              <thead>
                <tr className='bg-black'>
                  <th className='text-left text-xs font-light p-3 text-white'>Naziv Artikla</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Cijena proizvoda</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Prodata kolicina</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>iPhone 15 PRO MAX</td>
                  <td className='text-left text-xs font-light p-3 text-black'>2,200.00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>1</td>
                </tr>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>Crna gumena maskica za iPhone 11</td>
                  <td className='text-left text-xs font-light p-3 text-black'>1,630.00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>236</td>
                </tr>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>Game box 500 sm</td>
                  <td className='text-left text-xs font-light p-3 text-black'>2.500.00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
        <div className="selected-user-table w-full">
          <div className="top-customers w-full">
            <div className="filter-container w-full p-2 flex items-center justify-between">
              <select name="" id="" className='outline-none bg-white py-3'>
                <option value="">Izaberi kupca</option>
                <option value="">Benjamin Jukic</option>
                <option value="">David Obradovic</option>
                <option value="">Admir Melic</option>
              </select>
              <div className="filer-buttons flex items-center gap-2">
                <button className='bg-black text-white py-2 px-3'>Options</button>
                <select className='py-2 px-3 outline-none bg-gray-50 border-2' name="" id="">
                  <option value="" selected disabled>Sort by</option>
                  <option value="">Name A - Z</option>
                  <option value="">Sells Low - High</option>

                </select>
              </div>
            </div>
            <table className='top-data-table w-full '>
              <thead>
                <tr className='bg-black'>
                  <th className='text-left text-xs font-light p-3 text-white'>Naziv Artikla</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Promet</th>
                  <th className='text-left text-xs font-light p-3 text-white'>Kolicina</th>
                  <th className='text-left text-xs font-light p-3 text-white'>RUC</th>
                  <th className='text-left text-xs font-light p-3 text-white'>RUC %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-left text-xs font-light p-3 text-black'>iPhone 15 PRO MAX</td>
                  <td className='text-left text-xs font-light p-3 text-black'>2.200,00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>1</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>300.00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>13.63%</td>
                </tr>
                <tr className='bg-red-400'>
                  <td className='text-left text-xs font-light p-3 text-black'>Crna gumena maskica za iPhone 11</td>
                  <td className='text-left text-xs font-light p-3 text-black'>0</td>
                  <td className='text-left text-xs font-light p-3 text-black'>0</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>0</td>
                  <td className='text-left text-xs font-light p-3 text-black'>0</td>
                </tr>
                <tr>
                <td className='text-left text-xs font-light p-3 text-black'>Game box 500 sm</td>
                  <td className='text-left text-xs font-light p-3 text-black'>1.000,00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>2</td>
                  <td style={{ maxWidth: 170 }} className='text-left text-xs font-light p-3 text-black'>250.00</td>
                  <td className='text-left text-xs font-light p-3 text-black'>25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopData