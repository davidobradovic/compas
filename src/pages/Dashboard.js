import React from 'react'

// Icons
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdAttachMoney, MdOutlineCancel } from 'react-icons/md'
import { BsPeople, BsClockHistory } from 'react-icons/bs'
import { PiPackage } from 'react-icons/pi'
import { RiUserStarLine } from 'react-icons/ri'
import { GoIssueDraft } from 'react-icons/go'

// data
import { useAppData } from '../provider/AppProvider'
import '../styles/dash.css'



function Dashboard() {

  // const [showModal, setShowModal] = useState(null)
  // const { selectedNav } = useAppData();


  // function valuetext(value) {
  //   return `${value}°C`;
  // }

  // const [filterCategory, setFilterCategory] = useState(null)
  // const [filterSubCategory, setFilterSubCategory] = useState(null)
  // const [value, setValue] = useState([0, 5000]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className='w-full'>
      <div className='dash-page'>
        <div style={{ height: 70 }} className='navigation-bar bg-white flex items-center justify-around py-3'>
          <h1 className='text-black font-bold text-xl'>Dashboard</h1>
          <input className='flex bg-gray-50 w-5/6 p-3 ' type="text" placeholder='Search something...' />
          <div style={{ width: 30, height: 30 }} className='bg-red-500'></div>
        </div>
        <div className='main-details m-3 flex items-center gap-3 flex-wrap'>
          <div className='main-detail bg-gray-50 p-3' style={{ width: 'calc(50% - 6px)' }}>
            <h3 className='flex items-center gap-2'><MdAttachMoney size={20} className='text-green-400' /> Earnings</h3>
            <h1 className='mt-3 font-bold'>27.550.232</h1>
          </div>
          <div className='main-detail bg-gray-50 p-3' style={{ width: 'calc(50% - 6px)' }}>
            <h3 className='flex items-center gap-2'><PiPackage size={20} className='text-black' /> Orders</h3>
            <h1 className='mt-3 font-bold'>1m +</h1>
          </div>
          <div className='main-detail bg-gray-50 p-3' style={{ width: 'calc(50% - 6px)' }}>
            <h3 className='flex items-center gap-2'><BsPeople size={20} className='text-black' /> Customers</h3>
            <h1 className='mt-3 font-bold'>20k +</h1>
          </div>
          <div className='main-detail bg-gray-50 p-3' style={{ width: 'calc(50% - 6px)' }}>
            <h3 className='flex items-center gap-2'><RiUserStarLine size={20} className='text-black' /> Regular Customers</h3>
            <h1 className='mt-3 font-bold'>5k +</h1>
          </div>
        </div>
        <div className="m-3 latest-orders">
          <div className='latest-order-navigation flex items-center gap-5 w-full overflow-auto'>
            <input className='bg-gray-50 p-3' style={{ width: 250, fontSize: '70%', height: 40 }} type="text" placeholder='Enter Order Number or Customer Name' />
            <button className='flex items-center gap-2 bg-gray-50 p-3 text-xs text-gray-500'><GoIssueDraft size={12} /> Drafts</button>
            <button className='flex items-center gap-2 bg-gray-50 p-3 text-xs text-yellow-500'><BsClockHistory size={12} />Pending</button>
            <button className='flex items-center gap-2 bg-gray-50 p-3 text-xs text-green-500'><AiOutlineCheckCircle size={12} /> Completed</button>
            <button className='flex items-center gap-2 bg-gray-50 p-3 text-xs text-red-500'><MdOutlineCancel size={12} /> Cancelled</button>
          </div>
          <table className='w-full my-3 bg-gray-50'>
            <thead>
              <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
                <th className='w-1/5 text-left font-normal text-gray-400 p-3 text-xs '>ID</th>
                <th className='w-1/5 text-left font-normal text-gray-400 p-3 text-xs '>NUMBER</th>
                <th className='w-1/5 text-left font-normal text-gray-400 p-3 text-xs '>CUSTOMER</th>
                <th className='w-1/5 text-left font-normal text-gray-400 p-3 text-xs '>PRICE</th>
                <th className='w-1/5 text-left font-normal text-gray-400 p-3 text-xs flex items-center'>DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>#1</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>25000000001</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>David Obradovic</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>750.00 BAM</td>
                <td className='w-1/5 text-left font-semibold text-gray-400 p-3 text-xs flex items-center'>25.10.2023</td>
              </tr>
              <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>#2</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>25000000002</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>Zorica Obradovic</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>60.00 BAM</td>
                <td className='w-1/5 text-left font-semibold text-gray-400 p-3 text-xs flex items-center'> 24.10.2023</td>
              </tr>
              <tr style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>#1</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>25000000003</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>Lovro Petrovic</td>
                <td className='w-1/5 text-left font-semibold text-black p-3 text-xs '>200.00 BAM</td>
                <td className='w-1/5 text-left font-semibold text-gray-400 p-3 text-xs flex items-center'> 23.10.2023</td>
              </tr>
            </tbody>
          </table>
        </div>




      </div>
    </div>
  )
}

export default Dashboard