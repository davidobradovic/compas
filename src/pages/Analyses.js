import React from 'react'
import { useAppData } from '../provider/AppProvider'
import { data, countryData, options, categories, subcategories, brands } from '../data/fakeData'
import '../styles/dash.css'
import {
    Chart as ChartJS, CategoryScale, ArcElement, Tooltip, Legend, LinearScale, Title,
    BarElement,
  } from 'chart.js';
  import { Bar, Pie } from 'react-chartjs-2';
  
  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title
  );
  

function Analyses() {
    return (
        <div className='dash-page'>
            <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-start py-3'>
                <h1 className='text-black font-bold text-xl pl-3'>Analytics</h1>
            </div>
            <div className="chart-container m-3 bg-white p-3">
                <h1 className='font-semibold text-xl py-2'>Products Chart</h1>
                <Pie style={{ maxWidth: 400, maxHeight: 400 }} data={data} />
            </div>
            <div className="chart-container m-3 bg-white p-3">
                <h1 className='font-semibold text-xl py-2'>Country Chart</h1>
                <Bar options={options} style={{ maxWidth: 'auto', maxHeight: 400, }} data={countryData} />
            </div>
        </div>
    )
}

export default Analyses